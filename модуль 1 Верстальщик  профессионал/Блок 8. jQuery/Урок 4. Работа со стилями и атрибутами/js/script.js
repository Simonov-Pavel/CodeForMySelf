
function func(){
	var img = $('.img_container > img');

		//Выбрать все изображения на странице и установить для них красную рамку.
	$('img').css('border', '2px solid red');

		//Изменить значение атрибута src для изображения
	img.removeAttr('src', 'rrr');
	alert(img.attr('src'));

}
