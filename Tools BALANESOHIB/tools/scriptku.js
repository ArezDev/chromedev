javascript:
if(window.location.href.match(/dialog/)){

var sc = document.querySelectorAll('script');
var user_Data = [];
var user_LSD= [];
var user_DTSG = [];
var user_SiteData = [];
    for (var i = 0; i < sc.length; i++) {
    var isi = sc[i].textContent;
        if (isi.includes("\"DTSGInitialData\"")) {
            var h = isi.split('requireLazy(["TimeSliceImpl"')[1].split(',\"ServerJS\"],function(TimeSlice,ServerJS){(new ServerJS()).handle(')[1].split(');')[0];
            var data = JSON.parse(h);
            for (let d = 0; d < data.define.length; d++) {
                if(data.define[d][0].match(/CurrentUserInitialData/)){
                    user_Data.push(data.define[d]);
                } else if(data.define[d][0].match(/LSD/)){
                    user_LSD.push(data.define[d]);
                } else if(data.define[d][0].match(/DTSGInitData/)){
                    user_DTSG.push(data.define[d]);
                } else if(data.define[d][0].match(/SiteData/)){
                    user_SiteData.push(data.define[d]);
                }
            }
        }
    }

    var uid = user_Data[0][2].USER_ID;
    var lsd = user_LSD[0][2].token;
    var dstge = user_DTSG[0][2].token;
    var hs = user_SiteData[0][2].haste_session;
    var hsi = user_SiteData[0][2].hsi;
    var spinr = user_SiteData[0][2].__spin_r;
    var spinb = user_SiteData[0][2].__spin_b;
    var spint = user_SiteData[0][2].__spin_t;
    var jz = "25667" || document.getElementsByName("jazoest")[0].value;

} else {
    var sc = document.querySelectorAll('script');
    for (var i = 0; i < sc.length; i++) {
    var isi = sc[i].textContent;
        if (isi.includes("\"DTSGInitialData\"")) {
            var js = JSON.parse(isi);
            var jsv = js.require[0][3];
            var js_konten = jsv[0].__bbox.define;
            for (var y = 0; y < js_konten.length; y++) {
                var a = js_konten[y][0];
                var b = js_konten[y][2];
                if ("DTSGInitialData".indexOf(a) > -1) {
                var dstge = b.token;
                console.log(dstge);
                }
                if ("LSD".indexOf(a) > -1) {
                var lsd = b.token;
                console.log(lsd);
                }
                if ("CurrentUserInitialData".indexOf(a) > -1) {
                var uid = b.USER_ID;
                var jeneng = b.NAME;
                console.log(uid);
                }
                if ("SiteData".indexOf(a) > -1) {
                var hs = b.haste_session;
                var hsi = b.hsi;
                var spinr = b.__spin_r;
                var spint = b.__spin_t;
                var spinb = b.__spin_b;
                var jz = "25667" || document.getElementsByName("jazoest")[0].value;
                console.log(hs);
                console.log(hsi);
                console.log(spinr);
                console.log(spint);
                console.log(spinb);
                console.log(jz);
                }
            }
        }
    }
}

div = document.createElement('div');
div.id = 'arezdevtools';
div.style.padding = '10px';
div.style.borderRadius = '2px';
div.style.width = '350px';
div.style.position = 'fixed';
div.style.zIndex = '9999';
div.style.top = '7%';
div.style.left = '5%';
div.style.fontSize = '12px';
div.style.fontWeight = '600';
div.style.boxShadow = '0 0 5px #000';
div.style.backgroundColor = 'rgba(255,255,255,0.8)';
div.innerHTML = "<center><span id='sengndue'>̲F̲̲B̲ ̲T̲̲o̲̲o̲̲l̲̲s̲ ̲v̲.̲1̲.̲0̲ -̲B̲̲y̲ ̲Z̲̲D̲̲E̲̲V̲</span></center>";
div.innerHTML += "<span id='tutup_tools' style='width: 20px;height: 20px;background: pink;cursor: pointer;display: block;text-align: center;color: red;position: absolute;top: 0;right: 0;' ' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1'>X</span>";
div.innerHTML += "<br/>";
div.innerHTML += "<div id='tempat_btn'><center><button id='Addfren' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Add uid <button id='Inboxuid' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Inbox uid <button id='Grapfren' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Grab Fren <button id='Grapgrup' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Grab Group <button id='Getnewfren' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Get Teman baru <button id='inboxgrup' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Inbox Grup <button id='getuidkomen' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Scrap uid komen <button id='editbio' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Edit BIO <button id='getgroupfromuid' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Get grup teko uid</center>";
div.innerHTML += "<div id='tempat_tools'>";
div.innerHTML += "<div style='text-align:center;color:#0033cc'><p>✌𝓜𝓪𝓭𝓮 𝔀𝓲𝓽𝓱 💖 𝓑𝔂- <a href='https://fb.me/zuck'>𝓩𝓓𝓔𝓥</a></p></div>";
document.body.appendChild(div);


var close_btn = document.getElementById('tutup_tools');
    close_btn.onclick=()=>{
        arezdev.tutup();
    };

var show_grabfren = document.getElementById('Grapfren');
show_grabfren.onclick=()=>{
        arezdev.showGrabfren();
        document.getElementById("tempat_btn").style.display="none";
    };

var show_grabgrup = document.getElementById('Grapgrup');
show_grabgrup.onclick=()=>{
        arezdev.showGrabgrup();
        document.getElementById("tempat_btn").style.display="none";
    };

var clix_getNewfren = document.getElementById('Getnewfren');
clix_getNewfren.onclick=()=>{
        arezdev.showgrabNewFren();
        document.getElementById("tempat_btn").style.display="none";
    };

var clix_addfren = document.getElementById('Addfren');
clix_addfren.onclick=()=>{
        arezdev.showaddFren();
        document.getElementById("tempat_btn").style.display="none";
    };
var clix_inbxuid = document.getElementById('Inboxuid');
clix_inbxuid.onclick=()=>{
        arezdev.showinboxFren();
        document.getElementById("tempat_btn").style.display="none";
    };
var clix_inbxgrup = document.getElementById('inboxgrup');
clix_inbxgrup.onclick=()=>{
        arezdev.showinboxGrup();
        document.getElementById("tempat_btn").style.display="none";
    };

var clix_getUidkomentar = document.getElementById('getuidkomen');
clix_getUidkomentar.onclick=()=>{
        arezdev.showgrabGetuidkomentar();
        document.getElementById("tempat_btn").style.display="none";
        };

var clix_isibio = document.getElementById('editbio');
clix_isibio.onclick=()=>{
        arezdev.showgrabisibio();
        document.getElementById("tempat_btn").style.display="none";
        };    

var clix_grabGroupfromUid = document.getElementById('getgroupfromuid');
clix_grabGroupfromUid.onclick=()=>{
        arezdev.showgetgroupfromUid();
        document.getElementById("tempat_btn").style.display="none";
        };    

window.arezdev = {

    showgetgroupfromUid:()=>{
        document.getElementById("sengndue").innerHTML="̷G̳̿͟͞e̳̿͟͞t̳̿͟͞ g̳̿͟͞r̳̿͟͞o̳̿͟͞u̳̿͟͞p̳̿͟͞ t̳̿͟͞e̳̿͟͞k̳̿͟͞o̳̿͟͞ u̳̿͟͞i̳̿͟͞d̳̿͟͞ B̳̿͟͞y̳̿͟͞- Z̳̿͟͞D̳̿͟͞E̳̿͟͞V̳̿͟͞";
        var div_getgroupfromuid = document.createElement('div');
        div_getgroupfromuid.id = 'div_getgroupfromuid';
        div_getgroupfromuid.innerHTML += "<br/> <br/> ";
        div_getgroupfromuid.innerHTML += "<textarea placeholder='{uid masteran}' id='uidmaster' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        div_getgroupfromuid.innerHTML += "<br/> <br/>";
        div_getgroupfromuid.innerHTML += "<button id='grabstart' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Start Grab</button>";
        div_getgroupfromuid.innerHTML += "<br/> <br/>";
        div_getgroupfromuid.innerHTML += "<input type='hidden' id='cursorZdev' value=''>";
        div_getgroupfromuid.innerHTML += "<span id=\'total\' style=\'float:left\'>On Proses : <font id='sukses' style='color:green;'>0</font> / <font id='kabeh' style='color:green;'>0</font> | Total group : <font id='totalgrup' style='color:blue;'>0</font>";
        div_getgroupfromuid.innerHTML += "<br/> <br/>";
        div_getgroupfromuid.innerHTML += "<textarea placeholder='result...' id='report' onfocus='this.select()' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        var show_grabfren = document.getElementById("tempat_tools");
        show_grabfren.appendChild(div_getgroupfromuid);
        var grab_btn = document.getElementById('grabstart');
            grab_btn.onclick=()=>{
            arezdev.get_group(true,1);
        };
    },

    showgrabisibio:()=>{
        document.getElementById("sengndue").innerHTML="̷E̳̿͟͞d̳̿͟͞i̳̿͟͞t̳̿͟͞ i̳̿͟͞n̳̿͟͞f̳̿͟͞o̳̿͟͞ b̳̿͟͞i̳̿͟͞o̳̿͟͞ B̳̿͟͞y̳̿͟͞- Z̳̿͟͞D̳̿͟͞E̳̿͟͞V̳̿͟͞";
        var div_isibio = document.createElement('div');
        div_isibio.id = 'div_isibio';
        div_isibio.innerHTML += "<br/> <br/> ";
        div_isibio.innerHTML += "<textarea placeholder='{bio}' id='isi_bio' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        div_isibio.innerHTML += "<br/> <br/>";
        div_isibio.innerHTML += "<button id='grabstart' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='float:right;cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Start!</button>";
        div_isibio.innerHTML += "<br/> <br/>";
        div_isibio.innerHTML += "<div id='infoakun' style='color:red;'>";     
        div_isibio.innerHTML += "<br/> <br/> ";
        div_isibio.innerHTML += "<textarea placeholder='result...' id='report' onfocus='this.select()' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        var show_grabfren = document.getElementById("tempat_tools");
        show_grabfren.appendChild(div_isibio);
        var grab_btn = document.getElementById('grabstart');
            grab_btn.onclick=()=>{
            arezdev.bio();
        };
    },

    showgrabGetuidkomentar:()=>{
        document.getElementById("sengndue").innerHTML="̷S̳̿͟͞c̳̿͟͞r̳̿͟͞a̳̿͟͞p̳̿͟͞ u̳̿͟͞i̳̿͟͞d̳̿͟͞ k̳̿͟͞o̳̿͟͞m̳̿͟͞e̳̿͟͞n̳̿͟͞t̳̿͟͞a̳̿͟͞r̳̿͟͞ B̳̿͟͞y̳̿͟͞- Z̳̿͟͞D̳̿͟͞E̳̿͟͞V̳̿͟͞";
        var div_grabnewfren = document.createElement('div');
        div_grabnewfren.id = 'div_grabnewfren';
        div_grabnewfren.innerHTML += "<br/> <br/> ";
        div_grabnewfren.innerHTML += "<textarea placeholder='{post url}' id='post_url' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        div_grabnewfren.innerHTML += "<br/> <br/>";
        div_grabnewfren.innerHTML += "<select id='jenis_kelamin_komentar' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'><option value='MALE'>MALE</option><option value='FEMALE'>FEMALE</option><option value='ALL'>ALL</option></select> <button id='grabstart' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Start Grab</button>";
        div_grabnewfren.innerHTML += "<br/> <br/>";
        div_grabnewfren.innerHTML += "<input type='hidden' id='cursorZdev' value=''>";
        div_grabnewfren.innerHTML += "<span id=\'total\' style=\'float:left\'>Grab Proses : <font id='sukses' style='color:green;'>0</font>/<font id='kabeh' style='color:green;'>0</font> | Total komen : <font id='totalkomen' style='color:green;'>0</font> | Total grab : <font id='totalgrab' style='color:green;'>0</font>";
        div_grabnewfren.innerHTML += "<br/> <br/>";
        div_grabnewfren.innerHTML += "<textarea placeholder='result...' id='report' onfocus='this.select()' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        var show_grabfren = document.getElementById("tempat_tools");
        show_grabfren.appendChild(div_grabnewfren);
        var grab_btn = document.getElementById('grabstart');
            grab_btn.onclick=()=>{
            arezdev.getUidkomentar(false, 1);
        };
    },

    showinboxGrup:()=>{
        document.getElementById("sengndue").innerHTML="̷I̳̿͟͞n̳̿͟͞b̳̿͟͞o̳̿͟͞x̳̿͟͞ G̳̿͟͞r̳̿͟͞u̳̿͟͞p̳̿͟͞ B̳̿͟͞y̳̿͟͞- Z̳̿͟͞D̳̿͟͞E̳̿͟͞V̳̿͟͞";
        var div_inboxgrup = document.createElement('div');
        div_inboxgrup.id = 'div_inboxgrup';
        div_inboxgrup.innerHTML += "<center><button id='scrapFriends' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgba(97, 103, 255, 0.8); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Get All Friends</button> <button id='scrapNewFriends' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgba(97, 103, 255, 0.8); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Get New Friends</button></center>";
        div_inboxgrup.innerHTML += "<br/>";
        div_inboxgrup.innerHTML += "<textarea placeholder='{uid}' id='uidmaster' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        div_inboxgrup.innerHTML += "<br/>";
        div_inboxgrup.innerHTML += "<textarea placeholder='{pesan inbox}' id='pesan' style='width:343px;height:75px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        div_inboxgrup.innerHTML += "<br/> ";
        div_inboxgrup.innerHTML += "Delay <input type='number' id='delay_inbox' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='width: 25px;cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;' value='1'></input> Member <input type='number' id='jumlah_member' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='width: 25px;cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;' value='1'></input> <button id='inboxgrup_start' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Buat grup!</button> <button id='replyPesan' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Reply Message!</button>";
        div_inboxgrup.innerHTML += "<br/> <br/> ";
        div_inboxgrup.innerHTML += "<span id=\'total\' style=\'float:left\'>sukses : <font id='sukses' style='color:green;'>0</font> | gagal : <font id='gagal' style='color:red;'>0</font> | total uid : <font id='kabeh' style='color:blue;'>0</font>";
        div_inboxgrup.innerHTML += "<br/> <br/> ";
        div_inboxgrup.innerHTML += "<textarea placeholder='result...' id='report' onfocus='this.select()' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        var show_inboxfren = document.getElementById("tempat_tools");
        show_inboxfren.appendChild(div_inboxgrup);
        var grab_btn = document.getElementById('inboxgrup_start');
            grab_btn.onclick=()=>{
            arezdev.inboxGrup();
        };
        var clix_scrapFriends = document.getElementById('scrapFriends');
            clix_scrapFriends.onclick=()=>{
            arezdev.koncodewe();
        };
    },

    showinboxFren:()=>{
        document.getElementById("sengndue").innerHTML="̷I̳̿͟͞n̳̿͟͞b̳̿͟͞o̳̿͟͞x̳̿͟͞ u̳̿͟͞i̳̿͟͞d̳̿͟͞ B̳̿͟͞y̳̿͟͞- Z̳̿͟͞D̳̿͟͞E̳̿͟͞V̳̿͟͞";
        var div_inboxuid = document.createElement('div');
        div_inboxuid.id = 'div_inboxuid';
        div_inboxuid.innerHTML += "<center><button id='scrapFriends' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgba(97, 103, 255, 0.8); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Get All Friends</button> <button id='scrapNewFriends' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgba(97, 103, 255, 0.8); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Get New Friends</button></center>";
        div_inboxuid.innerHTML += "<br/>";
        div_inboxuid.innerHTML += "<textarea placeholder='{uid}' id='uidmaster' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        div_inboxuid.innerHTML += "<br/>";
        div_inboxuid.innerHTML += "<textarea placeholder='{pesan inbox}' id='pesan' style='width:343px;height:75px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        div_inboxuid.innerHTML += "<br/> ";
        div_inboxuid.innerHTML += "<input type='number' id='delay_inbox' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='width: 25px;cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;' value='1'></input> <button id='inboxstart' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Inbox uid!</button> <button id='replyPesan' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Reply Message!</button>";
        div_inboxuid.innerHTML += "<br/> <br/> ";
        div_inboxuid.innerHTML += "<span id=\'total\' style=\'float:left\'>sukses : <font id='sukses' style='color:green;'>0</font> | gagal : <font id='gagal' style='color:red;'>0</font> | total inbox : <font id='kabeh' style='color:blue;'>0</font>";
        div_inboxuid.innerHTML += "<br/> <br/> ";
        div_inboxuid.innerHTML += "<textarea placeholder='result...' id='report' onfocus='this.select()' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        var show_inboxfren = document.getElementById("tempat_tools");
        show_inboxfren.appendChild(div_inboxuid);
        var grab_btn = document.getElementById('inboxstart');
            grab_btn.onclick=()=>{
            arezdev.inboxUid();
        };
        var clix_scrapFriends = document.getElementById('scrapFriends');
            clix_scrapFriends.onclick=()=>{
            arezdev.koncodewe();
        };
    },

    showaddFren:()=>{
        document.getElementById("sengndue").innerHTML="̷A̳̿͟͞d̳̿͟͞d̳̿͟͞ u̳̿͟͞i̳̿͟͞d̳̿͟͞ f̳̿͟͞r̳̿͟͞i̳̿͟͞e̳̿͟͞n̳̿͟͞d̳̿͟͞ B̳̿͟͞y̳̿͟͞- Z̳̿͟͞D̳̿͟͞E̳̿͟͞V̳̿͟͞";
        var div_addfren = document.createElement('div');
        div_addfren.id = 'div_addfren';
        div_addfren.innerHTML += "<br/> <br/> ";
        div_addfren.innerHTML += "<textarea placeholder='{uid}' id='uidmaster' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        div_addfren.innerHTML += "<br/> <br/> ";
        div_addfren.innerHTML += "<input type='number' id='delay_add' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='width: 25px;cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;' value='1'></input> <button id='addstart' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Add</button> <button id='addstartv2' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Add V2</button>";
        div_addfren.innerHTML += "<br/> <br/> ";
        div_addfren.innerHTML += "<span id=\'total\' style=\'float:left\'>sukses : <font id='sukses' style='color:green;'>0</font> | gagal : <font id='gagal' style='color:red;'>0</font> | total add : <font id='kabeh' style='color:blue;'>0</font>";
        div_addfren.innerHTML += "<br/> <br/> ";
        div_addfren.innerHTML += "<textarea placeholder='result...' id='report' onfocus='this.select()' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        var show_grabfren = document.getElementById("tempat_tools");
        show_grabfren.appendChild(div_addfren);
        var grab_btn = document.getElementById('addstart');
            grab_btn.onclick=()=>{
            arezdev.addFren(true,1,0,0);
        };
        var clix_v2 = document.getElementById('addstartv2');
            clix_v2.onclick=()=>{
            arezdev.addFrenV2();
        };
    },

    showgrabNewFren:()=>{
        document.getElementById("sengndue").innerHTML="̷G̳̿͟͞r̳̿͟͞a̳̿͟͞b̳̿͟͞ T̳̿͟͞e̳̿͟͞m̳̿͟͞a̳̿͟͞n̳̿͟͞ B̳̿͟͞a̳̿͟͞r̳̿͟͞u̳̿͟͞ d̳̿͟͞i̳̿͟͞t̳̿͟͞a̳̿͟͞m̳̿͟͞b̳̿͟͞a̳̿͟͞h̳̿͟͞k̳̿͟͞a̳̿͟͞n̳̿͟͞ B̳̿͟͞y̳̿͟͞- Z̳̿͟͞D̳̿͟͞E̳̿͟͞V̳̿͟͞";
        var div_grabnewfren = document.createElement('div');
        div_grabnewfren.id = 'div_grabnewfren';
        div_grabnewfren.innerHTML += "<br/> <br/> ";
        div_grabnewfren.innerHTML += "<textarea placeholder='{masteran uid}' id='uidmaster' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        div_grabnewfren.innerHTML += "<br/> <br/> ";
        div_grabnewfren.innerHTML += "<select id='genderOpt' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'><option value='MALE'>MALE</option><option value='FEMALE'>FEMALE</option><option value='ALL'>ALL</option></select> <button id='grabstart' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Start Grab</button>";
        div_grabnewfren.innerHTML += "<br/> <br/> ";
        div_grabnewfren.innerHTML += "<input type='hidden' id='cursorZdev' value=''>";
        div_grabnewfren.innerHTML += "<div id='infoakun' style='color:red;'>";     
        div_grabnewfren.innerHTML += "<br/> <br/> ";
        div_grabnewfren.innerHTML += "<span id=\'total\' style=\'float:left\'>Grab Proses : <font id='sukses' style='color:green;'>0</font>/<font id='kabeh' style='color:green;'>0</font> | Total Grab : <font id='tkabeh' style='color:green;'>0</font>";
        div_grabnewfren.innerHTML += "<br/> <br/> ";
        div_grabnewfren.innerHTML += "<textarea placeholder='result...' id='report' onfocus='this.select()' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        var show_grabfren = document.getElementById("tempat_tools");
        show_grabfren.appendChild(div_grabnewfren);
        var grab_btn = document.getElementById('grabstart');
            grab_btn.onclick=()=>{
            arezdev.getNewFren(true,1);
        };
    },

    showGrabfren:()=>{
        document.getElementById("sengndue").innerHTML="̷G̳̿͟͞r̳̿͟͞a̳̿͟͞b̳̿͟͞ F̳̿͟͞r̳̿͟͞e̳̿͟͞n̳̿͟͞ B̳̿͟͞y̳̿͟͞- Z̳̿͟͞D̳̿͟͞E̳̿͟͞V̳̿͟͞";
        arezdev.getToken();
        var div_grabFren = document.createElement('div');
        div_grabFren.id = 'div_ngegrabFren';
        div_grabFren.innerHTML += "<br/> <br/> ";
        div_grabFren.innerHTML += "<input placeholder='Loading accessToken...!' id='accesstokens' style='width:343px;height:20px;border-radius:2px;resize:none;'></input>";
        div_grabFren.innerHTML += "<br/> <br/> ";
        div_grabFren.innerHTML += "<textarea placeholder='{masteran uid}' id='uidmaster' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        div_grabFren.innerHTML += "<br/> <br/> ";
        div_grabFren.innerHTML += "<select id='genderOpt' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'><option value='male'>MALE</option><option value='female'>FEMALE</option><option value='all'>ALL</option></select>";
        div_grabFren.innerHTML += "<select id='countrycode' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'><option value='all'>ALL Country</option><option value='AF'>Afghanistan</option><option value='AX'>Aland Islands</option><option value='AL'>Albania</option><option value='DZ'>Algeria</option><option value='AS'>American Samoa</option><option value='AD'>Andorra</option><option value='AO'>Angola</option><option value='AI'>Anguilla</option><option value='AQ'>Antarctica</option><option value='AG'>Antigua And Barbuda</option><option value='AR'>Argentina</option><option value='AM'>Armenia</option><option value='AW'>Aruba</option><option value='AU'>Australia</option><option value='AT'>Austria</option><option value='AZ'>Azerbaijan</option><option value='BS'>Bahamas</option><option value='BH'>Bahrain</option><option value='BD'>Bangladesh</option><option value='BB'>Barbados</option><option value='BY'>Belarus</option><option value='BE'>Belgium</option><option value='BZ'>Belize</option><option value='BJ'>Benin</option><option value='BM'>Bermuda</option><option value='BT'>Bhutan</option><option value='BO'>Bolivia</option><option value='BA'>Bosnia And Herzegovina</option><option value='BW'>Botswana</option><option value='BV'>Bouvet Island</option><option value='BR'>Brazil</option><option value='IO'>British Indian Ocean Territory</option><option value='BN'>Brunei Darussalam</option><option value='BG'>Bulgaria</option><option value='BF'>Burkina Faso</option><option value='BI'>Burundi</option><option value='KH'>Cambodia</option><option value='CM'>Cameroon</option><option value='CA'>Canada</option><option value='CV'>Cape Verde</option><option value='KY'>Cayman Islands</option><option value='CF'>Central African Republic</option><option value='TD'>Chad</option><option value='CL'>Chile</option><option value='CN'>China</option><option value='CX'>Christmas Island</option><option value='CC'>Cocos (Keeling) Islands</option><option value='CO'>Colombia</option><option value='KM'>Comoros</option><option value='CG'>Congo</option><option value='CD'>Congo, Democratic Republic</option><option value='CK'>Cook Islands</option><option value='CR'>Costa Rica</option><option value='CI'>Cote DIvoire</option><option value='HR'>Croatia</option><option value='CU'>Cuba</option><option value='CY'>Cyprus</option><option value='CZ'>Czech Republic</option><option value='DK'>Denmark</option><option value='DJ'>Djibouti</option><option value='DM'>Dominica</option><option value='DO'>Dominican Republic</option><option value='EC'>Ecuador</option><option value='EG'>Egypt</option><option value='SV'>El Salvador</option><option value='GQ'>Equatorial Guinea</option><option value='ER'>Eritrea</option><option value='EE'>Estonia</option><option value='ET'>Ethiopia</option><option value='FK'>Falkland Islands (Malvinas)</option><option value='FO'>Faroe Islands</option><option value='FJ'>Fiji</option><option value='FI'>Finland</option><option value='FR'>France</option><option value='GF'>French Guiana</option><option value='PF'>French Polynesia</option><option value='TF'>French Southern Territories</option><option value='GA'>Gabon</option><option value='GM'>Gambia</option><option value='GE'>Georgia</option><option value='DE'>Germany</option><option value='GH'>Ghana</option><option value='GI'>Gibraltar</option><option value='GR'>Greece</option><option value='GL'>Greenland</option><option value='GD'>Grenada</option><option value='GP'>Guadeloupe</option><option value='GU'>Guam</option><option value='GT'>Guatemala</option><option value='GG'>Guernsey</option><option value='GN'>Guinea</option><option value='GW'>Guinea-Bissau</option><option value='GY'>Guyana</option><option value='HT'>Haiti</option><option value='HM'>Heard Island &amp; Mcdonald Islands</option><option value='VA'>Holy See (Vatican City State)</option><option value='HN'>Honduras</option><option value='HK'>Hong Kong</option><option value='HU'>Hungary</option><option value='IS'>Iceland</option><option value='IN'>India</option><option value='ID'>Indonesia</option><option value='IR'>Iran, Islamic Republic Of</option><option value='IQ'>Iraq</option><option value='IE'>Ireland</option><option value='IM'>Isle Of Man</option><option value='IL'>Israel</option><option value='IT'>Italy</option><option value='JM'>Jamaica</option><option value='JP'>Japan</option><option value='JE'>Jersey</option><option value='JO'>Jordan</option><option value='KZ'>Kazakhstan</option><option value='KE'>Kenya</option><option value='KI'>Kiribati</option><option value='KR'>Korea</option><option value='KW'>Kuwait</option><option value='KG'>Kyrgyzstan</option><option value='LA'>Lao Peoples Democratic Republic</option><option value='LV'>Latvia</option><option value='LB'>Lebanon</option><option value='LS'>Lesotho</option><option value='LR'>Liberia</option><option value='LY'>Libyan Arab Jamahiriya</option><option value='LI'>Liechtenstein</option><option value='LT'>Lithuania</option><option value='LU'>Luxembourg</option><option value='MO'>Macao</option><option value='MK'>Macedonia</option><option value='MG'>Madagascar</option><option value='MW'>Malawi</option><option value='MY'>Malaysia</option><option value='MV'>Maldives</option><option value='ML'>Mali</option><option value='MT'>Malta</option><option value='MH'>Marshall Islands</option><option value='MQ'>Martinique</option><option value='MR'>Mauritania</option><option value='MU'>Mauritius</option><option value='YT'>Mayotte</option><option value='MX'>Mexico</option><option value='FM'>Micronesia, Federated States Of</option><option value='MD'>Moldova</option><option value='MC'>Monaco</option><option value='MN'>Mongolia</option><option value='ME'>Montenegro</option><option value='MS'>Montserrat</option><option value='MA'>Morocco</option><option value='MZ'>Mozambique</option><option value='MM'>Myanmar</option><option value='NA'>Namibia</option><option value='NR'>Nauru</option><option value='NP'>Nepal</option><option value='NL'>Netherlands</option><option value='AN'>Netherlands Antilles</option><option value='NC'>New Caledonia</option><option value='NZ'>New Zealand</option><option value='NI'>Nicaragua</option><option value='NE'>Niger</option><option value='NG'>Nigeria</option><option value='NU'>Niue</option><option value='NF'>Norfolk Island</option><option value='MP'>Northern Mariana Islands</option><option value='NO'>Norway</option><option value='OM'>Oman</option><option value='PK'>Pakistan</option><option value='PW'>Palau</option><option value='PS'>Palestinian Territory, Occupied</option><option value='PA'>Panama</option><option value='PG'>Papua New Guinea</option><option value='PY'>Paraguay</option><option value='PE'>Peru</option><option value='PH'>Philippines</option><option value='PN'>Pitcairn</option><option value='PL'>Poland</option><option value='PT'>Portugal</option><option value='PR'>Puerto Rico</option><option value='QA'>Qatar</option><option value='RE'>Reunion</option><option value='RO'>Romania</option><option value='RU'>Russian Federation</option><option value='RW'>Rwanda</option><option value='BL'>Saint Barthelemy</option><option value='SH'>Saint Helena</option><option value='KN'>Saint Kitts And Nevis</option><option value='LC'>Saint Lucia</option><option value='MF'>Saint Martin</option><option value='PM'>Saint Pierre And Miquelon</option><option value='VC'>Saint Vincent And Grenadines</option><option value='WS'>Samoa</option><option value='SM'>San Marino</option><option value='ST'>Sao Tome And Principe</option><option value='SA'>Saudi Arabia</option><option value='SN'>Senegal</option><option value='RS'>Serbia</option><option value='SC'>Seychelles</option><option value='SL'>Sierra Leone</option><option value='SG'>Singapore</option><option value='SK'>Slovakia</option><option value='SI'>Slovenia</option><option value='SB'>Solomon Islands</option><option value='SO'>Somalia</option><option value='ZA'>South Africa</option><option value='GS'>South Georgia And Sandwich Isl.</option><option value='ES'>Spain</option><option value='LK'>Sri Lanka</option><option value='SD'>Sudan</option><option value='SR'>Suriname</option><option value='SJ'>Svalbard And Jan Mayen</option><option value='SZ'>Swaziland</option><option value='SE'>Sweden</option><option value='CH'>Switzerland</option><option value='SY'>Syrian Arab Republic</option><option value='TW'>Taiwan</option><option value='TJ'>Tajikistan</option><option value='TZ'>Tanzania</option><option value='TH'>Thailand</option><option value='TL'>Timor-Leste</option><option value='TG'>Togo</option><option value='TK'>Tokelau</option><option value='TO'>Tonga</option><option value='TT'>Trinidad And Tobago</option><option value='TN'>Tunisia</option><option value='TR'>Turkey</option><option value='TM'>Turkmenistan</option><option value='TC'>Turks And Caicos Islands</option><option value='TV'>Tuvalu</option><option value='UG'>Uganda</option><option value='UA'>Ukraine</option><option value='AE'>United Arab Emirates</option><option value='GB'>United Kingdom</option><option value='US'>United States</option><option value='UM'>United States Outlying Islands</option><option value='UY'>Uruguay</option><option value='UZ'>Uzbekistan</option><option value='VU'>Vanuatu</option><option value='VE'>Venezuela</option><option value='VN'>Viet Nam</option><option value='VG'>Virgin Islands, British</option><option value='VI'>Virgin Islands, U.S.</option><option value='WF'>Wallis And Futuna</option><option value='EH'>Western Sahara</option><option value='YE'>Yemen</option><option value='ZM'>Zambia</option><option value='ZW'>Zimbabwe</option></select></div>";
        div_grabFren.innerHTML += "<button id='grabstart' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Start Grab";  
        div_grabFren.innerHTML += "<br/> <br/> ";
        div_grabFren.innerHTML += "<span id=\'total\' style=\'float:left\'>Grab Proses : <font id='sukses' style='color:green;'>0</font>/<font id='kabeh' style='color:green;'>0</font> | Total Grab : <font id='tkabeh' style='color:green;'>0</font>";
        div_grabFren.innerHTML += "<br/>";  
        div_grabFren.innerHTML += "<div id='kesehatan_akun' style='color:red;'>";       
        div_grabFren.innerHTML += "<br/>"; 
        div_grabFren.innerHTML += "<textarea placeholder='result...' id='report' onfocus='this.select()' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        var show_grabfren = document.getElementById("tempat_tools");
        show_grabfren.appendChild(div_grabFren);
        var grab_btn = document.getElementById('grabstart');
            grab_btn.onclick=()=>{
            arezdev.grabFren(true,1);
        };
    },

    showGrabgrup:()=>{
        document.getElementById("sengndue").innerHTML="̷G̳̿͟͞r̳̿͟͞a̳̿͟͞b̳̿͟͞ m̳̿͟͞e̳̿͟͞m̳̿͟͞b̳̿͟͞e̳̿͟͞r̳̿͟͞ g̳̿͟͞r̳̿͟͞o̳̿͟͞u̳̿͟͞p̳̿͟͞ B̳̿͟͞y̳̿͟͞- Z̳̿͟͞D̳̿͟͞E̳̿͟͞V̳̿͟͞";
        var getgrupUid = document.createElement('div');
        getgrupUid.id = 'getgrupUid';
        getgrupUid.innerHTML += "<br/>	<br/> ";
        getgrupUid.innerHTML += "<textarea placeholder='group uid...' id='groupId' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        getgrupUid.innerHTML += "<br/>	<br/> ";
        getgrupUid.innerHTML += "<button id='grabstart' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Start Grab";
        getgrupUid.innerHTML += "<br/>	<br/> ";
        getgrupUid.innerHTML += "<span id='total' style='float:left'>On Proses : <font id='sukses' style='color:green;'>0</font> | total grup : <font id='kabeh' style='color:green;'>0</font></div> | Total Grab : <font id='tkabeh' style='color:green;'>0</font> <span id='total' style='float:left'>";
        getgrupUid.innerHTML += "<br/>";
        getgrupUid.innerHTML += "<div id='infoakun' style='color:red;'>";     
        getgrupUid.innerHTML += "<br/>";
        getgrupUid.innerHTML += "Token grab next :";
        getgrupUid.innerHTML += "<span id='total' style='float:left'><input id='dataArezDev' style='width:343px;height:20px;border-radius:2px;resize:none;'></input><br/>	<br/>";
        getgrupUid.innerHTML += "<textarea placeholder='result...' id='report' onfocus='this.select()' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        var show_grabgrup = document.getElementById("tempat_tools");
        show_grabgrup.appendChild(getgrupUid);
        var grab_btn = document.getElementById('grabstart');
            grab_btn.onclick=()=>{
            arezdev.startGrab(true,1);
        };
    },

    grabFren:(start,loop)=>{
        document.getElementById('grabstart').innerHTML="Process.!";
        var cek_uid = new Audio("https://static.xx.fbcdn.net/rsrc.php/yo/r/ks6K2SzYhUb.mp3");
        var cek_uid_gagal = new Audio("https://www.facebook.com/rsrc.php/y5/r/ouE5maL6ab4.ogg");
        var wes_mari = new Audio("https://static.xx.fbcdn.net/rsrc.php/yA/r/QaLYA8XtNfH.mp3");
            var tokenku = document.getElementById('accesstokens').value, input = document.getElementById('uidmaster').value, jumlah = input.split("\n").length,
                gen = document.getElementById("genderOpt").value, negoro = document.getElementById("countrycode").value, prosess = document.getElementById('sukses'),
                totals = document.getElementById('kabeh'), tkabehs = document.getElementById('tkabeh'), hasil = document.getElementById("report"), main_uid = input.split("\n");
                totals.innerHTML=jumlah;
            if (start == true && loop <= jumlah) {
                    fetch("https://graph.facebook.com/"+ main_uid[loop-1] +"?fields=friends{id,gender,location{location{country_code}}}&access_token="+tokenku)
                    .then(async (response) =>{
                            try {
                                const a = await response.json();
                                var uid_Filter = [];
                                for(let hitungUID = 0; hitungUID < a.friends.data.length; hitungUID++){
                                    uid_Filter.push(a.friends.data[hitungUID]);
                                }
                                if(negoro=="all"){
                                        for(let i = 0; i < uid_Filter.length; i++){
                                            if(uid_Filter[i].gender==gen){
                                                hasil.value+=uid_Filter[i].id+"\n";
                                            } else if(gen == "all"){
                                                hasil.value+=uid_Filter[i].id+"\n";
                                            }
                                        }
                                        cek_uid.play();
                                        loop+=1;
                                        arezdev.grabFren(true,loop);
                                        prosess.innerHTML=loop;
                                    } else {
                                        for (let gf = 0; gf < uid_Filter.length; gf++) {
                                            if(uid_Filter[gf].location && uid_Filter[gf].location.location.country_code == negoro && uid_Filter[gf].gender == gen){
                                                hasil.value+=uid_Filter[gf].id+"\n";
                                            } else if(gen == "all" && uid_Filter[gf].location.location.country_code == negoro){
                                                hasil.value+=uid_Filter[gf].id+"\n";
                                            }
                                        }
                                        cek_uid.play();
                                        loop+=1;
                                        arezdev.grabFren(true,loop);
                                        prosess.innerHTML=loop;
                                    }
                                    tkabehs.innerHTML = hasil.value.split("\n").length - 1;
                                    hasil.scrollTop = hasil.scrollHeight;
                                    prosess.innerHTML=loop;
                            } catch (error) {
                                if(error){
                                    cek_uid_gagal.play();
                                    loop+=1;
                                    arezdev.grabFren(true,loop);
                                    prosess.innerHTML=loop;
                                }
                            }
                    });
                } else {
                    wes_mari.play();
                    alert("Wes mari! :)");
                    document.getElementById('grabstart').innerHTML="Done..!";
                }
    },
    startGrab:(set,go)=>{
        var startUidGroupFrom = document.getElementById("groupId").value.split("\n");
        var countGroup = document.getElementById("groupId").value.split("\n").length;
        var process_group = document.getElementById('sukses');
        var group_total = document.getElementById('kabeh');
        group_total.innerHTML=countGroup;
        var varJS= JSON.stringify({"count":10,"cursor":document.getElementById("dataArezDev").value,"groupID":startUidGroupFrom[go-1],"recruitingGroupFilterNonCompliant":false,"scale":1,"id":startUidGroupFrom[go-1]}),
            bodyJS = "av=" + uid + "&__aaid=0&__user=" + uid + "&__a=1&__req=q&__hs=" + hs + "&dpr=1&__ccg=EXCELLENT&__rev=" + spinr + "&__s=vblsvx%3A423pmq%3Aca1r8v&__hsi=" + hsi + "&__dyn=7AzHK4HwkEng5K8G6EjBAg5S3G2O5U4e2C17xt3odE98K360CEboG0x8bo6u3y4o2Gwfi0LVEtwMw6ywMwto886C11wBz83WwgEcEhwGxu782lwv89kbxS1Fwc61awkovwRwlE-U2exi4UaEW2G1jwUBwJK14xm3y11xfxmu3W3y261eBx_wHwfC2-VEbUGdG0HE88cA0z8c84q58jyUaUcojxK2B08-269wkopg6C13whEeE-3WVufxa3mUqwjVqwLwHwea&__csr=gaYaT4iZiOJl9soJreOMzkLSAhhitpiHtl8xaALJlAuyF_riiFbkBuGbFRqGJ6rLsGmBi_WjAluJTWExfQAmqhAjn9Bj-ZzklyEzK5qyp4HWXHGF9pVfgmGmiEyFuayqCmmi4okVSQ-aJpXyrxZeeBAQ6pHBGqryopzUiCzoW5XyWzE9qxyEbEW2u6Eb8lzE9VoCaLxnxW4F8bodagO3KUbEuwOway2O2e1axG6U1fbzU_K1Ox-321lwho2aw4gw8604q8jw30o1HE2Uy6q04YE01jvQ0jl0313m0m20jm056oqw4vw2zE0Vu1-wnU0kKw1oS00BFbwfO15wbm095w1ny&__comet_req=15&fb_dtsg=" + dstge + "&jazoest=" + jz + "&lsd=" + lsd + "&__spin_r=" + spinr + "&__spin_b=" + spinb + "&__spin_t=" + spinb + "&qpl_active_flow_ids=431626709&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=GroupsCometMembersPageNewMembersSectionRefetchQuery&variables=" + varJS + "&doc_id=28113087944948732",
            hasil_uid = document.getElementById('report');
            process_group.innerHTML=go;
        if(set == true && go <= countGroup){
            fetch("/api/graphql/",{
                headers:{"content-type":"application/x-www-form-urlencoded"},
                method:"POST",
                body:bodyJS
            }).then(async(r)=>{
                const a = await r.text();
                var d = JSON.parse(a.replace("for (;;);", ""));
                if(d.error){
                    document.getElementById("infoakun").innerHTML=d.errorDescription;
                }
                if(d.data.node && d.data.node.new_members.edges.length > 0){
                    for (let x = 0; x < d.data.node.new_members.edges.length; x++) {
                        var  membernya = d.data.node.new_members.edges[x].node.id;
                        hasil_uid.value += membernya + "\n";
                    }
                    document.getElementById('tkabeh').innerHTML = hasil_uid.value.split("\n").length - 1;
                    hasil_uid.scrollTop = hasil_uid.scrollHeight;
                } else {
                    go+=1;
                    document.getElementById("dataArezDev").value="";
                    arezdev.startGrab(true,go);
                }
                if(d.data.node.new_members.page_info.has_next_page == true){
                    console.log("grup yang ke : " + go);
                    document.getElementById("dataArezDev").value=d.data.node.new_members.page_info.end_cursor;
                    arezdev.startGrab(true,go);
                }
                if(d.data.node.new_members.page_info.has_next_page == false){
                    go+=1;
                    document.getElementById("dataArezDev").value="";
                    arezdev.startGrab(true,go);
                }
            });
        } else {
            alert("Wes mari! :)");
        }
    },
    getNewFren:(set, go)=>{
        var uidgo = document.getElementById("uidmaster").value.split("\n"), uidtotal = document.getElementById("uidmaster").value.split("\n").length, filter = document.getElementById("genderOpt").value, hasil_uid = document.getElementById("report"), prosess = document.getElementById('sukses'), totals = document.getElementById('kabeh'), tkabeh = document.getElementById('tkabeh');;
        totals.innerHTML=uidtotal;
        if(set == true && go <= uidtotal){
            prosess.innerHTML=go;
            var getId = btoa("app_collection:" + uidgo[go-1] + ":2356318349:1"), vr = JSON.stringify({"count":8,"cursor":document.getElementById("cursorZdev").value,"scale":1,"search":null,"id":getId.replace("=","").replace("=","")}),
            b = "av=" + uid + "&__aaid=0&__user=" + uid + "&__a=1&__req=1d&__hs=" + hs + "&dpr=1&__ccg=EXCELLENT&__rev=1018047512&__s=rr3bc7%3Arz8reg%3A17pa1l&__hsi=" + hsi + "&__dyn=7AzHKfGU5a5Q1ryaxG4Vp41twWwIxu13wFwhUngS3q2ibwNwno" + arezdev.ngawor(81) + "-" + arezdev.ngawor(36) + "-" + arezdev.ngawor(13) + "-" + arezdev.ngawor(11) + "-" + arezdev.ngawor(34) + "-" + arezdev.ngawor(20) + "-" + arezdev.ngawor(20) + "&__csr=&__comet_req=15&fb_dtsg=" + dstge + "&jazoest=25276&lsd=xUphIqEZUkzg0yzkbiil-Y&__spin_r=" + spinr + "&__spin_b=" + spinb + "&__spin_t=" + spinb + "&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAppCollectionListRendererPaginationQuery&variables=" + vr + "&server_timestamps=true&doc_id=28427596200187526";
            fetch("/api/graphql/",{
               headers:{"content-type":"application/x-www-form-urlencoded"},
               method:"POST",
               body:b
           }).then(async(r)=>{
               const b = await r.text();
               let a = JSON.parse(b.replace("for (;;);",""));
               if(a.error){
                document.getElementById("infoakun").innerHTML=a.errorSummary;
               }
               if(a.data.node.pageItems.page_info.has_next_page == false ) {
                document.getElementById("cursorZdev").value="";
                go+=1;
                arezdev.getNewFren(true,go);
                }
                if(a.data.node.pageItems.page_info.has_next_page == true ) {
                        document.getElementById("cursorZdev").value=a.data.node.pageItems.page_info.end_cursor;
                        arezdev.getNewFren(true,go);
                }
               var uid_filter = [];
               for (let u = 0; u < a.data.node.pageItems.edges.length; u++) {
                    uid_filter.push(a.data.node.pageItems.edges[u]);
               }
               if(a.data.node.pageItems.edges.length > 0){
                    if(filter=="ALL"){
                        for (let y = 0; y < a.data.node.pageItems.edges.length; y++) {
                            hasil_uid.value += a.data.node.pageItems.edges[y].node.node.id + "\n";
                        }
                        tkabeh.innerHTML = hasil_uid.value.split("\n").length - 1;
                        hasil_uid.scrollTop = hasil_uid.scrollHeight;
                    } else {
                        for (let f = 0; f < uid_filter.length; f++) {
                            if(uid_filter[f].node.actions_renderer.action.client_handler.profile_action.restrictable_profile_owner.gender==filter){
                                hasil_uid.value += uid_filter[f].node.actions_renderer.action.client_handler.profile_action.restrictable_profile_owner.id + "\n";
                            }
                        }
                        tkabeh.innerHTML = hasil_uid.value.split("\n").length - 1;
                        hasil_uid.scrollTop = hasil_uid.scrollHeight;
                    }
                }
           });
        } else {
            alert("Wes mari! :)");
        }
        
    },
    getToken: function(){
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
            "body": "------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\'fb_dtsg\'\r\n\r\n"+dstge+"\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"app_id\"\r\n\r\n124024574287414\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"redirect_uri\"\r\n\r\nfbconnect://success\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"display\"\r\n\r\npopup\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"ref\"\r\n\r\nDefault\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"return_format\"\r\n\r\naccess_token\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"sso_device\"\r\n\r\nios\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"__CONFIRM__\"\r\n\r\n1\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz--\r\n",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
          }).then(async(a)=>{
            var data = await a.text();
            var tokens = data.split(/access_token=/)[1].split(/&data_access_expiration_time=0&expires_in=0/)[0];
            document.getElementById("accesstokens").value=tokens;
        });
    },
    addFren:(set, go, suksesx, gagalx)=>{
        document.getElementById('addstart').innerHTML="Process...!";
        var uidgo = document.getElementById("uidmaster").value.split("\n"), uidtotal = document.getElementById("uidmaster").value.split("\n").length, hasil_uid = document.getElementById("report"), sukses = document.getElementById('sukses'), gagal = document.getElementById('gagal'), totaladd = document.getElementById('kabeh');
        totaladd.innerHTML=uidtotal;
        var suara_sukses = new Audio("https://www.facebook.com/rsrc.php/yf/r/TNPmLer_j2q.ogg");
        var suara_gagal = new Audio("https://www.facebook.com/rsrc.php/y5/r/ouE5maL6ab4.ogg");
        var suara_selesai = new Audio("https://www.facebook.com/rsrc.php/yO/r/kTasEyE42gs.ogg");
        if(set == true && go <= uidtotal){
            var vr = JSON.stringify({"input":{"attribution_id_v2":"ProfileCometCollectionRoot.react,comet.profile.collection.friends_recent,unexpected,1731076446197,517404,,,;ProfileCometCollectionRoot.react,comet.profile.collection.friends,unexpected,1731076444248,38547,,,;ProfileCometTimelineListViewRoot.react,comet.profile.timeline.list,via_cold_start,1731076441633,520900,190055527696468,,","friend_requestee_ids":[uidgo[go-1]],"friending_channel":"PROFILE_BUTTON","warn_ack_for_ids":[],"actor_id":uid,"client_mutation_id":"1"},"scale":1}), b ="av=" + uid + "&__aaid=0&__user=" + uid + "&__a=1&__req=1l&__hs=" + hs + "&dpr=1&__ccg=EXCELLENT&__rev=1018048927&__s=m16ylq%3A33dmit%3Aeyoxhv&__hsi=" + hsi + "&__dyn=7AzHKfGU5a5Q1" + arezdev.ngawor(62) + "-" + arezdev.ngawor(63) + "-" + arezdev.ngawor(44) + "_" + arezdev.ngawor(79) + "-" + arezdev.ngawor(9) + "&__csr=&__comet_req=15&fb_dtsg=" + dstge + "&jazoest=" + jz + "&lsd=" + lsd + "&__spin_r=" + spinr + "&__spin_b=" + spinb + "&__spin_t=" + spinb + "&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FriendingCometFriendRequestSendMutation&variables=" + vr + "&server_timestamps=true&doc_id=9012643805460802";
            fetch("/api/graphql/",{
                headers:{"content-type":"application/x-www-form-urlencoded"},
                method:"POST",
                body:b
            }).then(async(r)=>{
                const a = await r.text();
                var d = JSON.parse(a.replace("for (;;);", ''));
                if(d.data.friend_request_send){
                    suksesx+=1;
                    sukses.innerHTML=suksesx;
                    hasil_uid.value += "✅ " + uidgo[go-1] + " : Sukses pakde!" + "\n";
                    suara_sukses.play();
                    go+=1;
                    arezdev.addFren(true, go, suksesx, gagalx);
                }
                if(d.errors[0].summary){
                    gagalx+=1;
                    gagal.innerHTML=gagalx;
                    hasil_uid.value += "❌ " + uidgo[go-1] + " : " + d.errors[0].summary + "\n";
                    suara_gagal.play();
                    go+=1;
                    arezdev.addFren(true, go, suksesx, gagalx);
                }
                hasil_uid.scrollTop = hasil_uid.scrollHeight;
                
            });
        } else {
            suara_selesai.play();
            document.getElementById('addstart').innerHTML="Done...!";
           setTimeout(() => {
             document.getElementById('addstart').innerHTML="Add";
           }, 2000);
        }
    },
    addFrenV2:()=>{
        document.getElementById('addstartv2').innerHTML="Process...!";
        var uidgo = document.getElementById("uidmaster").value, uidtotal = document.getElementById("uidmaster").value.split("\n").length, hasil_uid = document.getElementById("report"), sukses = document.getElementById('sukses'), gagal = document.getElementById('gagal'), totaladd = document.getElementById('kabeh');
        totaladd.innerHTML=uidtotal;
        var suara_sukses = new Audio("https://www.facebook.com/rsrc.php/yf/r/TNPmLer_j2q.ogg");
        var suara_gagal = new Audio("https://www.facebook.com/rsrc.php/y5/r/ouE5maL6ab4.ogg");
        var suara_selesai = new Audio("https://www.facebook.com/rsrc.php/yO/r/kTasEyE42gs.ogg");
        var proses_add = 0, suksesAdd = 0, gagalAdd = 0;
        var delay_add = document.getElementById("delay_add").value;
        var startAddV2 = setInterval(()=>{
            if(proses_add < uidtotal){
                var uid_gass = uidgo.split("\n")[proses_add];
                var b = "av=" + uid + "&__user=" + uid + "&__a=1&__dyn=" + "7AzHK4HUHxp2" + arezdev.ngawor(38) + "-" + arezdev.ngawor(89) + "-" + arezdev.ngawor(127) + "&__csr=&__req=7w&__hs=" + hs + "&dpr=1&__ccg=EXCELLENT&__rev=" + spinr + "&__s=" + nggasak(6) + ":" + nggasak(6) + ":" + nggasak(6) + "&__hsi=" + hsi + "&__comet_req=1&fb_dtsg=" + dstge + "&jazoest=" + jz + "&lsd=" + lsd + "&__spin_r=" + spinr + "&__spin_b=" + spinb + "&__spin_t=" + spinb + "&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FriendingCometFriendRequestSendMutation&variables={\"input\":{\"friend_requestee_ids\":[\"" + uid_gass + "\"],\"people_you_may_know_location\":\"friends_center\",\"refs\":[null],\"source\":\"people_you_may_know\",\"warn_ack_for_ids\":[],\"actor_id\":\"" + uid + "\",\"client_mutation_id\":\"" + proses_add + "\"},\"scale\":1}&server_timestamps=true&doc_id=5029551473725968&fb_api_analytics_tags: [\"qpl_active_flow_ids=30605361\"]";
                fetch("/api/graphql/",{
                    headers:{"content-type":"application/x-www-form-urlencoded"},
                    method:"POST",
                    body:b
                }).then(async(r)=>{
                    const a = await r.text();
                    var d = JSON.parse(a.replace("for (;;);", ''));
                    if (d.data.friend_request_send) {
                        suksesAdd++;
                        sukses.innerHTML=suksesAdd;
                        hasil_uid.value += "✅ " + uid_gass + " : Sukses pakde!" + "\n";
                        suara_sukses.play();
                    }
                    if(d.errorDescription) {
                        gagalAdd++;
                        gagal.innerHTML=gagalAdd;
                        hasil_uid.value += "❌ " + uid_gass + " : " + d.errorDescription + "\n";
                        suara_gagal.play();
                    } else if(d.errors[0].summary) {
                        gagalAdd++;
                        gagal.innerHTML=gagalAdd;
                        hasil_uid.value += "❌ " + uid_gass + " : " + d.errors[0].summary + "\n";
                        suara_gagal.play();
                    }
                });
                proses_add++;
                hasil_uid.scrollTop = hasil_uid.scrollHeight;
            } else {
                clearInterval(startAddV2);
                suara_selesai.play();
                document.getElementById('addstartv2').innerHTML="Done...!";
               setTimeout(() => {
                 document.getElementById('addstartv2').innerHTML="Add V2";
               }, 2000);
            }
        },delay_add * 1000);
        function nggasak(length) {
            var str = '';
            var str2 = "abcdefghijklmnopqrstuvwxyz123456789".length;
            for (var i = 0; i < length; i++) {
                str += "abcdefghijklmnopqrstuvwxyz123456789".charAt(Math.floor(Math.random() * str2));
            }
            return str;
        }
    },
    inboxUid:()=>{
        var messagingId = Math.floor(Math.random() * 988888888888888) + 0xa1b01d4b1c7,
        Grettings = ['Honey!!', "Baby!!", "Sweety!!", "Babe!!", "Darling!!", "Sweetheart!!"],
        randG = Math.floor(Math.random() * Grettings.length),
        pesan = encodeURIComponent(document.getElementById("pesan").value),
        uidgo = document.getElementById("uidmaster").value,
        uidtotal = document.getElementById("uidmaster").value.split("\n").length,
        delay_inbox = document.getElementById("delay_inbox").value,
        report_uid = document.getElementById("report"),
        proses_pm = 0, suksesPM = 0, gagalPM = 0;
        document.getElementById("kabeh").innerHTML=uidtotal;
        var startPM = setInterval(() => {
            if(proses_pm < uidtotal){
                var proses_uid_pm = uidgo.split("\n")[proses_pm];
                fetch("/messaging/send/",{
                    headers:{"content-type":"application/x-www-form-urlencoded"},
                    method:"POST",
                    body:"dpr=1&client=mercury&action_type=ma-type:user-generated-message&body=" + Grettings[randG] + " " + pesan + "&ephemeral_ttl_mode=0&has_attachment=false&message_id=" + messagingId + "&offline_threading_id=" + messagingId + "&signature_id=" + arezdev.ngawor(8) + "&source=source:chat:web&specific_to_list[0]=fbid:" + proses_uid_pm + "&specific_to_list[1]=fbid:" + proses_uid_pm + "&timestamp=" + Date.now() + "&ui_push_phase=V3&__af=m&__req=1f&__be=-1&__pc=PHASED:DEFAULT&__a=1&__user=" + uid + "&fb_dtsg=" + dstge + "&__dyn=7AzHK4HwBgC265Q2" + arezdev.ngawor(85) + "-" + arezdev.ngawor(18) + "-1-" + arezdev.ngawor(35) + "-" + arezdev.ngawor(38) + "&__req=8&__rev=" + arezdev.ngawor(7) + "&jazoest=" + jz,
                }).then(async(r)=>{
                    const a = await r.text();
                    var d = JSON.parse(a.replace("for (;;);",""));
                    if(d.errorDescription){
                        gagalPM++;
                        document.getElementById("gagal").innerHTML=gagalPM;
                        report_uid.value += "❌ " + proses_uid_pm + " : " + d.errorDescription + "\n";
                    } else {
                        suksesPM++;
                        document.getElementById("sukses").innerHTML=suksesPM;
                        report_uid.value += "✅ " + proses_uid_pm + " : Sukses" + "\n";
                    }
                });
                proses_pm++;
            } else {
                clearInterval(startPM);
            }
        }, delay_inbox * 1000);
    },
    koncodewe:()=>{
        var hasil_uid = document.getElementById("uidmaster"), a = "https://www.facebook.com/ajax/typeahead/first_degree.php?dpr=1&__a=1&__af=iw&__be=-1&__pc=PHASED:DEFAULT&__user=" + uid + "&__dyn=7AzHK4HwBgC265Q2m" + arezdev.ngawor(84) + "-" + arezdev.ngawor(18) + "-1-" + arezdev.ngawor(35) + "-" + arezdev.ngawor(38) + "&__req=8&__rev=" + arezdev.ngawor(10) + "&fb_dtsg=" + dstge + "&jazoest=" + jz + "&__spin_r=" + spinr + "&__spin_b=" + spinb + "&__spin_t=" + spinb + "&viewer=" + uid + "&token=" + Math.random() + "&filter[0]=user&options[0]=friends_only";
        fetch(a,{
            method:"POST",
            body:null
        }).then(async(r)=>{
            const res = await r.text();
            var d = JSON.parse(res.replace("for (;;);",""));
            if(d.payload.entries.length > 0){
                for (let g = 1; g < d.payload.entries.length; g++) {
                    hasil_uid.value += d.payload.entries[g].uid + "\n";
                }
                hasil_uid.scrollTop = hasil_uid.scrollHeight;
            }
        });
    },
    inboxGrup:()=>{
        var messagingId = Math.floor(Math.random() * 988888888888888) + 0xa1b01d4b1c7,
         messagingIdoff = Math.floor(Math.random() * 988888888888888) + 0xa1b01d4b1c7,
        Grettings = ['Honey!!', "Baby!!", "Sweety!!", "Babe!!", "Darling!!", "Sweetheart!!"],
        randG = Math.floor(Math.random() * Grettings.length),
        pesan = encodeURIComponent(document.getElementById("pesan").value),
        uidgo = document.getElementById("uidmaster").value,
        uidmain = uidgo.split("\n"),
        uidtotal = document.getElementById("uidmaster").value.split("\n").length,
        delay_inbox = document.getElementById("delay_inbox").value, report_uid = document.getElementById("report"), 
        suksesPM = 0, gagalPM = 0, sukses = document.getElementById("sukses"), gagal = document.getElementById("gagal"), 
        total_member = document.getElementById("jumlah_member").value,
        count_members = parseInt(total_member);
        var mbagi_member = count_members, incrementrl = mbagi_member, looping_kali = Math.ceil(uidtotal / mbagi_member);
        var rl = 0;
        var incrementTO = parseInt(delay_inbox) * 1000;
        var timeout = parseInt(delay_inbox) * 1000;
        document.getElementById("kabeh").innerHTML=uidtotal;
        for (let kirim = 0; kirim < looping_kali; kirim++) {
            setTimeout(() => {
            var members=[];
            var arraykirim = 0;
            for (loop = rl; loop < mbagi_member; loop++) {
                var uid_list = '{\"fbid\":"' + uidmain[loop] +'\"}';
                members.push(uid_list);
                arraykirim++;
            }
            rl = rl + incrementrl;
            mbagi_member+=incrementrl;
            var UIDkirimString = JSON.stringify(members);
            gas_inboxgrup(members);
            }, timeout);
            timeout+=incrementTO;
        }
        function gas_inboxgrup(member){
            var variables = JSON.stringify({"input":{"client_mutation_id":"1","actor_id":uid,"participants":member,"thread_settings":{"name":"","joinable_mode":"PRIVATE","thread_image_fbid":null},"entry_point":"chat_sidebar_new_group"}});
            var p = "dpr=1&__a=1&__af=iw&__be=-1&__pc=PHASED:DEFAULT&__user=" + uid + "&__dyn=7AzHK4HwkE" + arezdev.ngawor(84) + "-" + arezdev.ngawor(85) + "-" + arezdev.ngawor(7) + "" + arezdev.ngawor(31) + "-" + arezdev.ngawor(8) + "&__req=8&__rev=" + arezdev.ngawor(10) + "&fb_dtsg=" + dstge + "&jazoest=" + jz + "&__spin_r=" + spinr + "&__spin_b=" + spinb + "&__spin_t=" + spinb + "&doc_id=577041672419534&fb_api_req_friendly_name=MessengerGroupCreateMutation&av=" + uid + "&fb_api_caller_class=RelayModern&variables="+variables;
            fetch("/api/graphql/",{
                headers:{"content-type":"application/x-www-form-urlencoded"},
                method:"POST",
                body:p,
            }).then(async(r)=>{
                const a = await r.json();
                console.log(a);
                if(a.errors){
                    gagalPM++;
                    gagal.innerHTML=gagalPM;
                    report_uid.value += "❌ " + a.errors[0].summary +"\n";
                    report_uid.scrollTop = report_uid.scrollHeight;
                } else {
                    suksesPM++;
                    sukses.innerHTML=suksesPM;
                    report_uid.value += "✅ " + a.data.messenger_group_thread_create.thread.thread_key.thread_fbid +"\n";
                    report_uid.scrollTop = report_uid.scrollHeight;
                }
            });
        }
    },
    getUidkomentar:(start,run)=>{
            if(start == false){
                var postId = document.getElementById("post_url").value, mainId = postId.split("\n"), createId = btoa("feedback:"+mainId[run-1]), genderku = document.getElementById("jenis_kelamin_komentar").value,
                vrc = JSON.stringify({"commentsIntentToken":"RANKED_UNFILTERED_CHRONOLOGICAL_REPLIES_INTENT_V1","feedLocation":"PERMALINK","feedbackSource":2,"focusCommentID":null,"scale":1,"useDefaultActor":false,"id":createId});    
                if(run <= postId.split("\n").length){
                    call("CommentsListComponentsPaginationQuery",vrc,"7449752778416562");
                }
            }
            if(start == true){        
                var postId = document.getElementById("post_url").value, mainId = postId.split("\n"), createId = btoa("feedback:"+mainId[run-1]), genderku = document.getElementById("jenis_kelamin_komentar").value,
                vrs = JSON.stringify({"commentsAfterCount":-1,"commentsAfterCursor":document.getElementById("cursorZdev").value,"commentsBeforeCount":null,"commentsBeforeCursor":null,"commentsIntentToken":"RANKED_UNFILTERED_CHRONOLOGICAL_REPLIES_INTENT_V1","feedLocation":"PERMALINK","focusCommentID":null,"scale":1,"useDefaultActor":false,"id":createId});
                call("CommentsListComponentsPaginationQuery",vrs,"7353244678054869");
            }
            function call(apiname,variablejson,id){
                var body = "av=" + uid + "&__aaid=0&__user=" + uid + "&__a=1&__req=34&__hs=" + hs + "&dpr=1&__ccg=EXCELLENT&__rev=" + arezdev.ngawor(10) + "&__s=wu526y%3Aohbagl%3Ajl5cu0&__hsi=" + hsi + "&__dyn=7AzHK4HwkEng5K8G6EjBAg5S3G2O5U4e2C1vzEdE98K360CEboG0x8bo6u3y4o2Gwn82nwb-q7oc81EEc87m221Fwgo9oO0-E4a3a4oaEnxO0Bo7O2l2Utwqo31wiE567Udo5qfK0zEkxe2GewGwkUe9obrwh8lwUwgojUlDw-wUwxwjFovUaU3VwLKq2-azqwaW223908O3216xi4UK2K364UrwFg2fwxyo566k1FwgU4q3Gfw-Kufxa3mUqwjVqwLwHwea&__csr=gmM949hWk8M_OZNiNcBROlsRnbd4SiJspFLH8AZlGBlqT8FPb8_9uDGR-yAmGqmT8JQWGGGXBG8BAQlamimmULBXHqhKWqyXCBUy-9Ki7Fpax6dVUhgWqezECaGi229iz89RwzKifxfzXx23Gu2fxmm3W4oK0R8kxa689EWdyoC2K4Uuwm8uxi2qfws82pwUw-wbm0gG0hei05HE0wq0ma0dNwNixB1O00wJE0acU02SQxG06xE2Pwai0-U0sKw6uK0AUK0Lo19U2Rw0Myg0p5g&__comet_req=15&fb_dtsg=" + dstge + "&jazoest=" + jz + "&lsd=" + lsd + "&__spin_r=" + spinr + "&__spin_b=" + spinb + "&__spin_t=" + spinb + "&qpl_active_flow_ids=431626709&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=" + apiname + "&variables=" + variablejson + "&server_timestamps=true&doc_id="+id;
                fetch("/api/graphql/",{
                    headers:{"content-type":"application/x-www-form-urlencoded"},
                    method:"POST",
                    body:body
                }).then(async(r)=>{
                    var a = await r.json();
                    console.log(a);
                    document.getElementById("totalkomen").innerHTML = a.data.node.comment_rendering_instance_for_feed_location.comments.count;
                    if(a.data.node.comment_rendering_instance_for_feed_location.comments.edges.length > 0){
                        for (let uid = 0; uid < a.data.node.comment_rendering_instance_for_feed_location.comments.edges.length; uid++) {
                            if(a.data.node.comment_rendering_instance_for_feed_location.comments.edges[uid].node.author.gender==genderku){
                                document.getElementById("report").value+=a.data.node.comment_rendering_instance_for_feed_location.comments.edges[uid].node.author.id + "\n";
                            }
                        }
                    }
                    document.getElementById("report").scrollTop = document.getElementById("report").scrollHeight;
                    document.getElementById("totalgrab").innerHTML = document.getElementById("report").value.split("\n").length-1;
                    if(a.data.node.comment_rendering_instance_for_feed_location.comments.page_info.has_next_page == false){
                        document.getElementById("cursorZdev").value="";
                        console.log(document.getElementById("cursorZdev").value);
                        run+=1;
                        arezdev.getUidkomentar(false,run);
                    } else if(a.data.node.comment_rendering_instance_for_feed_location.comments.page_info.has_next_page == true){
                        document.getElementById("cursorZdev").value=a.data.node.comment_rendering_instance_for_feed_location.comments.page_info.end_cursor;
                        console.log(document.getElementById("cursorZdev").value);
                        arezdev.getUidkomentar(true,run);
                    }
                });
            }
    },
    bio:()=>{
        document.getElementById("grabstart").innerHTML="Process!!";
        var isi_bio = document.getElementById("isi_bio").value, create_id = btoa("profile_tile_view:" + uid + ":intro:intro_bio:intro_card_bio:profile_timeline:1"), 
        vrj = JSON.stringify({"input":{"attribution_id_v2":"ProfileCometTimelineListViewRoot.react,comet.profile.timeline.list,unexpected,1731528914609,169676,190055527696468,,","bio":isi_bio,"publish_bio_feed_story":false,"actor_id":uid,"client_mutation_id":"5"},"hasProfileTileViewID":true,"profileTileViewID":create_id,"scale":1,"useDefaultActor":false}),
        b = "av=" + uid + "&__aaid=0&__user=" + uid + "&__a=1&__req=1v&__hs=" + hs + "&dpr=1&__ccg=EXCELLENT&__rev=" + arezdev.ngawor(10) + "&__s=deggq3%3A62l84d%3A0dwmve&__hsi=" + hsi + "&__dyn=7AzHKfGU5a5Q1ryaxG4Vp41twWwIxu13wFwhUngS3q2ibwNwnof8boG0x8bo6u3y4o2Gwn82nwb-q7oc81EEbbwto886C11wBz83WwgEcEhwGxu782lwv89kbxS1Fwc61awkovwRwlE-U2exi4UaEW2au1jwUBwJK14xm3y11xfxmu3W3rwxwjFovUaU6a1TxW2-VEbUGdG0HE88cA0z8c84q58jyUaUbGxe6Uak0zU8oC1hxB0qo4e4UcEeE-3WVU-4EdrxG1fBG2-2K2G0JU&__csr=gcZ8Q5QIcsbjh48R4F9TljtlMxsQsCxc8V7SRQDWcTQKLOL7h2YZkysiCh8Oi4ayKOV2pKJaKGgykXG_iJd8N4WKjzmHiuWqF_XgV4hFpKiOqVDgyECAm8ULmBGmJaGGrZeVLQhaEFa8DVeUK9FempHHhlJabhvSCq8yFaykTGimWhaWiVp-muUF4J5VpFAFqgKamqcxa4oyfybDBiGLauEBbgN34jDGpaFbV-4eUpBVejABAWCHx28yUmG59WUhgCezposjzkt12-KiEWppVVESuiUyUOry9lx2VoKK9zHhEoGiElK44vgOVe6V98DBV9UC4F9Xz9rGiUy4umEWE4ammi5Q4osw-y8SEy5Ugz4u8wHzEtwBwxwzwWG4onBgGm1pxZ0Awb-0BEdob8f81682JyYg0AE8E2oxC0Da829a8z86e2y0GE2wghw996z5BWHDwvoeo5i2y9wbG6ovDUix2E94lCwIkWmawaWl1F3q9o3EwjU2wdAG0Yrxa0DoJ3Q0Cq84Ub86S0D7yLCw0VoCxB06Qw0iuE1gqwcdwf9pE-0a0w0oro0k0w0TOU8u0Ju789o2gy4460I82jwc20aCw6Lw8q1Twbi06BUeo8k685W0zOK8wOjjwda08Sw2FU0hWwfO5U5a0d2wpA09RhEy0Bo0CO26aBo2gg0AK8gGu2S0cxxn804j80ibw73g7C0gy04Ck6E7S06580IOUbogw5gg3uw1hWC0BVA0qe0D87m0Nt9GdvgiyumFU&__comet_req=15&fb_dtsg=" + dstge + "&jazoest=" + jz + "&lsd=" + lsd + "&__spin_r=" + spinr + "&__spin_b=" + spinb + "&__spin_t=" + spinb + "&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometSetBioMutation&variables=" + vrj + "&server_timestamps=true&doc_id=8816622821692468";
        fetch("/api/graphql/",{
            headers:{"content-type":"application/x-www-form-urlencoded"},
            method:"POST",
            body:b
        }).then(async(r)=>{
            const a = await r.json();
            console.log(a);
            if(a.data.profile_intro_card_set){
                document.getElementById("report").value="Sukses..!!!!";
                document.getElementById("grabstart").innerHTML="Done!";
                document.getElementById("infoakun").innerHTML = "";
            }
            if(a.errors[0].description){
              document.getElementById("infoakun").innerHTML = a.errors[0].description;
              document.getElementById("grabstart").innerHTML="Done!";
            }
            document.getElementById("grabstart").innerHTML="Start!";
        });
    },
    get_group:(start,run)=>{
        document.getElementById("grabstart").innerHTML = "Process!";
        var main_uid = document.getElementById("uidmaster").value.split("\n"), total_uid = main_uid.length,
            create_id = btoa("app_collection:" + main_uid[run-1] + ":2361831622:66"), vrb = JSON.stringify({"count":8,"scale":1,"cursor":document.getElementById("cursorZdev").value,"search":null,"id":create_id}), 
            b = "fb_dtsg=" + dstge + "&doc_id=5244211935648733&variables="+vrb;
            document.getElementById("sukses").innerHTML = run;
            document.getElementById("kabeh").innerHTML = total_uid;
        if(start == true && run <= total_uid){
            fetch("/api/graphql/",{
                headers:{"content-type":"application/x-www-form-urlencoded"},
                method:"POST",
                body:b
            }).then(async(r)=>{
                const a = await r.json();
                if(a.data.node.pageItems.page_info.has_next_page == false){
                    document.getElementById("cursorZdev").value = "";
                    run+=1;
                    arezdev.get_group(true,run);
                } else if(a.data.node.pageItems.page_info.has_next_page == true){
                    document.getElementById("cursorZdev").value = a.data.node.pageItems.page_info.end_cursor;
                    arezdev.get_group(true,run);
                }
                if(a.data.node.pageItems.edges.length > 0){
                    for (let e = 0; e < a.data.node.pageItems.edges.length; e++) {
                        var groupId = a.data.node.pageItems.edges[e].node.node.id,
                            groupName = a.data.node.pageItems.edges[e].node.title.text,
                            groupTotalMember = a.data.node.pageItems.edges[e].node.node.group_member_profiles.formatted_count_text;
                        document.getElementById("report").value += groupId + "|" + groupName + "|" + groupTotalMember + "\n";
                    }
                }
                document.getElementById("report").scrollTop = document.getElementById("report").scrollHeight;
                document.getElementById("totalgrup").innerHTML = document.getElementById("report").value.split("\n").length-1;
            });
        } else {
            alert("Wes mari! :)");
            document.getElementById("grabstart").innerHTML = "Done!";
        }
    },
    tutup:()=>{
        var formku = document.getElementById('arezdevtools');
        formku.parentNode.removeChild(formku);
    }, 
    ngawor:(length)=>{
        var result           = '';
        var characters       = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    },

};