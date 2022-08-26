<?php
include "../api/mysql.php";

if(isset($_COOKIE["session"])){
	$stmt = $PDO -> query("select session from kosnag_map.auth__sessions where session='".$_COOKIE["session"]."' ");
	$session_check = $stmt -> fetch(PDO::FETCH_ASSOC);
	$stmt = $PDO -> query("select auth__sessions.id,session from kosnag_map.auth__sessions inner join kosnag_map.auth__users on kosnag_map.auth__sessions.id=kosnag_map.auth__users.id where session='".$_COOKIE["session"]."' ");
	$session_data = $stmt -> fetch(PDO::FETCH_ASSOC);
	include "edit/index.php";
}else{
	include "auth/index.html";
}
