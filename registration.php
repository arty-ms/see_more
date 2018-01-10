<?php

require "db.php";

        //$data = $_POST;
        //if (isset($data['do'])){

        //}
//$mysqli = new Mysqli('localhost','root', '', 'tiscon_db');
$email = htmlspecialchars($_POST['email']);
$password = htmlspecialchars($_POST['password']);
$name = htmlspecialchars($_POST['name']);
if (R::count('users', "login = ?", array($name)) >= 1){
	echo 'user exists';
	die();
}
if (R::count('users', "email = ?", array($email)) >= 1){
	echo 'user exists';
	die();
}
$user = R::dispense('users');
$user->login = $name;
$user->email = $email;
$user->password = password_hash($password,PASSWORD_DEFAULT);
R::store($user);		
$_SESSION['logged_user'] = $user;
?>