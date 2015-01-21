$(document).ready(function() {
	//Check to see if an item is entered in textbox
	$('.add-item-btn').click(function() {
	//If it isn't, alert user
		if($('.item').val().trim().length == 0){
			$('.error').show();
			$('.add-item-btn').val();
		} //If it is, add item to list
		else {
			$('.list').append('<li class="unchecked"><div class="checkbox"></div>' + $(".item").val() + '</li>');
			$('.item').val("");
			$('.error').hide();
		}

	})

});