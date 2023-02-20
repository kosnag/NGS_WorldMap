<?php
include "mysql.php";

$data = json_decode(file_get_contents("php://input"));

$result = array(
    "status" => null,
    "username" => null,
    "session" => null
);


$stmt = $PDO->prepare("SELECT * FROM auth__users WHERE id = :username AND pass = :pass");
$stmt->execute(["username" => $data->{"user"}, "pass" => $data->{"pass"}]);
$User = $stmt->fetch();

if (!$User) {
    $result["status"] = "error";
} else {

    $Session = md5(uniqid(rand(), true));

    $stmt = $PDO->prepare("INSERT INTO auth__sessions (id, session) VALUES (:user, :session)");
    $stmt->execute(["user" => $User["id"], "session" => $Session]);

    setcookie("session", $Session, time() + 60 * 60 * 24 * 7, "/");

    $result["username"] = $User["id"];
    $result["session"] = $Session;
    $result["status"] = "success";

}

echo json_encode($result);