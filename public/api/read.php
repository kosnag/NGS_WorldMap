<?php
include "mysql.php";
header('Content-Type: application/json; charset=utf-8');

$read=array();
$length=0;
$table=array();

$datatable = $_GET["table"];
$query = $mysql->query("select * from ".$datatable."");

while($data=$query->fetch_assoc()){
    $table[$length]=array(
        'id' => null,
        'lat' => null,
        'lng' => null,
        'contributer' => null,
        'string' => null
    );
    if(isset($data["id"])){
        $table[$length]["id"] = $data["id"];
    };
    if(isset($data["lat"])){
        $table[$length]["lat"] = $data["lat"];
    };
    if(isset($data["lng"])){
        $table[$length]["lng"] = $data["lng"];
    };
    if(isset($data["contributer"])){
        $table[$length]["contributer"] = $data["contributer"];
    };
    if(isset($data["string"])){
        $table[$length]["string"] = $data["string"];
    };
    $length++;
}
$mysql->close();
$response=$table;

echo json_encode($response);