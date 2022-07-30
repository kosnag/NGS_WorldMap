<?php
include "../api/mysql.php";

if(isset($_COOKIE["session"])){
    $stmt = $PDO->prepare("SELECT * FROM auth__sessions WHERE session = :session");
    $stmt->execute(["session" => $_COOKIE["session"]]);
    $Session = $stmt->fetch();

    if ($Session) {
        include "edit/index.php";
    } else {
        include "auth/index.html";
    }
}else{
    include "auth/index.html";
}
