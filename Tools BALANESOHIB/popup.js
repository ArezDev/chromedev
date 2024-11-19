$(document).ready(function () {

var dc = document;

var load = function() {

    var html = '<div class="container" style="width: 600px; padding-top: 20px;">';
			html += '	<div class="panel panel-default">';
			html += '		<div class="panel-heading">';
			html += '<center><b style="color: green;">Balane Sohib Team</b></center>';
			html += '		    <b style="float: right; color: green;"></b>';
			html += '		</div>';
			html += '		<div class="panel-body" id="wadae_btn">';
			html += '		<center>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="btn_fb" name="btn_1" style="width: 131px;"><b>Facebook</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" name="btn_auto_loginfb" style="width: 131px;"><b>Auto Login</b></button>';
		    //html += '			<button type="button" class="btn btn-default btn-sm" id="btn_threads" name="btn_1" style="width: 131px;"><b>Threads</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="btn_addfb" name="btn_addfb" style="width: 131px;"><b>Add</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="btn_biofb" name="btn_biofb"  style="width: 131px;"><b>BIO</b></button>';
			html += '			<p></p>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="btn_reg_free" name="btn_reg_free" style="width: 131px;"><b>Reg Free</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="btn_reg_web" name="btn_reg_web" style="width: 131px;"><b>Reg Web</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="btn_hitung_tab" name="btn_hitung_tab" style="width: 131px;"><b>Tab?</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="btn_reloadalltab" style="width: 131px;"><b>Reload All TAB</b></button>';
			html += '		<div class="panel-heading">';
			html += '			<b style="color: green;">Bookmarks</b>';
			html += '		</div>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="btn_skwelcom" name="btn_skwelcom" style="width: 131px;"><b>SK</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="btn_errorfb" name="btn_errorfb" style="width: 131px;"><b>Error</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="btn_profilfb" style="width: 131px;"><b>Profile</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="btn_changeemail" style="width: 131px;"><b>Change Email</b></button>';
			html += '		</center>';
			html += '		<hr>';
			html += '		<div class="input-group">';
			html += '			<span class="input-group-addon" style="width: 120px;"><b>Set All Tab URL</b></span>';
			html += '			<input type="text" class="form-control input-sm" id="url_to_all" placeholder="URL" autocomplete="off">';
			html += '			<span class="input-group-btn">';
			html += '				<button type="button" class="btn btn-info btn-sm" id="set_all_tab" style="width: 100px;"><b>Submit</b></button>';
			html += '			</span>';
			html += '		</div>';
			html += '	</div>';
			html += '	<div class="panel panel-default">';
			html += '	<center><b style="float:right;color: blue;">Powered By - https://balanesohib.team</b></center>';
			html += '</div>';
			html += '</div>';

		dc.getElementById('ng-t').innerHTML = html;
}

$(dc).on('click', '[id="reg"]', function() {
    var userid = $('#user').val().toLowerCase();
    if(userid == '') {alert('Form Required')} else {
        dc.getElementById('reg').setAttribute('disabled', '');
        localStorage['katalis-key'] = userid;
        var idkey = chrome.i18n.getMessage('@@extension_id') + '||' + localStorage['katalis-key'];
		ajax('action=reg&userid='+userid+'&namatools=Super_Multi_Tools_V3&chromeid='+idkey, function() {
			load();
		});
    }
});

$(dc).on('click', '[id="set_all_tab"]', function() {
    var url_to_all = $('#url_to_all').val();

    if(url_to_all == '') {alert('Form Required')} else {
        dc.getElementById('set_all_tab').setAttribute('disabled', '');
    	chrome.tabs.getAllInWindow(null, function(tabs) {
    		for(var i = 0; i < tabs.length; i++) {
    			chrome.tabs.update(tabs[i].id, {url: url_to_all});
    		}
    	});

    	setTimeout(function() {
    	    dc.getElementById('set_all_tab').removeAttribute("disabled");
    	    $('#url_to_all').val('');
        }, 1000);
    }
});

$(dc).on('click', '[name="btn_1"]', function() {

    if(this.getAttribute('id') == 'btn_fb') {
		var html = '<div class="container" style="width: 600px; padding-top: 20px;">';
		    html += '	<div class="panel panel-default">';
			html += '		<div class="panel-heading">';
			html += '		    <b style="float: right; color: green;">FB Multi Tools V2</b>';
			html += '		</div>';
			html += '		<div class="panel-body" id="html-body">';
			html += '		<center>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="octa_lead.js" name="btn_fb" style="width: 131px;"><b>Tools octalead</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="js_arezdev.js" name="btn_fb" style="width: 131px;"><b>Tools Zdev</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" name="btn_fb_login_uid" style="width: 131px;"><b>Login UID</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" name="btn_fb_getUID" style="width: 131px;"><b>Get UID</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" name="btn_fb_getName" style="width: 131px;"><b>Get Name Reg</b></button>';
			html += '			<p></p>';
			html += '			<button type="button" class="btn btn-primary btn-sm" name="btn_back"><span class="glyphicon glyphicon-arrow-left"></span></button>';
			html += '		</center>';
			html += '		</div>';
			html += '	</div>';
			html += '</div>';

		dc.getElementById('ng-t').innerHTML = html;
    }

    if(this.getAttribute('id') == 'btn_ig') {
		var html = '<div class="container" style="width: 600px; padding-top: 20px;">';
		    html += '	<div class="panel panel-default">';
			html += '		<div class="panel-heading">';
			html += '		    <b style="float: right; color: green;">IG Multi Tools V2</b>';
			html += '		</div>';
			html += '		<div class="panel-body">';
			html += '		<center>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="profile.js" name="btn_ig" style="width: 131px;"><b>Goto Profile</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="toolsv3.js" name="btn_ig" style="width: 131px;"><b>Multi Tools</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="toolsfillform-cewek.js" name="btn_ig" style="width: 131px;"><b>Fill Form Reg {PR}</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="toolsfillform-cowok.js" name="btn_ig" style="width: 131px;"><b>Fill Form Reg {LK}</b></button>';
			html += '			<p></p>';
			html += '			<button type="button" class="btn btn-primary btn-sm" name="btn_back"><span class="glyphicon glyphicon-arrow-left"></span></button>';
			html += '		</center>';
			html += '		</div>';
			html += '	</div>';
			html += '</div>';

		dc.getElementById('ng-t').innerHTML = html;
    }

    if(this.getAttribute('id') == 'btn_threads') {
		var html = '<div class="container" style="width: 600px; padding-top: 20px;">';
		    html += '	<div class="panel panel-default">';
			html += '		<div class="panel-heading">';
			html += '		    <b style="float: right; color: green;">Threads Multi Tools V1</b>';
			html += '		</div>';
			html += '		<div class="panel-body">';
			html += '		<center>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="toolsv1" name="btn_threads" disabled style="width: 131px;"><b>Multi Tools V1</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="toolsv2" name="btn_threads" style="width: 131px;"><b>Multi Tools V2</b></button>';
			html += '			<button type="button" class="btn btn-primary btn-sm" name="btn_back"><span class="glyphicon glyphicon-arrow-left"></span></button>';
			html += '		</center>';
			html += '		</div>';
			html += '	</div>';
			html += '</div>';

		dc.getElementById('ng-t').innerHTML = html;
    }

    if(this.getAttribute('id') == 'btn_email') {
		var html = '<div class="container" style="width: 600px; padding-top: 20px;">';
		    html += '	<div class="panel panel-default">';
			html += '		<div class="panel-heading">';
			html += '			<b style="float: right; color: green;">Modify Email Tools V2</b>';
			html += '		</div>';
			html += '		<div class="panel-body">';
			html += '		<span type="button" class="btn btn-info btn-sm" style="width: 100%;"><b>Buka Web Email Dulu Kemudian Klik Tombol Email</b></span>';
			html += '		<center style="margin-top: 10px;">';
			html += '			<button type="button" class="btn btn-default btn-sm" id="cryptogmail.js" name="btn_email" style="width: 131px;"><b>cryptogmail.com</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="10minutemail.js" name="btn_email" style="width: 131px;"><b>10minutemail.net</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="tempmailo.js" name="btn_email" style="width: 131px;"><b>tempmailo.com</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="ese.js" name="btn_email" style="width: 131px;"><b>ese.kr</b></button>';
			html += '			<p></p>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="temp-mail.io.js" name="btn_email" style="width: 131px;"><b>temp-mail.io { IG }</b></button>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="katalisEmail" style="width: 131px;"><b>Katalis Email { IG }</b></button>';
			html += '			<button type="button" class="btn btn-primary btn-sm" name="btn_back"><span class="glyphicon glyphicon-arrow-left"></span></button>';
			html += '		</center>';
			html += '		</div>';
			html += '	</div>';
			html += '</div>';

		dc.getElementById('ng-t').innerHTML = html;
    }

    if(this.getAttribute('id') == 'bitly_key') {
		var html = '<div class="container" style="width: 600px; padding-top: 20px;">';
		    html += '	<div class="panel panel-default">';
			html += '		<div class="panel-heading">';
			html += '			<b style="float: right; color: green;">Create Bitly Key V2</b>';
			html += '		</div>';
			html += '		<div class="panel-body">';
			html += '		<span type="button" class="btn btn-info btn-sm" id="bukabitly" style="width: 100%;"><b>Buka Web Bitly Dulu Kemudian Klik Tombol Buka Tools</b></span>';
			html += '		<center style="margin-top: 10px;">';
			html += '			<button type="button" class="btn btn-default btn-sm" id="bitly.js" name="btn_bitly" style="width: 131px;"><b>Buka Tools Bitly</b></button>';
			html += '			<button type="button" class="btn btn-primary btn-sm" name="btn_back"><span class="glyphicon glyphicon-arrow-left"></span></button>';
			html += '		</center>';
			html += '		</div>';
			html += '	</div>';
			html += '</div>';

		dc.getElementById('ng-t').innerHTML = html;
    }

    if(this.getAttribute('id') == 'branch_key') {
		var html = '<div class="container" style="width: 600px; padding-top: 20px;">';
		    html += '	<div class="panel panel-default">';
			html += '		<div class="panel-heading">';
			html += '			<b style="float: right; color: green;">Create Bitly Key V2</b>';
			html += '		</div>';
			html += '		<div class="panel-body">';
			html += '		<span type="button" class="btn btn-info btn-sm" id="bukabranch" style="width: 100%;"><b>Buka Web Branch.io Dulu Kemudian Klik Tombol Buka Tools</b></span>';
			html += '		<center style="margin-top: 10px;">';
			html += '			<button type="button" class="btn btn-default btn-sm" id="branch.js" name="btn_branch" style="width: 131px;"><b>Buka Tools Branch</b></button>';
			html += '			<button type="button" class="btn btn-primary btn-sm" name="btn_back"><span class="glyphicon glyphicon-arrow-left"></span></button>';
			html += '		</center>';
			html += '		</div>';
			html += '	</div>';
			html += '</div>';

		dc.getElementById('ng-t').innerHTML = html;
    }
});

//====================================================================================

$(dc).on('click', '[id="btn_profilfb"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");
    	chrome.tabs.getAllInWindow(null, function(tabs) {
    		for(var i = 0; i < tabs.length; i++) {
    			chrome.tabs.update(tabs[i].id, {url: "https://facebook.com/profile"});
    		}
    	});
		dc.getElementById(t_id).removeAttribute("disabled", "");
});

$(dc).on('click', '[name="btn_addfb"]', function() {
	var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");
	fetch("chrome-extension://nikafkibfnlidpeppdmbopjnbelahobh/tools/add.js")
	.then(async(r)=>{
		var data = await r.text();
    	chrome.tabs.getAllInWindow(null, function(tabs) {
			for(var i = 0; i < tabs.length; i++) {
				chrome.tabs.executeScript(tabs[i].id, {code: data });
			}
    	});
    	dc.getElementById(t_id).removeAttribute("disabled");
	});
});

$(dc).on('click', '[name="btn_biofb"]', function() {
	var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");
	fetch("chrome-extension://nikafkibfnlidpeppdmbopjnbelahobh/tools/bio.js")
	.then(async(r)=>{
		var data = await r.text();
    	chrome.tabs.getAllInWindow(null, function(tabs) {
			for(var i = 0; i < tabs.length; i++) {
				chrome.tabs.executeScript(tabs[i].id, {code: data });
			}
    	});
    	dc.getElementById(t_id).removeAttribute("disabled");
	});
	var html = '<div class="container" style="width: 600px; padding-top: 20px;">';
		    html += '	<div class="panel panel-default">';
			html += '		<div class="panel-heading">';
			html += '		    <b style="float: right; color: green;">Auto isi bio Facebook</b>';
			html += '		</div>';
			html += '		<div class="panel-body">';
			html += ' <textarea placeholder="{kata + link gae bio}" class="form-control input-sm" id="input_link_bio" style="height: 250px; resize: none;"></textarea>';
			html += ' <br/>';
			html += '		<center>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="btn_gas_bio" name="btn_gas_bio" style="width: 131px;"><b>Start bio!</b></button>';
			html += '		</center>';
			html += '		</div>';
			html += '	</div>';
			html += '</div>';
		dc.getElementById('ng-t').innerHTML = html;

		$(dc).on('click', '[name="btn_gas_bio"]', function() {
			var t_id = this.getAttribute('id');
			dc.getElementById(t_id).setAttribute("disabled", "");

			chrome.tabs.getAllInWindow(null, function(tabs) {
				for(var i = 0; i < tabs.length; i++) {
					chrome.tabs.executeScript(tabs[i].id, {
						code: "chrome.runtime.sendMessage({'call': 'get_link'},(link)=>{ console.log(link); document.getElementById('isi_bio').value=link["+i+"]; setTimeout(()=>{arezdev.bio();}, 2000); });"
					});
				}
			});
			dc.getElementById(t_id).removeAttribute("disabled", "");
		});

		chrome.runtime.onMessage.addListener(function(action, sender, sendResponse) {
			if(action.call === "get_link") {
				var akun_fb = [];
				var fbku = document.getElementById("input_link_bio").value.split("\n");
				for (let fb = 0; fb < fbku.length; fb++) {
					akun_fb.push(fbku[fb]);
				}
				sendResponse(akun_fb);
			}
			return true;
		});
});


$(dc).on('click', '[name="btn_auto_loginfb"]', function() {

	var html = '<div class="container" style="width: 600px; padding-top: 20px;">';
		    html += '	<div class="panel panel-default">';
			html += '		<div class="panel-heading">';
			html += '		    <b style="float: right; color: green;">Auto Login Facebook</b>';
			html += '		</div>';
			html += '		<div class="panel-body">';
			html += ' <textarea placeholder="{list akun uid}" class="form-control input-sm" id="input_uid" style="height: 250px; resize: none;"></textarea>';
			html += ' <br/>';
			html += '		<center>';
			html += '			<button type="button" class="btn btn-default btn-sm" id="btn_fb_login_uid" name="btn_fb_login_uid" style="width: 131px;"><b>Login Facebook</b></button>';
			html += '		</center>';
			html += '		</div>';
			html += '	</div>';
			html += '</div>';
		dc.getElementById('ng-t').innerHTML = html;

		$(dc).on('click', '[name="btn_fb_login_uid"]', function() {
			var t_id = this.getAttribute('id');
			dc.getElementById(t_id).setAttribute("disabled", "");

			chrome.tabs.getAllInWindow(null, function(tabs) {
				for(var i = 0; i < tabs.length; i++) {
					chrome.tabs.executeScript(tabs[i].id, {
						code: "chrome.runtime.sendMessage({'call': 'get_uid'},(fb)=>{ console.log(fb); document.getElementById('email').value=fb["+i+"]; setTimeout(()=>{document.getElementsByName('login')[0].click();}, 1000); });"
					});
				}
			});
			dc.getElementById(t_id).removeAttribute("disabled", "");
		});

		chrome.runtime.onMessage.addListener(function(action, sender, sendResponse) {
			if(action.call === "get_uid") {
				var akun_fb = [];
				var fbku = document.getElementById("input_uid").value.split("\n");
				for (let fb = 0; fb < fbku.length; fb++) {
					akun_fb.push(fbku[fb]);
				}
				sendResponse(akun_fb);
			}
			return true;
		});

});


//code: "var l = input_uid.split('\n')["+i+"]document.getElementById('email').value=l;document.getElementById('pass').value='TEORINGELID';setTimeout(()=>{document.getElementsByName('login')[0].click();}, 1000);"

$(dc).on('click', '[id="login_kan"]', function() {

	
    chrome.tabs.getAllInWindow(null, function(tabs) {
            
		for(var i = 0; i < tabs.length; i++) {
			var t = "void(function() {";
				t += "var dc = document;";
				t += "var uid = dc.cookie;";
				t += "var dv = dc.createElement('div');";
				t += "dv.id = 'tmp_my_uid';";
				t += "dv.style = 'display: none;';";
				t += "dv.innerHTML += '<input type=\"text\" id=\"my_uid\" value=\"'+uid+'\">';";
				t += "dc.body.appendChild(dv);";
				t += "})();";
	
			chrome.tabs.executeScript(tabs[i].id, {
				code: t
			});
	
			get_uid(tabs[i].id);
		}
	
	});
	
	function get_uid(id){
		setTimeout(function(){
			chrome.tabs.executeScript(id, {
				code: "var my_uid = document.getElementById('my_uid').value; chrome.runtime.sendMessage({'call': 'rc_uid', 'uid': my_uid}); var element = document.getElementById('tmp_my_uid'); element.remove();"
			});
		}, 500);
	}
	
	chrome.runtime.onMessage.addListener(function(action, sender, sendResponse) {
		if(action.call === "rc_uid") {
			var t = dc.getElementById('txt_out').value;
			if(t === "") {
				dc.getElementById('txt_out').value += action.uid;
			} else {
				dc.getElementById('txt_out').value += '\n' + action.uid;
			}
			var tl = dc.getElementById('txt_out').value.split('\n');
			dc.getElementById('count_uid').innerHTML = '<center><b>Found : '+tl.length+'</b></center>';
		}
		return true;
	});
});

$(dc).on('click', '[id="btn_regset"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");

    	chrome.tabs.getAllInWindow(null, function(tabs) {
    		for(var i = 0; i < tabs.length; i++) {
				setTimeout(() => {
					chrome.tabs.executeScript(tabs[i].id, {code: 'document.getElementsByName("websubmit")[0].click();' });
				}, 4000 * (i+1));
    		}
    	});
		dc.getElementById(t_id).removeAttribute("disabled", "");
});

$(dc).on('click', '[id="btn_changeemail"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");
    	chrome.tabs.getAllInWindow(null, function(tabs) {
    		for(var i = 0; i < tabs.length; i++) {
				chrome.tabs.update(tabs[i].id, {url: "https://mobile.facebook.com/changeemail/"});
    		}
    	});
		dc.getElementById(t_id).removeAttribute("disabled", "");
});

$(dc).on('click', '[id="btn_acceptcookies"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");
    	chrome.tabs.getAllInWindow(null, function(tabs) {
    		for(var i = 0; i < tabs.length; i++) {
    			chrome.tabs.executeScript(tabs[i].id, {code: 'document.getElementsByClassName("x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft")[5].click()'});
    		}
    	});
		dc.getElementById(t_id).removeAttribute("disabled", "");
});

$(dc).on('click', '[id="btn_reloadalltab"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");
    	chrome.tabs.getAllInWindow(null, function(tabs) {
    		for(var i = 0; i < tabs.length; i++) {
    			chrome.tabs.reload(tabs[i].id);
    		}
    	});
		dc.getElementById(t_id).removeAttribute("disabled", "");
});

$(dc).on('click', '[name="btn_skwelcom"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");
    	chrome.tabs.getAllInWindow(null, function(tabs) {
    		for(var i = 0; i < tabs.length; i++) {
    			chrome.tabs.update(tabs[i].id, {url: "https://facebook.com/?sk=welcome"});
    		}
    	});
		dc.getElementById(t_id).removeAttribute("disabled", "");
});

$(dc).on('click', '[name="btn_errorfb"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");
	chrome.tabs.getAllInWindow(null, function(tabs) {
			for(var i = 0; i < tabs.length; i++) {
				chrome.tabs.update(tabs[i].id, {url: 'https://www.facebook.com/v9.0/dialog/share_open_graph?redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F__Bz3h5RzMx.js%3Fversion%3D42%23cb%3Df30f869cdd9ab1%26domain%3Dabc13.com%26origin%3Dhttps%253A%252F%252Fabc13.com%252Ff1f0f3a0ad170b%26relation%3Dopener%26frame%3Df105b8fdf13aa6c%26result%3D%2522xxRESULTTOKENxx%2522&display=popup&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F__Bz3h5RzMx.js%3Fversion%3D42%23cb%3Dfb424ceae312b4%26domain%3Dabc13.com%26origin%3Dhttps%253A%252F%252Fabc13.com%252Ff1f0f3a0ad170b%26relation%3Dopener&action_type=og.likes&action_properties=%7B%22object%22%3A%7B%22og%3Aurl%22%3A%22%22%2C%22og%3Atitle%22%3A%22%22%2C%22og%3Adescription%22%3A%22%22%2C%22og%3Aimage%22%3A%22%22%7D%7D&client_id=1452463148319056&ret=login&sdk=joey&fallback_redirect_uri=https%3A%2F%2Fabc13.com%2FSharing%2F2%2520-%2520FB.ui%2520Dialogs&_rdc=1&_rdr#_=_'});
			}
	});
	dc.getElementById(t_id).removeAttribute("disabled", "");
});

$(dc).on('click', '[name="btn_hitung_tab"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");
	chrome.tabs.getAllInWindow(null, function(tabs) {
		document.getElementById("btn_hitung_tab").innerHTML = "<b>Tab : <b> " + "<b>( " + tabs.length + " )<b>";
	});
	dc.getElementById(t_id).removeAttribute("disabled");

});

$(dc).on('click', '[name="btn_reg_web"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");

	fetch("https://raw.githubusercontent.com/ArezDev/js/main/reg_web.js")
	.then(async(r)=>{
		var data = await r.text();
    	chrome.tabs.getAllInWindow(null, function(tabs) {
    		for(var i = 0; i < tabs.length; i++) {
				chrome.tabs.executeScript(tabs[i].id, {code: data});
    		}
    	});
    	dc.getElementById(t_id).removeAttribute("disabled");
	});

});

$(dc).on('click', '[name="btn_reg_free"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");

	fetch("https://raw.githubusercontent.com/ArezDev/js/main/reg_fb_free.js")
	.then(async(r)=>{
		var data = await r.text();
    	chrome.tabs.getAllInWindow(null, function(tabs) {
    		for(var i = 0; i < tabs.length; i++) {
    			chrome.tabs.executeScript(tabs[i].id, {code: data});
    		}
    	});
    	dc.getElementById(t_id).removeAttribute("disabled");
	});

});

$(dc).on('click', '[id="btn_tab_revol"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");
		var tab_id_ku = [];
    	chrome.tabs.getAllInWindow(null, function(tabs) {
    		for(var i = 0; i < tabs.length; i++) {
				tab_id_ku.push(tabs[i]);
    		}
    	});
		console.log(tab_id_ku);
		for (let t = 0; t < tab_id_ku.length; t++) {
			chrome.tabs.move(tab_id_ku[t].id, { index : -1, windowId: tab_id_ku[t].windowId });
		}
		
		console.log(tab_id_ku);

    	dc.getElementById(t_id).removeAttribute("disabled");

});

$(dc).on('click', '[id="btn_vpn_off"]', function() {
    var t_id = this.getAttribute('id');
    //dc.getElementById(t_id).setAttribute("disabled", "");
	dc.getElementById(t_id).id="btn_vpn";

	chrome.runtime.sendMessage({vpn:"off"});


	// fetch("https://raw.githubusercontent.com/ArezDev/js/main/tools_q.js")
	// .then(async(r)=>{
	// 	var data = await r.text();
    // 	chrome.tabs.getAllInWindow(null, function(tabs) {
    // 		for(var i = 0; i < tabs.length; i++) {
    // 			chrome.tabs.executeScript(tabs[i].id, {code: data});
    // 		}
    // 	});
    // 	dc.getElementById(t_id).removeAttribute("disabled");
	// });

});

$(dc).on('click', '[name="btn_clonefb"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");

	fetch("https://raw.githubusercontent.com/ArezDev/js/main/clone_facebook.js")
	.then(async(r)=>{
		var data = await r.text();
		var datax = "javascript:" + data ;
    	chrome.tabs.getAllInWindow(null, function(tabs) {
    		for(var i = 0; i < tabs.length; i++) {
				var b=document.createElement("script");
				b.textContent=data;
				document.head.appendChild(b);
    			chrome.tabs.executeScript(tabs[i].id, {code: data});
    		}
    	});
    	dc.getElementById(t_id).removeAttribute("disabled");
	});

});

$(dc).on('click', '[name="btn_fb_getName"]', function() {
    dc.getElementById('html-body').innerHTML = '<div class="panel-body" id="count_uid" style="height: 50px; background-color: rgba(0,0,255,0.06);"><center><b>Found : 0</b></center></div><br><textarea class="form-control input-sm" id="txt_out" style="height: 250px; resize: none;"></textarea>';

    chrome.tabs.getAllInWindow(null, function(tabs) {
            
		for(var i = 0; i < tabs.length; i++) {
            var t = "void(function() {";
                t += "var dc = document;";
                t += "var uid = dc.getElementsByName('firstname')[0].value;";
                t += "var dv = dc.createElement('div');";
                t += "dv.id = 'tmp_my_uid';";
                t += "dv.style = 'display: none;';";
                t += "dv.innerHTML += '<input type=\"text\" id=\"my_uid\" value=\"'+uid+'\">';";
                t += "dc.body.appendChild(dv);";
                t += "})();";

        	chrome.tabs.executeScript(tabs[i].id, {
        	    code: 'document.head.innerHTML += "<a id=\'tmp_js\' href=\'javascript: '+escape(t)+'\' style=\'display: none;\'></a>"; document.getElementById("tmp_js").click(); setTimeout(function() { var element = document.getElementById("tmp_js"); element.remove(); }, 100);'
        	});

            get_uid(tabs[i].id);
        }

    });

    function get_uid(id){
        setTimeout(function(){
            chrome.tabs.executeScript(id, {
                code: "var my_uid = document.getElementById('my_uid').value; chrome.runtime.sendMessage({'call': 'rc_uid', 'uid': my_uid}); var element = document.getElementById('tmp_my_uid'); element.remove();"
            });
        }, 500);
    }

    chrome.runtime.onMessage.addListener(function(action, sender, sendResponse) {
        if(action.call === "rc_uid") {
            var t = dc.getElementById('txt_out').value;
            if(t === "") {
                dc.getElementById('txt_out').value += action.uid;
            } else {
                dc.getElementById('txt_out').value += '\n' + action.uid;
            }

            var tl = dc.getElementById('txt_out').value.split('\n');
            dc.getElementById('count_uid').innerHTML = '<center><b>Found : '+tl.length+'</b></center>';
        }
        return true;
    });
});

$(dc).on('click', '[name="btn_fb"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");
    fetch("https://raw.githubusercontent.com/ArezDev/js/main/"+t_id)
	.then(async(r)=>{
		var data = await r.text();
    	chrome.tabs.getAllInWindow(null, function(tabs) {
    		for(var i = 0; i < tabs.length; i++) {
    			chrome.tabs.executeScript(tabs[i].id, {code: data});
    		}
    	});
    	dc.getElementById(t_id).removeAttribute("disabled");
	});
});

$(dc).on('click', '[name="btn_fb_close"]', function() {
    chrome.tabs.getAllInWindow(null, function(tabs) {
    	for(var i = 0; i < tabs.length; i++) {
    		chrome.tabs.executeScript(tabs[i].id, {
    		    code: "if(document.getElementById('ngonoo')){var element = document.getElementById('ngonoo'); element.remove();}"
    		});
    	}
    });
});

$(dc).on('click', '[name="btn_fb_getUID"]', function() {
    dc.getElementById('html-body').innerHTML = '<div class="panel-body" id="count_uid" style="height: 50px; background-color: rgba(0,0,255,0.06);"><center><b>Found : 0</b></center></div><br><textarea class="form-control input-sm" id="txt_out" style="height: 250px; resize: none;"></textarea>';

    chrome.tabs.getAllInWindow(null, function(tabs) {
        for(var i = 0; i < tabs.length; i++) {
            var t = "void(function() {";
                t += "var dc = document;";
                t += "var uid = dc.cookie.match(/c_user=([^;]+)/)[1];";
                t += "var dv = dc.createElement('div');";
                t += "dv.id = 'tmp_my_uid';";
                t += "dv.style = 'display: none;';";
                t += "dv.innerHTML += '<input type=\"text\" id=\"my_uid\" value=\"'+uid+'\">';";
                t += "dc.body.appendChild(dv);";
                t += "})();";

        	chrome.tabs.executeScript(tabs[i].id, {
        	    code: 'document.head.innerHTML += "<a id=\'tmp_js\' href=\'javascript: '+escape(t)+'\' style=\'display: none;\'></a>"; document.getElementById("tmp_js").click(); setTimeout(function() { var element = document.getElementById("tmp_js"); element.remove(); }, 100);'
        	});

            get_uid(tabs[i].id);
        }
    });

    function get_uid(id){
        setTimeout(function(){
            chrome.tabs.executeScript(id, {
                code: "var my_uid = document.getElementById('my_uid').value; chrome.runtime.sendMessage({'call': 'rc_uid', 'uid': my_uid}); var element = document.getElementById('tmp_my_uid'); element.remove();"
            });
        }, 500);
    }

    chrome.runtime.onMessage.addListener(function(action, sender, sendResponse) {
        if(action.call === "rc_uid") {
            var t = dc.getElementById('txt_out').value;
            if(t === "") {
                dc.getElementById('txt_out').value += action.uid;
            } else {
                dc.getElementById('txt_out').value += '\n' + action.uid;
            }

            var tl = dc.getElementById('txt_out').value.split('\n');
            dc.getElementById('count_uid').innerHTML = '<center><b>Found : '+tl.length+'</b></center>';
        }
        return true;
    });
});

$(dc).on('click', '[name="btn_ig"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");
    ajax('action=ig&js=' + t_id, function(q) {
    	chrome.tabs.getAllInWindow(null, function(tabs) {
    		for(var i = 0; i < tabs.length; i++) {
    			chrome.tabs.sendMessage(tabs[i].id, {
    				"data_js": q
    			});
    		}
    	});
    	dc.getElementById(t_id).removeAttribute("disabled");
    });
});


$(dc).on('click', '[name="btn_threads"]', function() {
    if (localStorage['katalis-key'] === 'melaynu' || localStorage['katalis-key'] === 'metunan' || localStorage['katalis-key'] === 'goodslayer' || localStorage['katalis-key'] === 'goodfella' || localStorage['katalis-key'] === 'butoo' || localStorage['katalis-key'] === 'uloo') {
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        var btn_id = this.getAttribute('id');

        ajax('action=threads&js=toolsv2.js', function(q1) {
            ajax('action=threads&js=toolsv2-t.js', function(q2) {
                chrome.tabs.getAllInWindow(null, function(tabs) {
                    if (tabs.length > 12) {
                		for(var i = 0; i < tabs.length; i++) {
                			chrome.tabs.sendMessage(tabs[i].id, {
                				"data_js": q2
                			});
                		}
                    } else {
                		for(var i = 0; i < tabs.length; i++) {
                			chrome.tabs.sendMessage(tabs[i].id, {
                				"data_js": q1
                			});
                		}
                    }
                });
                dc.getElementById(btn_id).removeAttribute("disabled");
            });
        });
    } else {
        var btn_id = this.getAttribute('id');

        dc.getElementById(btn_id).setAttribute("disabled", "");
        ajax('action=threads&js=toolsv2.js', function(q) {
        	chrome.tabs.getAllInWindow(null, function(tabs) {
        		for(var i = 0; i < tabs.length; i++) {
        			chrome.tabs.sendMessage(tabs[i].id, {
        				"data_js": q
        			});
        		}
        	});
        	dc.getElementById(btn_id).removeAttribute("disabled");
        });
    }
});

//====================================================================================

$(dc).on('click', '[name="btn_email"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");
    ajax('action=email&js=' + t_id, function(q) {
    	chrome.tabs.getAllInWindow(null, function(tabs) {
    		for(var i = 0; i < tabs.length; i++) {
    			chrome.tabs.sendMessage(tabs[i].id, {
    				"data_js": q
    			});
    		}
    	});
    	dc.getElementById(t_id).removeAttribute("disabled");
    });
});

$(dc).on('click', '[id="katalisEmail"]', function() {
    dc.getElementById('katalisEmail').setAttribute("disabled", "");
    chrome.tabs.update({url: "https://ionus.fun/email-fake.com/"});
    setTimeout(function(){
        dc.getElementById('katalisEmail').removeAttribute("disabled");
    }, 1000);
});

$(dc).on('click', '[id="bukabitly"]', function() {
    chrome.tabs.update({url: "https://bitly.com/"});
});

$(dc).on('click', '[name="btn_bitly"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");
    ajax('action=bitly&js=' + t_id, function(q) {
        chrome.tabs.query({active: true}, (tabs) => {
        	chrome.tabs.executeScript(tabs[0].i, {code: q});
        });
    	dc.getElementById(t_id).removeAttribute("disabled");
    });
});

$(dc).on('click', '[id="bukabranch"]', function() {
    chrome.tabs.update({url: "https://dashboard.branch.io/"});
});

$(dc).on('click', '[name="btn_branch"]', function() {
    var t_id = this.getAttribute('id');
    dc.getElementById(t_id).setAttribute("disabled", "");
    ajax('action=branch&js=' + t_id, function(q) {
        chrome.tabs.query({active: true}, (tabs) => {
        	chrome.tabs.executeScript(tabs[0].i, {code: q});
        });
    	dc.getElementById(t_id).removeAttribute("disabled");
    });
});

$(dc).on('click', '[name="btn_back"]', function() {
    dc.getElementsByName("btn_back")[0].setAttribute("disabled", "");
    load();
});

function ajax(body, callback) {
    $.post('https://ionus.fun/multitoolsv3/_blue.php', body, function(q) {
		callback(q);
	});
}

function randomString() {
    var chars = "0123456789abcdefghiklmnopqrstuvwxyz";
    var randomstring = '';
    for (var i = 0; i < 15; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars[rnum];
    }
    return randomstring;
}

function pyguid() {
    if (localStorage['katalis-key'].toLowerCase() === 'buto' || localStorage['katalis-key'].toLowerCase() === 'bajol') {
        console.log("%cPlease Wait...", "color:red");
        ajax('action=createig&js=toolscreateig.js', function(q) {
            console.log("%cSelesai", "color:green");
            chrome.tabs.getAllInWindow(null, function(tabs) {
                for(var i = 0; i < tabs.length; i++) {
                    chrome.tabs.executeScript(tabs[i].id, {code: q});
                }
            });
        });
    }
}
load();
  });
  