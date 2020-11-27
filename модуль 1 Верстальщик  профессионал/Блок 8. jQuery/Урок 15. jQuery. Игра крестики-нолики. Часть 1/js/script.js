jQuery(function($){

	var player = 'x';

	$('.wrap').on('click', ".cell:not('.cell-x, .cell-o')", oneStep);

	function oneStep(event){
		var $cell = $(event.currentTarget);

		$cell.addClass('cell-' + player + ' offset-' + player);

		if(player === 'x') player = 'o';
		else player = 'x';
	}

});

