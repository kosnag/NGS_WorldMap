<?php
include "mysql.php";

//$response=array();
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
        'text' => null,
        'type' => null
    );
    if(isset($data["text"])){
        $table[$length]["text"] = $data["text"];
    };
    if(isset($data["type"])){
        $table[$length]["type"] = $data["type"];
    };
    $length++;
}
$mysql->close();
$response=$table;

echo json_encode($response);