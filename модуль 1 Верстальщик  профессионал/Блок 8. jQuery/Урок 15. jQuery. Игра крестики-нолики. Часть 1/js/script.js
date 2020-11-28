jQuery(function($){

	var player_x = $('#player_1').val();
	var player_o = $('#player_2').val();
	

	$('.start .button').on('click', function(event){
		event.preventDefault();
alert(player_x);
		
	});

	var player = 'x';

	$('.wrap').on('click', ".cell:not('.cell-x, .cell-o')", oneStep);

	function oneStep(event){
		var $cell = $(event.currentTarget);

		$cell.addClass('cell-' + player + ' offset-' + player);

		if(player === 'x') player = 'o';
		else player = 'x';
	}

});

