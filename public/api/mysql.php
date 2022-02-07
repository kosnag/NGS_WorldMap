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