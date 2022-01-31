<?php
include_once "../api/mysql.php";

$data = json_decode(file_get_contents("php://input"));

$result = array(
    "status" => null,
    "username" => null,
    "session" => null
);


$query = $link->query("select * from auth_users where id='".$data->{"user"}."' and pass='".$data->{"pass"}."'");

$login_data = $query->fetch_assoc();


if(isset($login_data["id"]) && isset($login_data["pass"])){

    $session = md5(uniqid(rand(),true));
    $query = $link->query("insert auth_sessions (id, session) values ('".$login_data["id"]."', '".$session."')");

    setcookie("session", $session, time()+60*20, "/");

    $result["username"] = $login_data["id"];
    $result["session"] = $session;
    $result["status"] = "success";

} else {
    $result["status"] = "error";
    
}

$link -> close();

echo json_encode($result);

?>
