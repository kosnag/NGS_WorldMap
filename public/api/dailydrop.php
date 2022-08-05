<?php
include "mysql.php";

switch ($_GET["DELETED"]){
    case "DELETED":
        $stmt = $PDO->prepare("DELETE FROM other__alphareactor");
        $stmt->execute();
        break;
    default:
        header("Location: /");
}