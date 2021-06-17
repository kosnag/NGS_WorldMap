// LOCALIZATION FILES
/* */

function change_lang(lang){
    var d = new Date();
    d.setTime(d.getTime() + (24*60*60*365*10));
    var expires = d.toUTCString();
    document.cookie = "lang="+lang+"; expires = "+expires+"; path=/";
    location.href="/";
}