$(document).ready(function() {
	
	//Add item to list if Add Item button is pressed
	$('.add-item-btn').click(function() {
		add_item();
	})
	//Add item to list when enter key is pressed
	$('.item').keyup(function(e) {
		if (e.keyCode == 13)
			add_item();
	})

	//Check or uncheck item
	$('ul.list').on('click', '.checkbox', function() {
		$(this).parent().toggleClass('unchecked checked');
		if ($('ul.list').children().hasClass('checked')) {
			$('.del-checked-items-btn').css('background-color', 'rgb(223, 74, 12)');
			} else{
				$('.del-checked-items-btn').css('background-color', '#DFDFDF');
			};
	})
	//Delete Item from list
	//Add Delete Button
	$('ul.list').on('mouseenter', 'li', function() {
		$(this).append('<button class="remove-item-btn">Delete</button>');
	})
	//Remove Delete Button
	$('ul.list').on('mouseleave', 'li', function() {
		$('.remove-item-btn').remove();
	})
	//Remove list item and change color of "Deleted All Checked Items" Button
	$('ul.list').on('click', '.remove-item-btn', function() {
		$(this).parent().remove();
		if($('ul.list').children().length==0 || !$('ul.list').children().hasClass('checked')){
			$('.del-checked-items-btn').css('background-color', '#DFDFDF');
		}
			console.log($('ul.list').children().length);
		
	})
	//Delete All Checked Items
	$('.del-checked-items-btn').click(function() {
		$('.del-checked-items-btn').css('background-color', '#DFDFDF');
		$('li.checked').remove();
	})
	//Check to see if an item is entered in textbox
	function add_item() {
		//If it isn't, alert user
		if($('.item').val().trim().length == 0){
			$('.error').show();
			$('.add-item-btn').val();
		} //If it is, add item to list
		else {
			$('.list').append('<li class="unchecked"><div class="checkbox"></div>' + $(".item").val().toLowerCase() + '</li>');
			$('.item').val("");
			$('.error').hide();
		}

		//Sort Items
		var listItems = $('.list li').get();
		listItems.sort(function(a,b){
			var x = $(a).text();
			var y = $(b).text();

			return x < y ? -1 : x > y ? 1 : 0;
		});
		$.each(listItems, function(index, li) {
		$('.list').append(li);
		})
	}

});
