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
var json_ = JSON.stringify({"scale":1});
fetch("/api/graphql/",
    {
    headers:{"content-type":"application/x-www-form-urlencoded"},
    method:"POST",
    body:"av="+uid+"&__aaid=0&__user="+uid+"&__a=1&__req=r&__hs="+hs+"&dpr=1&__ccg=EXCELLENT&__rev=1016038141&__s=09qvbm%3Ajy1eas%3Au5hsho&__hsi="+hsi+"&__dyn=7AzHK4HwkEng5K8G6EjBAg5S3G2O5U4e2C1vzEdE98K360CEboG0IE6u3y4o2Gwfi0LVEtwMw65xO321Rwwwqo462mcw5Mx62G5Usw9m1YwBgK7o6C0Mo4G1hx-3m1mzXw8W58jwGzEaE5e3ym2SU4i5o7G4-5pUfEe88o4Wm7-2K1yw9q2-VEbUGdwb61jg2cwMwrUK2K364UrwFg2fwxyo6J0qo4e16wWwjHDzUiwRK6E4-mEbUaU&__csr=gTNvFnRSgj8BF5ln97jEAns_srcyuLRnFRk_FnpBhai9t8_FQiFjkAGicGLplhaRYXtO7JObvQi8qTAdjHmKW_AF4KmExlyu4Ei8m9G8VoKGx6uUGcBBzk9h8Gi8GuFkch_hUnyoOmfyVUeo-2SewsohgK48ybK9DzUSil0uXxy4UK15whErxO5EeUhw8613G220w83uwSwe-3G0ke0i20Qo5a4U0Fu02e66E4WE01iipU0Jqaw6uw1r20xo0fG80b0U07b-0uS0v-&__comet_req=15&fb_dtsg="+dtsge+"&jazoest="+jz+"&lsd="+lsd+"&__spin_r="+spinr+"&__spin_b="+spinb+"&__spin_t="+spint+"&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometProfileSwitcherListQuery&variables="+json_+"&server_timestamps=true&doc_id=6434758246628736"
        }).then(async(r)=>{
            var p = await r.json();
            if(p.data.viewer.logout_hash){
                fetch("/logout.php?button_location=settings&button_name=logout",
                    {
                        headers:{"content-type":"application/x-www-form-urlencoded"},
                        method:"POST",
                        redirect: "follow",
                        body:"h="+p.data.viewer.logout_hash+"&ref=mb"
                    }
                ).then(async(r)=>{
                    if (r.redirected) {
                        window.location.href = r.url;
                    }
                });
            }
    });