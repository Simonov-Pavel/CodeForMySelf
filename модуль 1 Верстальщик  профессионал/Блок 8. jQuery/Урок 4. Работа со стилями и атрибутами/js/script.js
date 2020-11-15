
function func(){
	var img = $('.img_container > img');

		//Выбрать все изображения на странице и установить для них красную рамку.
	$('img').css('border', '2px solid red');

		//Изменить значение атрибута src для изображения
	if(img.attr('src') == 'images/index-1_img-1.jpg'){
		img.attr('src', 'images/kot.jpg');
	}
	else img.attr('src', 'images/index-1_img-1.jpg');

		//Добавить к заголовку H1 класс title
	var H1 = $('.grid_12 > h1');
	/*if(H1.hasClass('title')){
		H1.removeClass('title');
	}
	else H1.addClass('title');*/
	H1.toggleClass('title');
}
