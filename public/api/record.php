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


if (isset($_COOKIE["session"])) {
    $stmt = $PDO->prepare("SELECT auth__users.* FROM auth__users INNER JOIN auth__sessions ON auth__users.id = auth__sessions.id WHERE auth__sessions.session = :session");
    $stmt->execute(["session" => $_COOKIE["session"]]);
    $User = $stmt->fetch();

    if ($User) {
        $result["table"] = $data->{"table"};
        $result["lat"] = $data->{"lat"};
        $result["lng"] = $data->{"lng"};
        $result["contributer"] = ucfirst($User["id"]);

        if (isset($data->{"string"}) && (
                $result["table"] == "other__veteran" ||
                $result["table"] == "other__musicplace" ||
                $result["table"] == "other__datapod" ||
                $result["table"] == "landmark__ryuker" ||
                $result["table"] == "other__stellargrace" ||
                $result["table"] == "landmark__mag"
            )) {
            $result["string"] = $data->{"string"};

            $stmt = $PDO->prepare("INSERT INTO " . $result["table"] . " (lat, lng, contributer, string) VALUES (:lat, :lng, :cont, :string)");
            $stmt->execute(["lat" => $result["lat"], "lng" => $result["lng"], "cont" => $result["contributer"], "string" => $result["string"]]);
        } else {
            $stmt = $PDO->prepare("INSERT INTO " . $result["table"] . " (lat, lng, contributer, string) VALUES (:lat, :lng, :cont, :str)");
            $stmt->execute(["lat" => $result["lat"], "lng" => $result["lng"], "cont" => $result["contributer"], "str" => ""]);
        }

    }
}


echo json_encode($result);