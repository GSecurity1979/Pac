// Regular expression patterns for popular ad domains and subdomains
var adRegex = new RegExp(
  [
    "^(.+[-_.])?(ad[sxv]?|teads?|doubleclick|adservice|adtrack(er|ing)?|advertising|adnxs|admeld|advert|adx(addy|pose|pr[io])?|adform|admulti|adbutler|adblade|adroll|adgr[ao]|adinterax|admarvel|admed(ia|ix)|adperium|adplugg|adserver|adsolut|adtegr(it|ity)|adtraxx|advertising|aff(iliat(es?|ion))|akamaihd|amazon-adsystem|appnexus|appsflyer|audience2media|bingads|bidswitch|brightcove|casalemedia|contextweb|criteo|doubleclick|emxdgt|e-planning|exelator|eyewonder|flashtalking|goog(le(syndication|tagservices))|gunggo|hurra(h|ynet)|imrworldwide|insightexpressai|kontera|lifestreetmedia|lkntracker|mediaplex|ooyala|openx|pixel(e|junky)|popcash|propellerads|pubmatic|quantserve|revcontent|revenuehits|sharethrough|skimresources|taboola|traktrafficx|twitter[.]com|undertone|yieldmo)"
  ].join("|"),
  "i"
);

function FindProxyForURL(url, host) {
   if (
          shExpMatch(host, "instrumenttactics.com") ||
          shExpMatch(host, "*.instrumenttactics.com")
     ) {
           return "PROXY 127.0.0.1";
        }
      if (adRegex.test(host)) {
          return "PROXY 127.0.0.1";
        }
   else {
           return "DIRECT";
        }
   }
