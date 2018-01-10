<?php
require "db.php";
//echo 'done';

$output = '';

if (isset($_FILES['file']['name'])){
	
	foreach ($_FILES['file']['name'] as $keys => $values) {
		

		if(move_uploaded_file($_FILES['file']['tmp_name'][$keys], 'upload/' . $values)){
			$_FILES['file']['tmp_name'][$keys] = 'upload/' . $values;
			$result = array('name' => $values,
		 									'file'=>$_FILES,
		 									);
		 $json = json_encode($result);
		}
	}//'<img src="upload/'.$values.'" width="150" height="150" />'
}
print_r($json);
?>