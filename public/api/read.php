<?php
include "mysql.php";
header('Content-Type: application/json; charset=utf-8');


if ($_GET["table"]){
    $datatable = $_GET["table"];

    $return = [];

    FillArrayByTable($return, $datatable);

    echo json_encode($return);
}

if ($_GET["multi"]){
    $return = [];

    $tableList = explode("|", $_GET["multi"]);

    $Index = 0;
    foreach ($tableList as $table) {
        if (trim($table) == "")
            continue;

        FillArrayByTable($return[$Index], $table);

        $Index++;
    }

    echo json_encode($return);
}


function FillArrayByTable(&$array, $table)
{
    global  $PDO;

    $BannedWords = ["insert", "delete", "alter", "drop", "update"];

    $table = strip_tags($table);
    $table = trim($table);
    $table = preg_replace("/[^A-Za-z0-9_]/", '', $table);
    $table = strtolower($table);

    if (contains($table, $BannedWords))
        return;

    $stmt = $PDO->prepare("SELECT * FROM " . $table);
    $stmt->execute();
    $Data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($Data as $info) {

        $array[] = [
            "id" => $info["id"],
            "lat" => $info["lat"],
            "lng" => $info["lng"],
            "contributer" => $info["contributer"],
            "string" => $info["string"]
        ];
    }
}

function contains($str, array $arr)
{
    foreach($arr as $a) {
        if (stripos($str,$a) !== false) return true;
    }
    return false;
}