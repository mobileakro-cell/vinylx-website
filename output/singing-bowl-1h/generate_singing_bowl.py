#!/usr/bin/env python3
"""Generate a deterministic one-hour original singing-bowl soundscape as raw PCM."""

import math
import sys

import numpy as np
from scipy.signal import lfilter


SR = 32_000
DURATION = 3_600.0
CHUNK = 5.0
RNG = np.random.default_rng(20260928)


def schedule_events():
    events = []
    t = 2.0
    fundamentals = np.array([92.50, 110.00, 130.81, 146.83, 174.61, 196.00, 220.00])
    while t < DURATION - 20:
        section = t / DURATION
        # More space later in the program to support sleep and deep relaxation.
        gap = RNG.uniform(7.0 + 8.0 * section, 16.0 + 13.0 * section)
        t += gap
        fundamental = float(RNG.choice(fundamentals)) * float(RNG.uniform(0.985, 1.015))
        events.append(
            {
                "time": t,
                "f": fundamental,
                "decay": float(RNG.uniform(18.0, 38.0) * (1.0 + 0.35 * section)),
                "amp": float(RNG.uniform(0.075, 0.13) * (1.0 - 0.25 * section)),
                "pan": float(RNG.uniform(-0.65, 0.65)),
                "phase": RNG.uniform(0, 2 * np.pi, 7),
            }
        )
    return events


EVENTS = schedule_events()
RATIOS = np.array([1.0, 2.01, 2.96, 4.08, 5.43, 6.79, 8.13])
WEIGHTS = np.array([1.0, 0.52, 0.31, 0.20, 0.13, 0.085, 0.05])


def soft_limit(x):
    return np.tanh(x * 1.25) / np.tanh(1.25)


def main():
    frames_per_chunk = int(CHUNK * SR)
    total_chunks = int(math.ceil(DURATION / CHUNK))
    # Smooth low-frequency noise state, different in each channel.
    water_state = np.zeros(2, dtype=np.float64)

    for chunk_index in range(total_chunks):
        start = chunk_index * CHUNK
        frame_count = min(frames_per_chunk, int(DURATION * SR) - chunk_index * frames_per_chunk)
        local = np.arange(frame_count, dtype=np.float64) / SR
        absolute = start + local
        left = np.zeros(frame_count, dtype=np.float64)
        right = np.zeros(frame_count, dtype=np.float64)

        # Warm, barely audible evolving room drone.
        slow = 0.72 + 0.28 * np.sin(2 * np.pi * absolute / 173.0)
        drone = (
            0.010 * np.sin(2 * np.pi * 55.0 * absolute)
            + 0.006 * np.sin(2 * np.pi * 82.41 * absolute + 0.8)
            + 0.004 * np.sin(2 * np.pi * 110.0 * absolute + 1.9)
        ) * slow
        left += drone * (0.94 + 0.06 * np.sin(2 * np.pi * absolute / 91.0))
        right += drone * (0.94 + 0.06 * np.sin(2 * np.pi * absolute / 107.0 + 1.1))

        # Singing-bowl strikes with slightly inharmonic partials and natural attacks.
        for event in EVENTS:
            age = absolute - event["time"]
            active = (age >= 0.0) & (age <= event["decay"] * 5.0)
            if not np.any(active):
                continue
            a = age[active]
            attack = 1.0 - np.exp(-a / 0.055)
            envelope = attack * np.exp(-a / event["decay"])
            shimmer = 1.0 + 0.055 * np.sin(2 * np.pi * 0.16 * a + event["phase"][0])
            tone = np.zeros_like(a)
            for ratio, weight, phase in zip(RATIOS, WEIGHTS, event["phase"]):
                freq = event["f"] * ratio
                tone += weight * np.sin(2 * np.pi * freq * a + phase)
            tone *= event["amp"] * envelope * shimmer
            # Soft mallet transient, kept restrained for sleep listening.
            tone += 0.016 * np.sin(2 * np.pi * event["f"] * 0.51 * a) * np.exp(-a / 0.32)
            pan = event["pan"]
            lgain = math.sqrt((1.0 - pan) * 0.5)
            rgain = math.sqrt((1.0 + pan) * 0.5)
            left[active] += tone * lgain
            right[active] += tone * rgain

        # Very low-level, slowly filtered water-like texture.
        noise = RNG.normal(0.0, 1.0, (2, frame_count))
        alpha = 0.0018
        filtered = np.empty_like(noise)
        for channel in range(2):
            filtered[channel], final_state = lfilter(
                [alpha], [1.0, -(1.0 - alpha)], noise[channel], zi=[water_state[channel]]
            )
            water_state[channel] = final_state[0]
        texture_level = 0.020 * (0.65 + 0.35 * np.sin(2 * np.pi * absolute / 241.0 + 0.4))
        left += filtered[0] * texture_level
        right += filtered[1] * texture_level

        # Gentle program fade-in and longer fade-out.
        fade_in = np.clip(absolute / 12.0, 0.0, 1.0)
        fade_out = np.clip((DURATION - absolute) / 35.0, 0.0, 1.0)
        master = fade_in * fade_out * 0.88
        stereo = np.column_stack((soft_limit(left * master), soft_limit(right * master)))
        pcm = np.asarray(np.clip(stereo, -1.0, 1.0) * 32767.0, dtype="<i2")
        sys.stdout.buffer.write(pcm.tobytes())

        if chunk_index % 60 == 0:
            print(f"generated {int(start // 60):02d}:00 / 60:00", file=sys.stderr, flush=True)


if __name__ == "__main__":
    main()
