var fbdtsne = require("DTSGInitialData").token;
    fetch("https://www.facebook.com/v1.0/dialog/oauth/confirm", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryX6MJ1UsBbRbz6tAz",
          "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin"
        },
        "referrer": "https://www.facebook.com",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\'fb_dtsg\'\r\n\r\n"+fbdtsne+"\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"app_id\"\r\n\r\n124024574287414\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"redirect_uri\"\r\n\r\nfbconnect://success\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"display\"\r\n\r\npopup\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"ref\"\r\n\r\nDefault\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"return_format\"\r\n\r\naccess_token\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"sso_device\"\r\n\r\nios\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"__CONFIRM__\"\r\n\r\n1\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz--\r\n",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      }).then(async(a)=>{
        var data = await a.text();
        var tokens = data.split(/access_token=/)[1].split(/&data_access_expiration_time=/)[0];
        console.log(tokens);
      });