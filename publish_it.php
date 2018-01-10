<?php
require "db.php";


//var_dump(json_decode($json));
//$data = json_decode($_POST['jsonData']);
//$response = 'Получено параметров '.count($data).'\n';
//echo $response;
//$str = $_POST['name']
//$_POST = json_decode(file_get_contents('php://input'), true);
//var_dump(json_decode($_REQUEST['jsonData']));
$rawData = file_get_contents('php://input');
$data = json_decode($rawData);
//print_r($data->{'picture'}->{'file'}->{'name'});

// Проверяем пришел ли файл
if( !empty( $data->{'picture'}->{'file'}->{'name'} ) ) { 

	if (is_array($data->{'picture'}->{'file'}->{'name'})){
		
		if ( $data->{'picture'}->{'file'}->{'error'}[0] == 0 ) {
			

			if( substr($data->{'picture'}->{'file'}->{'type'}[0], 0, 5) =='image' ) {
					
			//	foreach ($data->{'picture'}->{'file'}->{'name'}[0] as $pic => $keys => $values)
				$data->{'picture'}->{'file'}->{'tmp_name'}[0] =  'upload/' . $data->{'picture'}->{'file'}->{'name'}[0];
			
				$name  = $data->{'name'}[0];
				$tag = serialize($data->{'tag'}[0]);
				$description = $data->{'description'}[0];
				$image = $data->{'picture'}->{'file'}->{'tmp_name'}[0];
				$user = $_SESSION['logged_user'];

				$object = R::dispense('object');
				$object->image = $image;
				$object->name = $name;
				$object->tag = $tag;
				$object->description = $description;
				$object->user = $user;
				R::store($object);
				echo $image;
				}
			}
		
		
	}
		if (is_string($data->{'picture'}->{'file'}->{'name'})){
		
		if ( $data->{'picture'}->{'file'}->{'error'} == 0 ) {
			
			if( substr($data->{'picture'}->{'file'}->{'type'}, 0, 5) =='image' ) {
			//	foreach ($data->{'picture'}->{'file'}->{'name'}[0] as $pic => $keys => $values)
			//	if(move_uploaded_file($data->{'picture'}->{'file'}->{'tmp_name'}[0], 'upload/' . ($data->{'picture'}->{'file'}->{'name'}[0]))){
				//	echo 'good';
		
				$image = $data->{'picture'}->{'file'}->{'tmp_name'};
				$name  = $data->{'name'};
				$tag = serialize($data->{'tag'});
				$description = $data->{'description'};
				$user = $_SESSION['logged_user'];

				$object = R::dispense('object');
				$object->image = $image;
				$object->name = $name;
				$object->tag = $tag;
				$object->user = $user;
				$object->description = $description;
				R::store($object);
				echo $image;
			}
		}
	}
}

 // if ( $data->{'picture'}->{'file'}->{'error'} == 0 ) {
  	//echo 'good';
     /* if( substr($data->{'picture'}->{'file'}->{'type'}, 0, 5)=='image' ) {
     	echo 'good';*/

     // $image = file_get_contents( $data->{'picture'}->{'file'}->{'tmp_name'} );

      /*$image = mysql_escape_string( $image );
      print_r($image);
     $object = R::dispense('object');
     $object->image = $image;
     R::store($object);*/
      // После чего остается только выполнить данный запрос к базе данных




//return $_POST['name'];
/*$name = htmlspecialchars($_POST['name']);
$object = R::dispense('object');
$object->name = $name;
R::store($object);*/	
/*$tag = htmlspecialchars($_POST['tag']);
$name = htmlspecialchars($_POST['name']);
$picture = htmlspecialchars($_POST['picture']);
print_r($picture);*/
?>