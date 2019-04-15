var main = function() {
	//"use strict"

	var toDos = ["study jquery",
				"watch Captin Marvel",
				"finish all assignments",
				"answer all emails",
				"cook spaghetti",
				"change the world"];

	$content = $("<ul>");
	for (i=toDos.length-1; i >= 0; i--) {
		$content.append($("<li>").text(toDos[i]));
	}
	$("main .content").append($content);

	//event handler for when first tab is clicked
	$(".tabs a:nth-child(1)").on("click", function() {
		
		//make all the tabs inactive
		$(".tabs span").removeClass("active");

		//make the first tab active
		$(".tabs a:nth-child(1) span").addClass("active");

		//empty the main content so we can recreate it
		$("main .content").empty();

		//do something with the data..

		$content = $("<ul>");
		for (i=toDos.length-1; i >= 0; i--) {
			$content.append($("<li>").text(toDos[i]));
		}
		$("main .content").append($content);


		//return false so we don't follow the link
		return false;
	});

	//event handler for when second tab is clicked
	$(".tabs a:nth-child(2)").on("click", function() {
		
		//make all the tabs inactive
		$(".tabs span").removeClass("active");

		//make the second tab active
		$(".tabs a:nth-child(2) span").addClass("active");

		//empty the main content so we can recreate it
		$("main .content").empty();

		//do something with the data..

		$content = $("<ul>");
		for (i=0; i<toDos.length; i++) {
			$content.append($("<li>").text(toDos[i]));
		}
		$("main .content").append($content);

		//return false so we don't follow the link
		return false;
	});

	//event handler for when third tab is clicked
	$(".tabs a:nth-child(3)").on("click", function() {
		
		//make all the tabs inactive
		$(".tabs span").removeClass("active");

		//make the third tab active
		$(".tabs a:nth-child(3) span").addClass("active");

		//empty the main content so we can recreate it
		$("main .content").empty();

		//do something with the data..

		//input a new to-do
		$input = $("<input>"),
		$button = $("<button>").text("+");

		$button.on("click", function() {
			if ($input.val() !== "") {
				//push it to the array
				toDos.push($input.val());
				$input.val("");
			}
		});
		$content = $("<div>").append($input).append($button);
		$("main .content").append($content);

		//return false so we don't follow the link
		return false;
	});
};
$(document).ready(main);
