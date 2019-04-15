<?php

	$given_name = $_POST["name"]
	$given_pass = $_POST["password"]

	$errors = array();		//To store errors
	$form_data = array();	//Pass back the data to your webpage

	/* Validate the form on the server side */

	//if username is empty
	if ($given_name == "") {
	$form_data['success'] = false;
	$form_data['errors'] = 'Name cannot be blank';
	}

	//if username NOT empty:
	else {

		// 1) Get the name and password via POST and
		// 2) Check if the given name and password match with your server-stored ones
		if ($given_name == "darren" and $given_pass == "good") {
		$form_data['posted'] = 'Login is successful';
		$form_data['success'] = true;
		}

		//otherwise
		else {
		$form_data['success'] = true;
		$form_data['errors'] = 'Login is NOT successful';
		}
	}

	//Return the data back to form.php
	echo json_encode($form_data);
?>
