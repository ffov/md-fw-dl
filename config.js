(function(){
    var s = window.location.search.substring(1).split('&');
    if(!s.length) return;
    window.$_GET = {};
    for(var i  = 0; i < s.length; i++){
      var parts = s[i].split('=');
      window.$_GET[unescape(parts[0])] = unescape(parts[1]);
    }
  }())

{
var SiteID;
var SiteShort;
var SiteName;
var SiteVersion;
switch ($_GET["site"]){
               case 'd01':{
			SiteID = "domaene01";
			SiteShort = "d01";
			SiteName ="Münster Stadt";
			SiteVersion ="0.1.2";
			           		break;                             
			}
               case 'd02':{
			SiteID = "domaene02";
			SiteShort = "d02";
			SiteName ="Kreis Coesfeld";
			SiteVersion ="0.0.3";
               		break;                             
			}
               case 'd03':{
			SiteID = "domaene03";
			SiteShort = "d03";
			SiteName ="Kreis Steinfurt West";
			SiteVersion ="0.0.1";
               		break;                             
			}
               case 'd04':{
			SiteID = "domaene04";
			SiteShort = "d04";
			SiteName ="Kreis Steinfurt Ost";
			SiteVersion ="0.0.2";
               		break;                             
			}
               case 'd05':{
			SiteID = "domaene05";
			SiteShort = "d05";
			SiteName ="Münster Süd";
			SiteVersion ="0.0.2";
               		break;                             
			}
               case 'd06':{
			SiteID = "domaene06";
			SiteShort = "d06";
			SiteName ="Westmünsterland";
			SiteVersion ="0.0.2";
			break;                             
			};

	       case 'd14':{
			SiteID = "domaene14";
			SiteShort = "d14";
			SiteName ="Warendorf";
			SiteVersion ="0.0.2";
			break;                             
			};

	       default:  {
			var SiteError = "True";
			alert("Leider konnten keine Angaben zur Domäne gefunden werden");
			window.location = "http://www.freifunk-wml.de/";
			};
            };

}

function LoadLogo(){
{
    	var image = document.getElementById('myImage');
        image.src = "img/" + SiteShort +".png";
    }
}
var config = {

globalversion: "2015.1.2",
version: SiteVersion,

modes: {
  "factory": "Erstinstallation (Neu gekaufter Router)",
  "sysupgrade": "Manuelles Update eines bestehenden Freifunk-Routers"
},

//router list for gluon v2015.1
manufacturers: {
  "0tp-link": {id: "tp-link", name: "TP-Link"},
  "1ubiquiti": {id: "ubiquiti", name: "Ubiquiti"},
  "2buffalo": {id: "buffalo", name: "Buffalo"},
  "3d-link": {id: "d-link", name: "D-Link"},
  "4gl-inet": {id: "gl-inet", name: "GL-Inet"},
  "5linksys": {id: "linksys", name: "Linksys"},
  "6netgear": {id: "netgear", name: "Netgear"},
  "7x86":{id:"x86",name:"x86"}
},

routers: {
 "buffalo-wzr-hp-ag300h-wzr-600dhp": { id: "buffalo-wzr-hp-ag300h-wzr-600dhp.bin", name: "WZR-600DHP", manufacturer: "Buffalo" },
 "buffalo-wzr-hp-g450h": { id: "buffalo-wzr-hp-g450h.bin", name: "WZR-HP-G450H", manufacturer: "Buffalo" },
 "d-link-dir-615-rev-c1": { id: "d-link-dir-615-rev-c1.bin", name: "615", manufacturer: "D-Link" },
 "d-link-dir-825-rev-b1": { id: "d-link-dir-825-rev-b1.bin", name: "825", manufacturer: "D-Link" },
 "gl-inet-6408a-v1": { id: "gl-inet-6408a-v1.bin", name: "6408A", manufacturer: "GL-Inet" },
 "gl-inet-6416a-v1": { id: "gl-inet-6416a-v1.bin", name: "6416A", manufacturer: "GL-Inet" },
 "linksys-wrt160nl": { id: "linksys-wrt160nl.bin", name: "WRT160NL", manufacturer: "Linksys" },
 "netgear-wndr3700": { id: "netgear-wndr3700.img", name: "WNDR3700 Ver:1", manufacturer: "Netgear" },
 "netgear-wndr3700v2": { id: "netgear-wndr3700v2.img", name: "WNDR3700 Ver:2", manufacturer: "Netgear" },
 "netgear-wndr3700v4": { id: "netgear-wndr3700v4.img", name: "WNDR3700 Ver:4", manufacturer: "Netgear" },
 "netgear-wndr3800": { id: "netgear-wndr3800.img", name: "WNDR3800 Ver:1", manufacturer: "Netgear" },
 "netgear-wndr4300": { id: "netgear-wndr4300.img", name: "WNDR4300 Ver:1", manufacturer: "Netgear" },
 "netgear-wndrmacv2": { id: "netgear-wndrmacv2.img", name: "WNDRMAC Ver:2", manufacturer: "Netgear" },
 "tp-link-cpe210-v1.0": { id: "tp-link-cpe210-v1.0.bin", name: "CPE210 Ver:1", manufacturer: "TP-Link" },
 "tp-link-cpe220-v1.0": { id: "tp-link-cpe220-v1.0.bin", name: "CPE220 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-mr3020-v1": { id: "tp-link-tl-mr3020-v1.bin", name: "TL-MR3020 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-mr3040-v1": { id: "tp-link-tl-mr3040-v1.bin", name: "TL-MR3040 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-mr3040-v2": { id: "tp-link-tl-mr3040-v2.bin", name: "TL-MR3040 Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-mr3220-v1": { id: "tp-link-tl-mr3220-v1.bin", name: "TL-MR3220 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-mr3220-v2": { id: "tp-link-tl-mr3220-v2.bin", name: "TL-MR3220 Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-mr3420-v1": { id: "tp-link-tl-mr3420-v1.bin", name: "TL-MR3420 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-mr3420-v2": { id: "tp-link-tl-mr3420-v2.bin", name: "TL-MR3420 Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wa701n-nd-v1": { id: "tp-link-tl-wa701n-nd-v1.bin", name: "TL-WA701N/ND", manufacturer: "TP-Link" },
 "tp-link-tl-wa750re-v1": { id: "tp-link-tl-wa750re-v1.bin", name: "TL-WA750RE Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wa801n-nd-v2": { id: "tp-link-tl-wa801n-nd-v2.bin", name: "TL-WA801N/ND Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wa830re-v1": { id: "tp-link-tl-wa830re-v1.bin", name: "TL-WA830Re Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wa850re-v1": { id: "tp-link-tl-wa850re-v1.bin", name: "TL-WA850RE Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wa860re-v1": { id: "tp-link-tl-wa860re-v1.bin", name: "TL-WA860RE Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wa901n-nd-v2": { id: "tp-link-tl-wa901n-nd-v2.bin", name: "TL-WA901N/ND Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wa901n-nd-v3": { id: "tp-link-tl-wa901n-nd-v3.bin", name: "TL-WA901N/ND Ver:3", manufacturer: "TP-Link" },
 "tp-link-tl-wdr3500-v1": { id: "tp-link-tl-wdr3500-v1.bin", name: "TL-WDR3500 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wdr3600-v1": { id: "tp-link-tl-wdr3600-v1.bin", name: "TL-WDR3600 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wdr4300-v1": { id: "tp-link-tl-wdr4300-v1.bin", name: "TL-WDR4300 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wdr4900-v1": { id: "tp-link-tl-wdr4900-v1.bin", name: "TL-WDR4900 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr703n-v1": { id: "tp-link-tl-wr703n-v1.bin", name: "TL-WR703N Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr710n-v1": { id: "tp-link-tl-wr710n-v1.bin", name: "TL-WR710N Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr740n-nd-v1": { id: "tp-link-tl-wr740n-nd-v1.bin", name: "TL-WR740N/ND Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr740n-nd-v3": { id: "tp-link-tl-wr740n-nd-v3.bin", name: "TL-WR740N/ND Ver:3", manufacturer: "TP-Link" },
 "tp-link-tl-wr740n-nd-v4": { id: "tp-link-tl-wr740n-nd-v4.bin", name: "TL-WR740N/ND Ver:4", manufacturer: "TP-Link" },
 "tp-link-tl-wr741n-nd-v1": { id: "tp-link-tl-wr741n-nd-v1.bin", name: "TL-WR741N/ND Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr741n-nd-v2": { id: "tp-link-tl-wr741n-nd-v2.bin", name: "TL-WR741N/ND Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wr741n-nd-v4": { id: "tp-link-tl-wr741n-nd-v4.bin", name: "TL-WR741N/ND Ver:4", manufacturer: "TP-Link" },
 "tp-link-tl-wr743n-nd-v1": { id: "tp-link-tl-wr743n-nd-v1.bin", name: "TL-WR743N/ND Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr743n-nd-v2": { id: "tp-link-tl-wr743n-nd-v2.bin", name: "TL-WR743N/ND Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wr841n-nd-v3": { id: "tp-link-tl-wr841n-nd-v3.bin", name: "TL-WR841N/ND Ver:3", manufacturer: "TP-Link" },
 "tp-link-tl-wr841n-nd-v5": { id: "tp-link-tl-wr841n-nd-v5.bin", name: "TL-WR841N/ND Ver:5", manufacturer: "TP-Link" },
 "tp-link-tl-wr841n-nd-v7": { id: "tp-link-tl-wr841n-nd-v7.bin", name: "TL-WR841N/ND Ver:7", manufacturer: "TP-Link" },
 "tp-link-tl-wr841n-nd-v8": { id: "tp-link-tl-wr841n-nd-v8.bin", name: "TL-WR841N/ND Ver:8", manufacturer: "TP-Link" },
 "tp-link-tl-wr841n-nd-v9": { id: "tp-link-tl-wr841n-nd-v9.bin", name: "TL-WR841N/ND Ver:9", manufacturer: "TP-Link" },
 "tp-link-tl-wr842n-nd-v1": { id: "tp-link-tl-wr842n-nd-v1.bin", name: "TL-WR842N/ND Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr842n-nd-v2": { id: "tp-link-tl-wr842n-nd-v2.bin", name: "TL-WR842N/ND Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wr941n-nd-v2": { id: "tp-link-tl-wr941n-nd-v2.bin", name: "TL-WR941N/ND Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wr941n-nd-v3": { id: "tp-link-tl-wr941n-nd-v3.bin", name: "TL-WR941N/ND Ver:3", manufacturer: "TP-Link" },
 "tp-link-tl-wr941n-nd-v4": { id: "tp-link-tl-wr941n-nd-v4.bin", name: "TL-WR941N/ND Ver:4", manufacturer: "TP-Link" },
 "tp-link-tl-wr941n-nd-v5": { id: "tp-link-tl-wr941n-nd-v5.bin", name: "TL-WR941N/ND Ver:5", manufacturer: "TP-Link" },
 "tp-link-tl-wr1043n-nd-v1": { id: "tp-link-tl-wr1043n-nd-v1.bin", name: "TL-WR1043N/ND Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr1043n-nd-v2": { id: "tp-link-tl-wr1043n-nd-v2.bin", name: "TL-WR1043N/ND Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wr2543n-nd-v1": { id: "tp-link-tl-wr2543n-nd-v1.bin", name: "TL-WR2543N/ND Ver:1", manufacturer: "TP-Link" },
 "ubiquiti-bullet-m":        { id: "ubiquiti-bullet-m.bin", name: "Bullet M", manufacturer: "Ubiquiti" },
 "ubiquiti-loco-m-xw":      { id: "ubiquiti-loco-m-xw.bin", name: "Loco M XW", manufacturer: "Ubiquiti" },
 "ubiquiti-nanostation-m-xw": { id: "ubiquiti-nanostation-m-xw.bin", name: "Nanostation M XW", manufacturer: "Ubiquiti" },
 "ubiquiti-nanostation-m": { id: "ubiquiti-nanostation-m.bin", name: "Nanostation M", manufacturer: "Ubiquiti" },
 "ubiquiti-picostation-m":{id:"ubiquiti-picostation-m.bin",name:"Picostation M",manufacturer:"Ubiquiti"},
 "ubiquiti-rocket-m":{id:"ubiquiti-rocket-m.bin",name:"Rocket M",manufacturer:"Ubiquiti"},
 "ubiquiti-unifi-ap-pro": { id: "ubiquiti-unifi-ap-pro.bin.bin", name: "UniFi AP Pro", manufacturer: "Ubiquiti" },
 "ubiquiti-unifi": { id: "ubiquiti-unifi.bin", name: "UniFi", manufacturer: "Ubiquiti" },
 "ubiquiti-unifiap-outdoor": { id: "ubiquiti-unifiap-outdoor.bin", name: "UniFi AP Outdoor", manufacturer: "Ubiquiti" },
 "x86-vmware":{id:"x86-vmware.vmdk",name:"vmware",manufacturer:"x86"},
 "x86-virtualbox":{id:"x86-virtualbox.vdi",name:"virtualbox",manufacturer:"x86"},
 "x86-kvm":{id:"x86-kvm.img.gz",name:"kvm",manufacturer:"x86"},
 "x86-generic":{id:"x86-generic.img.gz",name:"generic",manufacturer:"x86"},
},

name: SiteName,
error: SiteError,
url: "http://firmware.freifunk-muensterland.org/" + SiteID + "/stable/{{selectedMode}}/gluon-ffms" + SiteShort + "-v{{config.globalversion}}+" + SiteVersion + "-{{parse(selectedRouter).id}}{{selectedMode=='sysupgrade'?'-sysupgrade':''}}"

}

