<?php
//echo 'done';
require "db.php";
$user = $_SESSION['logged_user'];
		$picture = R::find('object','user_id=?', array($user['id']) );
		$x = json_encode($picture);
		print_r($x);

?>