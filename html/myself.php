<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head> 
<title>This is about me</title>		<!-- Sets the title displayed in the tab header -->
</head>
<body>
	
	
	<?php
	$myname = "Darren";
	printName($myname);

	function printName($myname) {

		print "Hello dear ".$myname;
	}
	?>

	<h1>Darren Good</h1>
	<img src='images/ironman_III.png'>
	<h2>Math and Computer Science Double major</h2> 	<!-- h1, h2, etc. make different sized text -->
	<h3>Will eventually go on a cross-country motorcycle tour</h3>
	<p>
	I am from Harrisonburg, Virginia and am currently attending EMU. I enjoy working on programming projects and
	spending time outside. My preferred website is <a href="http://www.stackexchange.com">Stackexchange</a>.
	</p>


</body>
</html>
