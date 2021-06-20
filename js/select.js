$(document).ready(function(){
    $("#select-en").hover(function(){
        $("#select-title").text("PSO2NGS Interactive Map");
        $("#select-lang").text("Choose a language");
    });
    $("#select-jp").hover(function(){
        $("#select-title").text("PSO2NGS相互マップ");
        $("#select-lang").text("言語を選択する");
    });
    $("#select-ru").hover(function(){
        $("#select-title").text("Интерактивная карта PSO2NGS");
        $("#select-lang").text("Выберите язык");
    });
    $("#select-kr").hover(function(){
        $("#select-title" ).text("PSO2NGS 인터랙티브지도");
        $("#select-lang" ).text("언어 선택");
    });
    $("#select-pt").hover(function(){
        $("#select-title").text("Mapa Interactivo PSO2NGS");
        $("#select-lang").text("Escolha uma língua");
    });
});

function change_lang(lang){
    var d = new Date();
    d.setTime(d.getTime() + (24*60*60*365*10));
    var expires = d.toUTCString();
    document.cookie = "lang="+lang+"; expires = "+expires+"";
    location.href="/";
}

$(document).ready(function(){
    if (Cookies.get('lang') == 'en_gl') {
        $("#lang_js").attr("src", "js/lang_packs/en_gl.js");
    } else if (Cookies.get('lang') == 'en_al') {
        $("#lang_js").attr("src", "js/lang_packs/en_al.js");
    } else if (Cookies.get('lang') == 'jp') {
        $("#lang_js").attr("src", "js/lang_packs/jp.js");
    } else if (Cookies.get('lang') == 'ru') {
        $("#lang_js").attr("src", "js/lang_packs/ru.js");
    } else if (Cookies.get('lang') == 'kr') {
        $("#lang_js").attr("src", "js/lang_packs/kr.js");
    } else if (Cookies.get('lang') == 'pt') {
        $("#lang_js").attr("src", "js/lang_packs/pt.js");
    } else {
        alert('NO COOKIE FOUND'); // i think how to realize loading of "select.html"
    };
});