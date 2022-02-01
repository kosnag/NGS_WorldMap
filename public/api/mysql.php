<?php
$datatables = array(
    "auth" => array(
        "users" => "auth__users",
        "sessions" => "auth__sessions"
    )
);

$mysql = mysqli_connect(
    "localhost",        // host
    "root",             // login
    "root",             // pass
    "kosnag_map"        // db
);

if (!$mysql) {
    printf("Невозможно подключиться к базе данных. Код ошибки: %s\n", mysqli_connect_error());
    exit;
}