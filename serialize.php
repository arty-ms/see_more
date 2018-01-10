<?php
$rawData = file_get_contents('php://input');
$x = unserialize($rawData );
$y = json_encode($x);
print_r($y);
?>