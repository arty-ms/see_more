<?php

require "db.php";

        //$data = $_POST;
        //if (isset($data['do'])){

        //}
//$mysqli = new Mysqli('localhost','root', '', 'tiscon_db');
$email = htmlspecialchars($_POST['email']);
$password = htmlspecialchars($_POST['password']);
//$name = htmlspecialchars($_POST['name']);
if (email == '' || password == ''){
		echo 'Some field is clear';
} 
$user = R::findOne('users', 'email=?', array($email));
if ($user){
	if (password_verify($password, $user->password)){
		$_SESSION['logged_user'] = $user;	}
	else{
		echo 'No such user';

	}
}
else{
	echo 'No such user';

}
/*	echo User with that name exists
	exit
}
if (R::count('users', "email = ?", array($email)) > 1){
	echo User with that email exists
	exit
}
$user = R::dispense('users');
$user->login = $name;
$user->email = $email;
$user->password = password_hash($password,PASSWORD_DEFAULT);
R::store($user);		
*/
?>