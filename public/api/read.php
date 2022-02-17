<?php
include "mysql.php";
header('Content-Type: application/json; charset=utf-8');

$read=array();
$length=0;

$datatable = $_GET["table"];
$query = $mysql->query("select * from ".$datatable."");

while($data=$query->fetch_assoc()){
    $table[$length]=array(
        'id' => $data["id"],
        'lat' => $data["lat"],
        'lng' => $data["lng"],
        'contributer' => $data["contributer"],
        'string' => null,
        'reward' => null
    );
    if(isset($data["string"])){
        $table[$length]["string"] = $data["string"];
    };
    if(isset($data["reward"])){
        $table[$length]["reward"] = $data["reward"];
    };
    $length++;
}
$mysql->close();
$response=$table;

echo json_encode($response);