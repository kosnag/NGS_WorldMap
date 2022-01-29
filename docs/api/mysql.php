<?php

$link = mysqli_connect(
    "localhost",        // host
    "root",             // login
    "root",             // pass
    "kosnag_map"        // db
);

if (!$link) {
    printf("Невозможно подключиться к базе данных. Код ошибки: %s\n", mysqli_connect_error());
    exit;
 }

mysqli_close($link);

?>