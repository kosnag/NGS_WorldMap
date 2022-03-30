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
    $query = $mysql -> query("select ".$datatables["auth"]["users"].".id from ".$datatables["auth"]["users"]." inner join ".$datatables["auth"]["sessions"]." on ".$datatables["auth"]["users"].".id=".$datatables["auth"]["sessions"].".id where session='".$_COOKIE["session"]."'");
    $user = $query -> fetch_assoc();

    $result["table"] = $data->{"table"};
    $result["lat"] = $data->{"lat"};
    $result["lng"] = $data->{"lng"};
    $result["contributer"] = $user["id"];
    if(isset($data->{"string"}) && (
        $result["table"]=="other__veteran" || $result["table"]=="other__musicplace" || $result["table"]=="other__datapod" || $result["table"]=="landmark__ryuker" || $result["table"]=="other__stellargrace" || $result["table"]=="landmark__mag"
    )){
        $result["string"] = $data->{"string"};
        $mysql -> query("insert into ".$result["table"]." (lat, lng, contributer, string) values ('".$result["lat"]."','".$result["lng"]."','".$result["contributer"]."','".$result["string"]."')");
    }elseif(isset($data->{"string"}) && (
        $result["table"]=="other__alphareactor" || $result["table"]=="mineral__photonscale"
    )){
        $mysql -> query("insert into ".$result["table"]." (lat, lng, contributer) values ('".$result["lat"]."','".$result["lng"]."', 'Aphy')");
    }else{
        $mysql -> query("insert into ".$result["table"]." (lat, lng, contributer) values ('".$result["lat"]."','".$result["lng"]."','".$result["contributer"]."')");
    }
}

$mysql -> close();

echo json_encode($result);