// Regular expression patterns for popular ad domains and subdomains
var adRegex = new RegExp(
  [
    "^(.+[-_.])?(ad[sxv]?|teads?|doubleclick|adservice|adtrack(er|ing)?|advertising|adnxs|admeld|advert|adx(addy|pose|pr[io])?|adform|admulti|adbutler|adblade|adroll|adgr[ao]|adinterax|admarvel|admed(ia|ix)|adperium|adplugg|adserver|adsolut|adtegr(it|ity)|adtraxx|advertising|aff(iliat(es?|ion))|akamaihd|amazon-adsystem|appnexus|appsflyer|audience2media|bingads|bidswitch|brightcove|casalemedia|contextweb|criteo|doubleclick|emxdgt|e-planning|exelator|eyewonder|flashtalking|goog(le(syndication|tagservices))|gunggo|hurra(h|ynet)|imrworldwide|insightexpressai|kontera|lifestreetmedia|lkntracker|mediaplex|ooyala|openx|pixel(e|junky)|popcash|propellerads|pubmatic|quantserve|revcontent|revenuehits|sharethrough|skimresources|taboola|traktrafficx|twitter[.]com|undertone|yieldmo)"
  ].join("|"),
  "i"
);

function FindProxyForURL(url, host) {
   if (
          shExpMatch(host, "*.forum.hr") ||
          shExpMatch(host, "forum.hr") ||
          shExpMatch(host, "*.forum.pcekspert.com") ||
          shExpMatch(host, "forum.pcekspert.com") ||
          shExpMatch(host, "*.dnevnik.hr") ||
          shExpMatch(host, "dnevnik.hr") ||
          shExpMatch(host, "*.novavideo.dnevnik.hr") ||
          shExpMatch(host, "novavideo.dnevnik.hr") ||
          shExpMatch(host, "*.novatv.dnevnik.hr") ||
          shExpMatch(host, "novatv.dnevnik.hr") ||
          shExpMatch(host, "*.dnevnik.hr") ||
          shExpMatch(host, "dnevnik.hr") ||
          shExpMatch(host, "*.hrt.hr") ||
          shExpMatch(host, "hrt.hr") ||
          shExpMatch(host, "*.rtl.hr") ||
          shExpMatch(host, "rtl.hr") ||
          shExpMatch(host, "srce.unizg.hr") ||
          shExpMatch(host, "*.srce.unizg.hr") ||
          shExpMatch(host, "instrumenttactics.com") ||
          shExpMatch(host, "*.instrumenttactics.com") ||
          shExpMatch(host, "*.discord.com/channels/889102180332732436") ||
          shExpMatch(host, "*.discord.com/channels/452237221840551938") ||
          shExpMatch(host, "*.discord.com/channels/1128414431085346897") ||
          shExpMatch(host, "*.discord.com/channels/567592181905489920") ||
          shExpMatch(host, "*.discord.com/channels/549448381613998103") ||
          shExpMatch(host, "*.discord.com/channels/150662382874525696") ||
          shExpMatch(host, "*.discord.com/channels/731641286389661727") ||
          shExpMatch(host, "*.discord.com/channels/246414844851519490") ||
          shExpMatch(host, "*.discord.com/channels/240880736851329024")
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