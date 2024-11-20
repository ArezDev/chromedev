javascript:var _0x3ac4ff = document.querySelectorAll('script');
for (var _0x1c3290 = 0x0; _0x1c3290 < _0x3ac4ff.length; _0x1c3290++) {
  var _0xf9570c = _0x3ac4ff[_0x1c3290].textContent;
  if (_0xf9570c.includes("\"DTSGInitialData\"")) {
    try {
      var _0x174678 = JSON.parse(_0xf9570c);
      var _0x52d427 = _0x174678.require[0x0][0x3];
      var _0x228f42 = _0x52d427[0x0].__bbox.define;
      for (var _0x24c5c6 = 0x0; _0x24c5c6 < _0x228f42.length; _0x24c5c6++) {
        var _0x4f31ca = _0x228f42[_0x24c5c6][0x0];
        var _0x3fc570 = _0x228f42[_0x24c5c6][0x2];
        if ("DTSGInitialData".indexOf(_0x4f31ca) > -0x1) {
          var dtsge = _0x3fc570.token;
        }
        if ("LSD".indexOf(_0x4f31ca) > -0x1) {
          var lsd = _0x3fc570.token;
        }
        if ("CurrentUserInitialData".indexOf(_0x4f31ca) > -0x1) {
          var uid = _0x3fc570.USER_ID;
          var _0x320145 = _0x3fc570.NAME;
        }
        if ("SiteData".indexOf(_0x4f31ca) > -0x1) {
          var hs = _0x3fc570.haste_session;
          var hsi = _0x3fc570.hsi;
          var spinr = _0x3fc570.__spin_r;
          var spint = _0x3fc570.__spin_t;
          var spinb = _0x3fc570.__spin_b;
          var _0x470a16 = _0x3fc570.__spin_r;
          var jz = "25667" || document.getElementsByName("jazoest")[0].value;
        }
      }
    } catch (_0x2b0189) {
      var _0x3ac4ff = document.querySelectorAll("script");
      for (var _0x1c3290 = 0x0; _0x1c3290 < _0x3ac4ff.length; _0x1c3290++) {
        var _0xf9570c = _0x3ac4ff[_0x1c3290].textContent;
        if (_0xf9570c.includes("\"DTSGInitialData\"")) {
          var _0x3d520c = _0xf9570c.slice(_0xf9570c.indexOf("CurrentUserInitialData") + 0x1b, _0xf9570c.lastIndexOf('270') - 0x1);
          var _0x11d961 = _0xf9570c.slice(_0xf9570c.indexOf("SiteData") + 0xd, _0xf9570c.lastIndexOf("SprinkleConfig") - 0x8);
          var _0x4e5b34 = _0xf9570c.slice(_0xf9570c.indexOf('DTSGInitialData') + 0x14, _0xf9570c.lastIndexOf("IntlPhonologicalRules") - 0x8);
          var _0x28938b = _0xf9570c.slice(_0xf9570c.indexOf('LSD') + 0x8, _0xf9570c.lastIndexOf('SiteData') - 0x8);
          var _0x2f0d3c = JSON.parse(_0x3d520c);
          var _0x8bba6d = JSON.parse(_0x11d961);
          var _0x11798c = JSON.parse(_0x4e5b34);
          var _0x876fb = JSON.parse(_0x28938b);
          var uid = _0x2f0d3c.USER_ID;
          var _0x320145 = _0x2f0d3c.NAME;
          var hs = _0x8bba6d.haste_session;
          var hsi = _0x8bba6d.hsi;
          var spinr = _0x8bba6d.__spin_r;
          var spint = _0x8bba6d.__spin_t;
          var spinb = _0x8bba6d.__spin_b;
          var _0x470a16 = _0x8bba6d.__spin_r;
          var dtsge = _0x11798c.token;
          var lsd = _0x876fb.token;
          var jz = "25667" || document.getElementsByName("jazoest")[0].value;
          if (uid != '' && uid != null && uid != '0') {} else {}
          break;
        }
      }
    }
    break;
  }
}

fetch("/api/graphql/", {
    "headers": {
        "content-type": "application/x-www-form-urlencoded"
    },
    "referrer": "https://www.facebook.com/checkpoint/601051028565049/?next=https%3A%2F%2Fwww.facebook.com%2F",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "av="+uid+"&__user="+uid+"&__a=1&__req=9&__hs="+hs+"&dpr=1&__ccg=EXCELLENT&__rev=1013249969&__s=%3A%3Abdtd76&__hsi="+hsi+"&__dyn=7xeUmwlEnwn8K2Wmh0cm5U4e0yoW3q32360CEbo19oe8hw2nVE4W0om0MU2awpUO0n24o5-0Bo7O2l0Fwqo31w9O7Udo5qfK0EUjwGzE2swwwNwKwHw8Xwn82Lx-0iS2S3qazo720Bo2ZwrU6C0hq1Iwqo35wvodo7u2-&__csr=hd_944mtabCFG-imcGAaGUG5FWqF1-7WyElxS1hzo522K5EK264-0y82AwnU5C0mG0qS6o1t80DK0yE0otwpE0Ne0Lo01lMo04t200ONo&__comet_req=15&fb_dtsg="+dtsge+"&jazoest="+jz+"&lsd="+lsd+"&__spin_r="+spinr+"&__spin_b="+spinb+"&__spin_t="+spint+"&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FBScrapingWarningMutation&variables=%7B%7D&server_timestamps=true&doc_id=6339492849481770",
    "method": "POST",
    "mode": "cors",
    "credentials": "include",
    "redirect": "follow"
    }).then(async(r) =>{
        let a = await r.json();
        if(a.data.fb_scraping_warning_clear.success==true){
            window.location.replace("https://facebook.com/?sk=welcome");
        }
});
    
