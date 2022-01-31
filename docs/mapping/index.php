<?php
include "../api/mysql.php";

if (isset($_COOKIE["session"])) {
	$query = $link->query("select auth_sessions.id,session from kosnag_map.auth_sessions inner join kosnag_map.auth_users on kosnag_map.auth_sessions.id=kosnag_map.auth_users.id where session='".$_COOKIE["session"]."' ");
	$session_data = $query->fetch_assoc();
	include "edit.php";
} else {
	include "auth.html";
}
?>