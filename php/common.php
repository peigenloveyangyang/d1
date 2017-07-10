<?php 
	

	header("Content-type:text/html;charset=utf-8");

	  date_default_timezone_set("PRC");

	  mysql_connect("localhost","root","");

	  $as = mysql_select_db("book");

	  mysql_query("set names utf8");
 ?>