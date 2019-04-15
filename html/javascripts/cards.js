var main = function() {

	$.getJSON("cards/aceOfSpades.json", function(cards) {
		console.log(cards);
	});

}
$(document).ready(main);
