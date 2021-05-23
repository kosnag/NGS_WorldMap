var language; 
function getLanguage() {
	(localStorage.getItem('language') == null) ? setLanguage('en') : false;
	$.ajax({ 
		url:  'json/langs/' +  localStorage.getItem('language') + '.json', 
		dataType: 'json', async: false, dataType: 'json', 
		success: function (lang) { language = lang } 
	});
}
function setLanguage(lang) {
	localStorage.setItem('language', lang);
}



$(document).ready(function(){$('#credits').text(language.UI.credits);});
$(document).ready(function(){$('#langs').text(language.UI.langs);});
$(document).ready(function(){$('#sorting-title').text(language.UI.sorting.title);});
$(document).ready(function(){$('#sorting-1').text(language.UI.sorting.1);});
$(document).ready(function(){$('#sorting-2').text(language.UI.sorting.2);});
$(document).ready(function(){$('#sorting-3').text(language.UI.sorting.3);});
$(document).ready(function(){$('#sorting-4').text(language.UI.sorting.4);});
$(document).ready(function(){$('#sorting-5').text(language.UI.sorting.5);});
$(document).ready(function(){$('#sorting-6').text(language.UI.sorting.6);});
$(document).ready(function(){$('#sorting-7').text(language.UI.sorting.7);});

$(document).ready(function(){$('#Cocoon1').text(language.Cocoon.1);});
$(document).ready(function(){$('#Cocoon2').text(language.Cocoon.2);});
$(document).ready(function(){$('#Cocoon3').text(language.Cocoon.3);});
$(document).ready(function(){$('#Cocoon4').text(language.Cocoon.4);});
$(document).ready(function(){$('#Cocoon5').text(language.Cocoon.5);});
$(document).ready(function(){$('#Cocoon6').text(language.Cocoon.6);});
$(document).ready(function(){$('#Cocoon7').text(language.Cocoon.7);});
$(document).ready(function(){$('#Cocoon8').text(language.Cocoon.8);});
$(document).ready(function(){$('#Cocoon9').text(language.Cocoon.9);});
$(document).ready(function(){$('#Cocoon10').text(language.Cocoon.10);});
$(document).ready(function(){$('#Cocoon11').text(language.Cocoon.11);});
$(document).ready(function(){$('#Cocoon12').text(language.Cocoon.12);});
$(document).ready(function(){$('#Cocoon13').text(language.Cocoon.13);});
$(document).ready(function(){$('#Cocoon14').text(language.Cocoon.14);});
$(document).ready(function(){$('#Cocoon15').text(language.Cocoon.15);});

$(document).ready(function(){$('#Mag1').text(language.Mag.1);});
$(document).ready(function(){$('#Mag2').text(language.Mag.2);});
$(document).ready(function(){$('#Mag3').text(language.Mag.3);});
$(document).ready(function(){$('#Mag4').text(language.Mag.4);});

$(document).ready(function(){$('#Ryuker1').text(language.Ryuker.1);});
$(document).ready(function(){$('#Ryuker2').text(language.Ryuker.2);});
$(document).ready(function(){$('#Ryuker3').text(language.Ryuker.3);});
$(document).ready(function(){$('#Ryuker4').text(language.Ryuker.4);});
$(document).ready(function(){$('#Ryuker5').text(language.Ryuker.5);});
$(document).ready(function(){$('#Ryuker6').text(language.Ryuker.6);});
$(document).ready(function(){$('#Ryuker7').text(language.Ryuker.7);});
$(document).ready(function(){$('#Ryuker8').text(language.Ryuker.8);});
$(document).ready(function(){$('#Ryuker9').text(language.Ryuker.9);});
$(document).ready(function(){$('#Ryuker10').text(language.Ryuker.10);});
$(document).ready(function(){$('#Ryuker11').text(language.Ryuker.11);});
$(document).ready(function(){$('#Ryuker12').text(language.Ryuker.12);});
$(document).ready(function(){$('#Ryuker13').text(language.Ryuker.13);});
$(document).ready(function(){$('#Ryuker14').text(language.Ryuker.14);});
$(document).ready(function(){$('#Ryuker15').text(language.Ryuker.15);});
$(document).ready(function(){$('#Ryuker16').text(language.Ryuker.16);});
$(document).ready(function(){$('#Ryuker17').text(language.Ryuker.17);});
$(document).ready(function(){$('#Ryuker18').text(language.Ryuker.18);});
$(document).ready(function(){$('#Ryuker19').text(language.Ryuker.19);});
$(document).ready(function(){$('#Ryuker20').text(language.Ryuker.20);});

$(document).ready(function(){$('#Tower1').text(language.Tower.1);});
$(document).ready(function(){$('#Tower2').text(language.Tower.2);});
$(document).ready(function(){$('#Tower3').text(language.Tower.3);});
$(document).ready(function(){$('#Tower4').text(language.Tower.4);});
$(document).ready(function(){$('#Tower5').text(language.Tower.5);});
$(document).ready(function(){$('#Tower6').text(language.Tower.6);});
$(document).ready(function(){$('#Tower7').text(language.Tower.7);});

$(document).ready(function(){$('#City1').text(language.City.1);});
$(document).ready(function(){$('#City2').text(language.City.2);});
$(document).ready(function(){$('#City3').text(language.City.3);});
$(document).ready(function(){$('#City4').text(language.City.4);});
$(document).ready(function(){$('#City5').text(language.City.5);});

$(document).ready(function(){$('#Hut1').text(language.Hut.1);});
$(document).ready(function(){$('#Hut2').text(language.Hut.2);});
$(document).ready(function(){$('#Hut3').text(language.Hut.3);});
$(document).ready(function(){$('#Hut4').text(language.Hut.4);});

$(document).ready(function(){$('#Urgent1').text(language.Urgent.1);});
$(document).ready(function(){$('#Urgent2').text(language.Urgent.2);});
$(document).ready(function(){$('#Urgent3').text(language.Urgent.3);});
$(document).ready(function(){$('#Urgent4').text(language.Urgent.4);});
$(document).ready(function(){$('#Urgent5').text(language.Urgent.5);});

$(document).ready(function(){$('#Dungeon1').text(language.Dungeon.1);});
$(document).ready(function(){$('#Dungeon2').text(language.Dungeon.2);});
$(document).ready(function(){$('#Dungeon3').text(language.Dungeon.3);});
$(document).ready(function(){$('#Dungeon4').text(language.Dungeon.4);});
$(document).ready(function(){$('#Dungeon5').text(language.Dungeon.5);});

