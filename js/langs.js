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












$(document).ready(function(){$('#Cocoon1').text(language.Cocoon);});
$(document).ready(function(){$('#Cocoon2').text(language.Cocoon);});
$(document).ready(function(){$('#Cocoon3').text(language.Cocoon);});
$(document).ready(function(){$('#Cocoon4').text(language.Cocoon);});
$(document).ready(function(){$('#Cocoon5').text(language.Cocoon);});
$(document).ready(function(){$('#Cocoon6').text(language.Cocoon);});
$(document).ready(function(){$('#Cocoon7').text(language.Cocoon);});
$(document).ready(function(){$('#Cocoon8').text(language.Cocoon);});
$(document).ready(function(){$('#Cocoon9').text(language.Cocoon);});
$(document).ready(function(){$('#Cocoon10').text(language.Cocoon);});
$(document).ready(function(){$('#Cocoon11').text(language.Cocoon);});
$(document).ready(function(){$('#Cocoon12').text(language.Cocoon);});
$(document).ready(function(){$('#Cocoon13').text(language.Cocoon);});
$(document).ready(function(){$('#Cocoon14').text(language.Cocoon);});
$(document).ready(function(){$('#Cocoon15').text(language.Cocoon);});

$(document).ready(function(){$('#Mag1').text(language.Mag1);});

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




$(document).ready(function(){$('#').text(language.);});
$(document).ready(function(){$('#').text(language.);});
$(document).ready(function(){$('#').text(language.);});
