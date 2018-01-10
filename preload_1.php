<?php
//echo 'done';
require "db.php";
$user = $_SESSION['logged_user'];
		$picture = R::find('object','user_id=?', array($user['id']) );
			$var = array();
			foreach ($picture as $key => $value) {
				$str = unserialize($value['tag'] );
				$img = $value['image'];
			
				$arr = array('name' => $img,
		 											'tag'=>$str,

		 											);
				array_push($var,$arr);
				
		 				
		 					
			}
			$json = json_encode($var);
			print_r($json);
		//$json = json_encode($result);
		 				

/*				foreach ($picture['id']->{'tag'} as $key => $value){
					$result = array('name' => $values,
		 											'file'=>$key,
		 									);
				}
$json = json_encode($result);
		//$value = json_encode($picture);
		//$x = unserialize($value);
		print_r($json);*/
		//foreach ($picture['id']['tag'] as $key => $value) {
			

		
		
?>