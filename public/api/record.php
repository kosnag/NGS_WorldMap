<?php
include_once "/mysql.php";

$data = json_decode(file_get_contents("php://input"));

$result = array(
    "table" => null,
    "lat" => null,
    "lng" => null,
    "contributer" => null,
    "text" => null
);

if(isset($_COOKIE["session"])){
    $query = $mysql -> query("select ".$datatables["auth"]["users"].".id from ".$datatables["auth"]["users"]." inner join ".$datatables["auth"]["sessions"]." on ".$datatables["auth"]["users"].".id=".$datatables["auth"]["sessions"].".id where session='".$_COOKIE["session"]."'");
    $user_data = $query -> fetch_assoc();


    $result["table"] = $data->{"table"};
    $result["lat"] = $data->{"lat"};
    $result["lng"] = $data->{"lng"};
    $result["contributer"] = $user_data["id"];
    if(
        isset($data->{"text"}) && (
            $result["table"]=="other__veteran" || $result["table"]=="other__stellargrace" || $result["table"]=="other__musicplane" || $result["table"]=="other__datapod"
        )
    ){
        $result["text"] = $data->{"text"};
        $mysql -> query("insert ".$result["table"]." (lat, lng, contrubute, text) values (".$result["lat"].",".$result["lng"].",".$result["contributer"].",".$result["text"].")");
    } else {
        $mysql -> query("insert ".$result["table"]." (lat, lng, contrubute) values (".$result["lat"].",".$result["lng"].",".$result["contributer"].")");
    }
}

$mysql -> close();

echo json_encode($result);