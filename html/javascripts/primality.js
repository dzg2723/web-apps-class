var main = function() {
	console.log(checkPrimality(151));
};

var checkPrimality = function(number) {
	for (i = 2; i < Math.sqrt(number); i++) {
		remainder = number % i;
		if (remainder == 0) {
			console.log(i)
			return ("Not Prime");		
		};
	};
	return ("Is Prime");
};
//$(document).ready(main);
