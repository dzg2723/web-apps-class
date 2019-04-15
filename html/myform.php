<?php
	if($_POST['name'] != '') {
		$myname = $_POST["name"];
		$myemail = $_POST["email"];
		echo "Your name is ". $myname. " and your address is ".$myemail;
	} else {
		echo "How am I supposed to answer if you do not fill me?";
	}
?>
