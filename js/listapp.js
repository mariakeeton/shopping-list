$(document).ready(function() {
	add_item();
	check_item();
	remove_item();
	
});
//Check to see if an item is entered in textbox
function add_item() {
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
		
}
function check_item() {
	$('ul.list').on('click', '.checkbox', function() {
			$(this).parent().toggleClass('unchecked checked');
	})
}
function remove_item() {
	$('ul.list').on('mouseenter', 'li', function() {
			$(this).append('<button class="remove-item-btn">Remove</button>');
	})
	$('ul.list').on('mouseleave', 'li', function() {
			$('.remove-item-btn').remove();
	})
}