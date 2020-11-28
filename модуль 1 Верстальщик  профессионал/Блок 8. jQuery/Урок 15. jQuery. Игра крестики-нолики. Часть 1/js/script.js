jQuery(function($){
	var player_1;
	var player_2;
	
	$('.start #submit').on('click',function(event){
		event.preventDefault();
		//if($('input[type="text"]').val() === '')
		player_1 = document.getElementById('player-1').value;
		player_2 = document.getElementById('player-2').value;
		if(player_1 == '') player_1 = 'comp';
		if(player_2 == '') player_2 = 'comp';
		if(player_1 == 'comp' && player_2 == 'comp'){
			if(!$('.start p').hasClass('error')){
				$('.start').append('<p class="error">ЗАПОЛНИТЕ ПОЛЯ НИЖЕ</p>');
				$('input[type="text"]').css('border', '1px solid red');
			}
			$('input[type="text"]').focus(function(){
				$('.start p ').remove('.error');
				$('input[type="text"]').css('border', '1px solid grey');
			});
		}
		else {
			$('.start').fadeOut(300);
			$('.wrap').fadeIn(300);
			$('.rivals').text(player_1+' VS '+player_2);
			alert('Первый ходит игрок X - '+player_1);
		}
	})
	var player = 'x';
	$('.wrap').on('click','.cell:not("cell-x, cell-o")', function oneStep(event){
		var $cell = $(event.currentTarget);
		$cell.addClass('cell-'+player+' offset-'+player);
		if(player === 'x'){
			player = 'o';			
		} 
		else{
			player = 'x';
		} 
	});

});

