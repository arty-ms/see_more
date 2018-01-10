<?php
//echo 'done';
require "db.php";
$output = '';
ini_set('display_errors',1);
error_reporting(E_ALL);
if (isset($_FILES['file']['name'])){
	$values = $_FILES['file']['name'];

	if(move_uploaded_file($_FILES['file']['tmp_name'], 'upload/' . $values)){
		$output .= '<img src="upload/'.$values.'" width="150" height="150" />';
		$_FILES['file']['tmp_name'] = 'upload/' . $values;
		 $result = array('name' => $values,
		 									'file'=>$_FILES,
		 													);
		 $json = json_encode($result);
		
	}
}
print_r($json);

/* ($_FILES['file']['name'] != ''){

	echo '$_FILES';}*/

/*oreach ($_FILES[0] as $keys => $values){
		echo 'sasdf';
	}
}*/
/*	$_FILES['file']['name'] as $keys => $values 
		

		if(move_uploaded_file($_FILES['file']['tmp_name'][$keys], 'upload/' . $values)){
			
			$output .= '<img src="upload/'.$values.'" width="150" height="150" />';
		}
	}
}
echo $output;*/
?>