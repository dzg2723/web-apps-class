<?php
	$num_one = $_POST["first"];
	$num_two = $_POST["second"];
	$operation = $_POST["group1"];
	//echo "Inputs are ". $num_one. " and ". $num_two. " and ". $operation;


	if ($num_one == '' or $num_two == '') {
		echo 'Please enter in two values.';
	}
	else if ($operation == "add") {
		echo $num_one + $num_two;
	}
	else if ($operation == "subtract") {
		echo $num_one - $num_two;
	}
	else if ($operation == "times") {
		echo $num_one * $num_two;
	}	
	else if ($operation == "divide") {
		if ($num_two == 0) {
			echo "Cannot divide by zero!";
		}
		else {
			echo $num_one / $num_two;
		}
	}

?>
