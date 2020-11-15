 
			//Анимационно изменить размер шрифта заголовка страницы за 2 секунды.


function func(){
	$('.grid_12 header h2')
		.animate({'fontSize': '200px'},2000)
		.animate({'opacity': 0},2000)
		.animate({'fontSize': '0px'},50)
		.animate({'opacity': 1},50)
		.animate({'fontSize': '72px'},2000, setColor);

}

function setColor(){
	var H1 = $('.grid_12 header h2');
	if(H1.css('color') == 'white'){
		setTimeout(function(){
			H1.css('color', 'red')
		},2000);
}
else {
	setTimeout(function(){
			H1.css('color', 'white')
		},2000);
}
func();
}