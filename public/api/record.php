<?php
include "mysql.php";

$data = json_decode(file_get_contents("php://input"));

$result = array(
    "table" => null,
    "lat" => null,
    "lng" => null,
    "contributer" => null,
    "string" => null
);

if(isset($_COOKIE["session"])){
    $query = $mysql -> query("select auth__users.id from auth__users inner join auth__sessions on auth__users.id=auth__sessions.id where session='".$_COOKIE["session"]."'");
    $user = $query -> fetch_assoc();

    $result["table"] = $data->{"table"};
    $result["lat"] = $data->{"lat"};
    $result["lng"] = $data->{"lng"};
    $result["contributer"] = $user["id"];
    if(isset($data->{"string"}) && (
        $result["table"]=="other__veteran" || $result["table"]=="other__musicPlace" || $result["table"]=="other__datapod" || $result["table"]=="landmarks__ryukers" || $result["table"]=="other__stellarGrace" || $result["table"]=="landmarks__mags"
    )){
        $result["string"] = $data->{"string"};
        $mysql -> query("insert into ".$result["table"]." (lat, lng, contributer, string) values ('".$result["lat"]."','".$result["lng"]."','".$result["contributer"]."','".$result["string"]."')");
    }elseif(isset($data->{"string"}) && ($result["table"]=="containers__redBox")){
        $result["string"] = $data->{"string"};
        $mysql -> query("insert into ".$result["table"]." (lat, lng, contributer, reward) values ('".$result["lat"]."','".$result["lng"]."','".$result["contributer"]."','".$result["string"]."')");
    }else{
        $mysql -> query("insert into ".$result["table"]." (lat, lng, contributer) values ('".$result["lat"]."','".$result["lng"]."','".$result["contributer"]."')");
    }
}

$mysql -> close();

echo json_encode($result);