<?php
include "mysql.php";

$data = json_decode(file_get_contents("php://input"));

$result = array(
    "status" => null,
    "username" => null,
    "session" => null
);


$query = $mysql -> query("select * from ".$datatables["auth"]["users"]." where id='".$data->{"user"}."' and pass='".$data->{"pass"}."'");

$login_data = $query -> fetch_assoc();


if(isset($login_data["id"]) && isset($login_data["pass"])){

    $session = md5(uniqid(rand(),true));
    $query = $mysql -> query("insert ".$datatables["auth"]["sessions"]." (id, session) values ('".$login_data["id"]."', '".$session."')");

    setcookie("session", $session, time()+60*60*24, "/");

    $result["username"] = $login_data["id"];
    $result["session"] = $session;
    $result["status"] = "success";
} else {
    $result["status"] = "error";
}

$mysql -> close();

echo json_encode($result);