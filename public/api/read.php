<?php
include "mysql.php";
header('Content-Type: application/json; charset=utf-8');

$read=array();
$length=0;
$table=array();

if ($_GET["table"]){
    $datatable = $_GET["table"];
    $query = $mysql->query("select * from ".$datatable.";");
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
        } else {
            unset($table[$length]["id"]);
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
        } else {
            unset($table[$length]["string"]);
        };
        $length++;
    }
    $mysql->close();
    $response=$table;
	echo json_encode($response);
}

if ($_GET["multi"]){
    $str_arr = explode("|", $_GET["multi"]);
    $sql = "";
    for($i=0; $i<count($str_arr); $i++){
        $sql .= "select * from ".$str_arr[$i].";";
    }
    $response=array();
	$mysql->multi_query($sql);
	do {if ($result = $mysql->store_result()) {
		$response[$length] = $result->fetch_all(MYSQLI_ASSOC);
		$result->free();
		$length++;
	}} while ($mysql->next_result());
	$mysql -> close();
	echo json_encode($response);
}