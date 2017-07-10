<?php 
	include "common.php";
	$user = $_GET['user'];
	$pass = $_GET['pass'];

	$sql = "SELECT * FROM users WHERE user='{$user}' AND pass = '{$pass}'";
	mysql_query($sql);
	if(mysql_query($sql)){
		session_start();
		$_SESSION['user'] = $user;
	}
	if(mysql_affected_rows()>0){
		
		$data['status'] = 1;
	}else{
		$data['status'] = 2;
	}
	echo json_encode($data);
	
 ?>