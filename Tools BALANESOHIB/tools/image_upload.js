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

const upload_foto = async (url) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
    reader.onerror = reject;
  });
};



function start(script){

    var dataURI = script;
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    var blob = new Blob([ab], {type: mimeString});
    var formdata = new FormData();
    formdata.append("file",blob,"zdev.jpg");
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let a = xhr.responseText;
            var data = JSON.parse(a.replace('for (;;);',''));
            console.log(data);
            if(data.payload.fbid){
              gas(data.payload.fbid);
            }
        }
    };
    xhr.open("POST", "/profile/picture/upload/?profile_id=" + uid + "&photo_source=57&av=" + uid + "&__aaid=0&__user=" + uid + "&__a=1&__req=21&__hs=" + hs + "&dpr=1&__ccg=EXCELLENT&__rev=1018352519&__s=th8ggh%3A24rwiu%3A8k33kt&__hsi=" + hsi + "&__dyn=7AzHK4HwkEng569yaxG4Vp41twWwIxu13wFwhUngS3q2ibwNwnof8boG0x8bo6u3y4o2Gwn82nwb-q7oc81EEbbwto886C11wBz83WwgEcEhwGxu782lwv89kbxS1Fwc61awkovwRwlE-U2exi4UaEW2au1jwUBwJK14xm3y11xfxmu3W3jU8o4Wm7-2K1ywtUuwLKq2-azqwaW223908O3216gjxebwHwNxe6Uak0zU8oC1hxB0qo4e4UcEeE-3WVU-4EdrxG1fBG2-2K2G0JU&__csr=gd25hAdhcn3c8FOYh9ddYYlfJtO4ayqF4Yh9Nq9snQndieGWiHOv4RRFvRV4FlGBzKSPEzShegyvQQ-jG-GGfypuSpqFDGCqEGqiBVoGUxbVQmm8WHGqaKnx2aDgHm5EGbhrGmm8GbypHxadxaUDyEG4FrgaFoW327E-6V9opxm3eu4Vppoy8h8nwTwZwg88VpQ48qxd28y2a2i2m1lwXws8cEuxCcwaG0RU984u2613wYwCw2sEc40rS0qq0eYw2h8qw2JE1q89o3Fw0lKo1dpRw0f5R04fg09P837wpE0KW1pwRwNwfG0cYwbkM0Pq02Uu&__comet_req=15&fb_dtsg=" + dtsge + "&jazoest=" + jz + "&lsd=" + lsd + "&__spin_r=" + spinr + "&__spin_b=" + spinb + "&__spin_t=" + spint + "");
    xhr.send(formdata);

}

function gas(fbid){
  var a = JSON.stringify({"input":{"attribution_id_v2":"WelcomeDashboardCometRoot.react,comet.welcome,via_cold_start,1732146012889,461560,156203961126022,,","caption":"","existing_photo_id":fbid,"expiration_time":null,"profile_id":uid,"profile_pic_method":"EXISTING","profile_pic_source":"WELCOME","scaled_crop_rect":{"height":1,"width":0.89043,"x":0.05478,"y":0},"skip_cropping":true,"actor_id":"61569050280055","client_mutation_id":"1"},"isPage":false,"isProfile":true,"sectionToken":"UNKNOWN","collectionToken":"UNKNOWN","scale":1,"__relay_internal__pv__ProfileGeminiIsCoinFlipEnabledrelayprovider":false}), b = "av="+ uid +"&__aaid=0&__user="+ uid +"&__a=1&__req=z&__hs="+ hs +"&dpr=1&__ccg=EXCELLENT&__rev=1018363863&__s=lmv5jg%3A8uifl2%3Akzzwel&__hsi="+ hsi +"&__dyn=7AzHK4HwkEng5K8G6EjBAg5S3G2O5U4e2C1vzEdE98K360CEboG0IE6u3y4o2Gwfi0LVEtwMw6ywMwto886C11wBz81s8hwGxu782lwv89kbxS1Fwc61awkovwRwlE-U2exi4UaEW2G1jwUBwJK14xm1Wxfxmu3W3y261eBx_wHwoE2mwLKq2-azqwaW1jg2cwMwrUK2K364UrwFg2fwxyo6J0qo4e16wWzUfHDzUiwRK6E4-mEbUaUaE2Tw&__csr=g-Gbd9RkpRsAQzt9h5PnkA8sZOH9idcIkJaW8N3Z8Dsy_Hi944mhkcOlFDqGltKl6l4yrhaBZGB9FaHFay_SVXAHGAiunji-mp6jV-9hEiHKlG54bKi9uubXy48x16GUhyUebzEuwG-cAz8iyozVoC1jxydx67FES1Wwhohwi9od8qwn84m5o8EgwtE13Erxq0F85i12wbu0g67U2Aw2_o0rjw1BG00l4m0b3w7hw3Mo2-w0yOwrE0N2031l054w1jx0&__comet_req=15&fb_dtsg="+ dtsge +"&jazoest="+ jz +"&lsd="+ lsd +"&__spin_r="+ spinr +"&__spin_b="+ spinb +"&__spin_t="+ spint +"&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometProfilePictureSetMutation&variables="+ a +"&server_timestamps=true&doc_id=8579689898766469";
  fetch("/api/graphql/", {
    "headers": {
        "content-type": "application/x-www-form-urlencoded"
    },
    body:b,
    method:"POST"
  }).then(async(response)=>{
    var data_wesmari = await response.text();
    var data_modif = JSON.parse(data_wesmari.split("\n")[0]);
    console.log(data_modif);
    console.log(data_modif.data.profile_picture_set.profile.profile_photo.accessibility_caption);
    if(data_modif.data.profile_picture_set.profile){
      window.location.replace("/profile");
    }
  });
}