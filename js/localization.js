// LOCALIZATION FILES
/* */

function change_lang(lang){
    var d = new Date();
    d.setTime(d.getTime() + (24*60*60*365*10));
    var expires = d.toUTCString();
    document.cookie = "lang="+lang+"; expires = "+expires+"";
    location.href="/";
}

if (Cookies.get('lang') == 'en_gl') {
    alert('COOKIE EN_GL');
} else if (Cookies.get('lang') == 'en_al') {
    alert('COOKIE EN AL');
} else if (Cookies.get('lang') == 'jp') {
    alert('COOKIE JP');
} else if (Cookies.get('lang') == 'ru') {
    alert('COOKIE RU');
} else if (Cookies.get('lang') == 'kr') {
    alert('COOKIE KR');
} else if (Cookies.get('lang') == 'pt') {
    alert('COOKIE PT');
} else {
    alert('NO COOKIE FOUND');
}