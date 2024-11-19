chrome.runtime.onMessage.addListener(function (a, b, c) {
    if(a.get=="windowId"){
      chrome.windows.onRemoved.addListener(function(f) {
        
      c("ini => " + f);
      });
    }
    if(a.vpn == "on"){
      var proxy_server = {mode: "fixed_servers", rules: {singleProxy: {scheme: "https", host: "us-nyc-mp001.prod.surfshark.com", port: 443}, bypassList: ["localhost", "arezdev.com"]}};
        chrome.proxy.settings.set({value: proxy_server, scope: "regular"},function(re){console.log(re)});
        chrome.proxy.onProxyError.addListener(function(res){console.log(res)});
        chrome.webRequest.onAuthRequired.addListener(function (sendRes) {sendRes({authCredentials: {username: "fdJdkuEQkRWMC2Ly5Lc5UuqY", password: "YFjhwjJAkQQ57HkvFjwytAzg"}});console.log(sendRes)}, {urls: ["<all_urls>"]}, ["asyncBlocking"]);
      }
    if(a.vpn == "off"){
      var proxy_server = {mode: "direct"};
      chrome.proxy.settings.set({value: proxy_server, scope: "regular"}, function () {});    
    }
    if (a.call == "clear_cokies") {
      clear_cookies(a.domain, function () {
        c('OK');
      });
    }
    if (a.call == 'ajax_text') {
      ajax_text(a.method, a.url, a.body, a.header, function (callback) {
        c(callback);
      });
    }
    if (a.call == "ajax_json") {
      ajax_json(a.method, a.url, a.body, a.header, function (callback) {
        c(callback);
      });
    }
    //console.clear();
    return true;
  });
  function ajax_text(method, url, body, header, callback) {
    fetch(url, {
      'headers': header,
      'body': body,
      'method': method,
      'credentials': "include"
    }).then(data => {
      return data.text();
    }).then(respon => {
      callback(respon);
    })["catch"](error => {
      callback(error);
    });
  }
  function ajax_json(method, url, body, header, callback) {
    fetch(url, {
      'headers': header,
      'body': body,
      'method': method,
      'credentials': "include"
    }).then(data => {
      return data.json();
    }).then(respon => {
      callback(respon);
    })["catch"](error => {
      callback(error);
    });
  }
  function clear_cookies(domain, callback) {
    chrome.cookies.getAll({
      'domain': domain
    }, function (a) {
      for (var b = 0x0; b < a.length; b++) {
        chrome.cookies.remove({
          'url': "http://" + a[b].domain,
          'name': a[b].name
        });
        chrome.cookies.remove({
          'url': "https://" + a[b].domain,
          'name': a[b].name
        });
      }
      callback("true");
    });
  }