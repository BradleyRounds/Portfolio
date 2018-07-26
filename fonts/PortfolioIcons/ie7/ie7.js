/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'PortfolioIcons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-creativecloud': '&#xe900;',
		'icon-AdobeAnimate': '&#xe901;',
		'icon-AdobeDreamweaver': '&#xe906;',
		'icon-AdobeFireworks': '&#xe909;',
		'icon-AdobeFlash': '&#xe90b;',
		'icon-AdobeIllustrator': '&#xe911;',
		'icon-AdobePhotoshop': '&#xe916;',
		'icon-microsoft': '&#xe946;',
		'icon-microsoft_office_word': '&#xe94e;',
		'icon-microsoft_office_excel': '&#xe94b;',
		'icon-microsoft_office_power_point': '&#xe94d;',
		'icon-microsoft_office_access': '&#xe94a;',
		'icon-microsoft_office_outlook': '&#xe94c;',
		'icon-orienteering': '&#xe919;',
		'icon-gaming': '&#xe91a;',
		'icon-hiking': '&#xe91b;',
		'icon-eventproduction': '&#xe91c;',
		'icon-Social_linkedin': '&#xe91d;',
		'icon-Social_facebook': '&#xe91f;',
		'icon-Social_instagram': '&#xe920;',
		'icon-Social_share': '&#xe921;',
		'icon-windows8': '&#xe922;',
		'icon-apple': '&#xe923;',
		'icon-linux': '&#xe924;',
		'icon-svn': '&#xe91e;',
		'icon-file': '&#xe925;',
		'icon-user': '&#xe926;',
		'icon-wifi': '&#xe927;',
		'icon-animal': '&#xe928;',
		'icon-bios': '&#xe929;',
		'icon-multipledevices': '&#xe92a;',
		'icon-mountain': '&#xe92f;',
		'icon-typeography': '&#xe931;',
		'icon-brush': '&#xe932;',
		'icon-sass': '&#xe933;',
		'icon-less': '&#xe934;',
		'icon-bootstrap': '&#xe935;',
		'icon-php': '&#xe93e;',
		'icon-javascript': '&#xe937;',
		'icon-jquery': '&#xe938;',
		'icon-ajax': '&#xe939;',
		'icon-angular': '&#xe93a;',
		'icon-jqueryUI': '&#xe93d;',
		'icon-python': '&#xe945;',
		'icon-mysql': '&#xe93f;',
		'icon-mongoDB': '&#xe950;',
		'icon-postgreSQL': '&#xe958;',
		'icon-Social_codepen': '&#xeae8;',
		'icon-Social_print': '&#xea68;',
		'icon-versioncontrol': '&#xe963;',
		'icon-git': '&#xeab0;',
		'icon-steam': '&#xeaac;',
		'icon-terminal': '&#xea81;',
		'icon-html5': '&#xeae4;',
		'icon-css3': '&#xeae6;',
		'icon-sql': '&#xe964;',
		'icon-dbms': '&#xe965;',
		'icon-IE': '&#xeadb;',
		'icon-edge': '&#xeadc;',
		'icon-firefox': '&#xeada;',
		'icon-chrome': '&#xead9;',
		'icon-opera': '&#xeade;',
		'icon-safari': '&#xeadd;',
		'icon-operatingsystem': '&#xe94f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
