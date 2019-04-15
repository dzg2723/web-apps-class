var main = function() {

	//Trigger on form submit
	$('form').submit(function(event) {

		//Create a Login Object (it has to have a .name and .password)
		//We can access $("#idname").val() from the DOM	 to initialize the Object
		login = {"name": $("#myname").val(), "password":$("#mypass").val()}
		console.log(login);

		//Clear the success and throw_error divs
		$("div.throw_error").empty()
		$("#success").empty()

		$.ajax({								//Process the form using jquery $.ajax()
			Type	:'POST',					//Method type
			url		:'login.php',				//php that will handle POST request
			//data: {name: $("#myname").val()}	//this is a possibility also OR next line obj
			data	:login,						//obj is previously created object
			dataType:'json',
			success	:function(data){
						if (!data.success) {
							if (data.errors.name) {
								$('.throw_error').fadeIn(1000).html(data.errors.name);
							}
						}
						else {
							$('#success').fadeIn(1000).append('<p>'+data.posted+'<p>');
						}
					}
		});
		event.preventDefault();		//Prevent the default submit
	});
	
}
$(document).ready(main);
