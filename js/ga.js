/* GA4 — 측정 ID 를 아래에 넣으면 모든 페이지에서 수집된다. 비어 있으면 아무것도 하지 않는다. */
(function () {
  var GA_ID = "";
  if (!GA_ID || location.hostname === "localhost") return;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", GA_ID, { site_name: "vinyl-x" });
})();
