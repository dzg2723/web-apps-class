var main = function() {
	
	//Are these variables global?

	$input = $("<input>");
	$button = $("<button>").text("Search");
	$("body .input").append($input).append($button);

	$button.on("click", function() {
		searchImages();
	});
	
	$input.on("keypress", function(event) {
		console.log(event);

		if (event.key == "Enter") {
			searchImages();
		}
	});
		

}

var searchImages = function() {
		if ($input.val() != "") {

			var $link = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + $input.val() + "&format=json&jsoncallback=?"

			//clear the images currently on the webpage
			$("div.myphotos").empty();

			$.getJSON($link, function(flickrResponse){

				flickrResponse.items.forEach(function(photo) {
					console.log(photo);

					//create a new jQuery element to hold the images
					var $img = $("<img>");

					//set the attribute to the url contained in the response
					$img.attr("src", photo.media.m);			

					//attach the img tag to a container in the main using .append
					$("div.myphotos").append($img);
				

				});
			});
		}
}
$(document).ready(main);
