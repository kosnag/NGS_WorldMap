<?
$lang = null;

if( $_COOKIE["lang"] !== null || $_GET["lang"] !== null ){
    if( $_COOKIE["lang"] !== null ){
        $lang = $_COOKIE["lang"];
    }
    if( $_GET["lang"] !== null )
        if($_GET["lang"] === "en_gl"){
            setcookie("lang","en_gl",time()+60*60*24*30*12*10,"/");
            $lang = "en_gl";
        }else if($_GET["lang"] === "en_al"){
            setcookie("lang","en_al",time()+60*60*24*30*12*10,"/");
            $lang = "en_al";
        }else if($_GET["lang"] === "jp"){
            setcookie("lang","jp",time()+60*60*24*30*12*10,"/");
            $lang = "jp";
        }else if($_GET["lang"] === "ru"){
            setcookie("lang","ru",time()+60*60*24*30*12*10,"/");
            $lang = "ru";
        }else if($_GET["lang"] === "kr"){
            setcookie("lang","kr",time()+60*60*24*30*12*10,"/");
            $lang = "kr";
        }
}
if( $lang !== null )
require_once "map.php";
else

require_once "select.php";
?>