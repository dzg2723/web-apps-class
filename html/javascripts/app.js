var main = function () { 
       "use strict"; 
	$(".comment-input button").on("click", function (event) {
		var $user_input = $(".comment-input input").val()
	 	var $new_comment = $("<p>").text($user_input);
		$(".comments").append($new_comment);
	});
}; 
$(document).ready(main);
