<?php
if (!isset($_COOKIE['session'])) {
    header('WWW-Authenticate: Basic realm="A"');
    header('HTTP/1.0 401 Unauthorized');


    echo header('Location: https://map.pso2.ru/');
    ;

    exit;
} else {
    echo '<!DOCTYPE html>
    <html>
        <head>
            <title>PSO2NGS Interactive Map | MAPPING MODE</title>
            <meta charset="utf-8"/>
            <meta name="image" content="https://map.pso2.ru/favicon.ico">
            <meta itemprop="image" content="https://map.pso2.ru/favicon.ico">
        </head>
        <body>
            <ngsmap-mapping>
    
            </ngsmap-mapping>
        </body>
    </html>';
}
?>