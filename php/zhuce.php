<?php 
	include "common.php";
	$user = $_POST['user'];
	$pass = $_POST['pass'];

	$sqls = "SELECT * FROM users WHERE user='{$user}'";
	$res = mysql_query($sqls);
	$userArr = array();

	while($row = mysql_fetch_assoc($res)){
		array_push($userArr, $row);
	}
	$bol = true;
	foreach ($userArr as $value) {
		if($user == $value['user']){
			$bol = false;
			echo '{"error":"1"}';
			break;
		}
	}

	if($bol==true){  //如果不重复,执行添加
		$sql = "INSERT INTO users (id,user,pass) VALUES (NULL,'{$user}','{$pass}')";
		mysql_query($sql);
		echo '{"error":"0"}';
    }


 ?>