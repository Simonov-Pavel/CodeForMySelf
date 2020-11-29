jQuery(function($){
	var player_1;
	var player_2;
	var error = false;
	
	$('.start #submit').on('click',function(event){
		event.preventDefault();
		//if($('input[type="text"]').val() === '')
		player_1 = document.getElementById('player-1').value;
		player_2 = document.getElementById('player-2').value;
		if(player_1 == ''){
			error=true;
			if(!$('#player-1+span').hasClass('error')){
				$('#player-1').after(' <span class="error">Обязательное поле</span>');
				$('#player-1').css('border', '1px solid red');
			}
			$('#player-1').focus(function(){
				$('#player-1+span').remove('.error');
				$('#player-1').css('border', '1px solid grey');
				error = false;
			});
		}
		if(player_2 == ''){
			error=true;
			if(!$('#player-2+span').hasClass('error')){
				$('#player-2').after(' <span class="error">Обязательное поле</span>');
				$('#player-2').css('border', '1px solid red');
			}
			$('#player-2').focus(function(){
				$('#player-2+span').remove('.error');
				$('#player-2').css('border', '1px solid grey');
				error = false;
			});
		}

		if(error) return false;
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

