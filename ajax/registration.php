<?php

        require "db.php";

       // $data = $_POST;
       // if (isset($data['do'])){

       // }*/
 header('Content-type: text/html; charset=utf-8')
$mysqli = new Mysqli('localhost','root', '', 'tiscon_db');
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$password = trim($_POST['password']);
if($name && $email && $password){
		$query = $mysqli->query("INSERT INTO 'users' VALUES(NULL, '$name', '$email', '$password')");
}
/*$user = R::dispense('users');
$user->login = 'sdsd';
$user->email = $data[$email];
$user->password = $data[$password];
R::store($user);*/
?>

$email = $data['email'];
$password = trim($data['password']);
$name = $php_json['name'];
$user = R::dispense('users');
$user->login = $name;
$user->email = $email;
$user->password = 'sdfsdf';
R::store($user);