jQuery(function($){
	var player_1;
	var player_2;
	
	
	var error = false;
	var winCellIndex = [
		[0,1,2],[3,4,5],[6,7,8],	//horizont
		[0,3,6],[1,4,7],[2,5,8],	//vertical
		[0,4,8],[2,4,6]				//diagonal
	];
	var selectedCells = {
		'x' : [],
		'o' : []
	}
	
	$('.start #submit').on('click',function(event){
		event.preventDefault();

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
			$('.opponents').html('<h2>'+player_1+' <span>VS</span> '+player_2+'</h2>');
			$('.move').text('Сейчас ходит X - '+ player_1);
		}
	})
	var player = 'x';
	$('.wrap').on('click','.cell:not("cell-x, cell-o")', function oneStep(event){
		var $cell = $(event.currentTarget);
		$cell.addClass('cell-'+player+' offset-'+player);
		var indexCell = $('.wrap .cell').index($cell);
		var selectedCellPlayer = selectedCells[player];
		selectedCellPlayer.push(indexCell);

		checkWinner(selectedCellPlayer);

		if(player === 'x'){
			player = 'o';
			$('.move').text('Сейчас ходит O - '+ player_2);			
		} 
		else{
			player = 'x';
			$('.move').text('Сейчас ходит X - '+ player_1);
		} 
	});
	function checkWinner(selectedCellPlayer){
		for(var i = 0; i < winCellIndex.length; i++){
			var allWinCell = true;
			for(var j = 0; j< winCellIndex[i].length; j++){
				if($.inArray(winCellIndex[i][j], selectedCellPlayer ) === -1){
					allWinCell = false;
				}
			}

			if(allWinCell){
			var selectedPlayer = {
				'x' : player_1,
				'o' : player_2
			}	

				$('.cell').each(function(ind, element){
					if($.inArray(ind, winCellIndex[i]) !== -1){
					var cl = 'rotate'
						if(i <= 2) cl += ' horizont';
						else if(i >= 3 && i<=5) cl += ' vertical';
						else cl += ($.inArray(0, winCellIndex[i]))? ' diagonal-2': ' diagonal-1';
					
					} 
					$(this).find('span').addClass(cl);
					$('.winPlayer').html('Игрок <h2>'+selectedPlayer[player]+'</h2> победил!!!<br><button type="submit" onclick="location.reload();">Играть еще раз</button>');
					$('.winWrap').fadeIn(1000);
				});
				$('.wrap').off('click');
				$('.move').hide();
				break;
			}

			
			if(!allWinCell && $('.cell:not(".cell-x, .cell-o")').length === 0){
				$('.wrap').off('click');
				$('.move').hide();
				$('.winPlayer').html('Победила дружба - Ничья!!!<br><button type="submit" onclick="location.reload();">Играть еще раз</button>');
				$('.winWrap').fadeIn(1000);
				break;
			}
			
				
			
		}	
			
	}

});

