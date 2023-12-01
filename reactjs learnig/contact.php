<?php 
$mysqli = mysqli_connect('localhost','root','root@123','demos');
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
print_r($_POST);
?>