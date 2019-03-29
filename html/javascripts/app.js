var main = function () { 
       "use strict"; 

	//Runs if post button is clicked
	$(".comment-input button.post").on("click", function (event) {
		addCommentFromInputBox();
	});
	
	//Runs if user presses any key
	$(".comment-input input").on("keypress", function(event) {
		console.log(event.keyCode);

		//Checks if user presses Enter key
		if (event.keyCode == 13) {
			addCommentFromInputBox();
		}
	});

	//Runs if clear button is clicked
	$(".comment-input button.clear").on("click", function(event) {
		
		//Clear the input box
		//Code from https://stackoverflow.com/questions/3179249/clear-input-boxes-on-button-click-with-javascript
		document.getElementsByTagName("input")[0].value="";
	});

	//Runs if the Remove All button is clicked
	$(".comment-input button.remove").on("click", function(event) {
		//Removes all posts on the webpage
		$(".comments").empty()
	});
	
}; 

//Takes what the user wrote in the input box and displays it on the webpage.
var addCommentFromInputBox = function() {

	//Grabs text entered by user
	var $user_input = $(".comment-input input").val()

	//Check that the input box is not empty
	if ($user_input != "") {
	
		//Fade in user comment on webpage.
		var $new_comment = $("<p>").text($user_input);
		$new_comment.hide()
		$(".comments").append($new_comment);
		$new_comment.fadeIn();

		//Reset input box after post
		document.getElementsByTagName("input")[0].value="";

	} else {
		//Alert user that input box is empty.
		window.alert("Input box is empty!");
	}
};
$(document).ready(main);
