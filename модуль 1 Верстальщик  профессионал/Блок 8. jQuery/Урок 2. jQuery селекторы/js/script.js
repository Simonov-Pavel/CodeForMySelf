
jQuery(function($) {
	//Выбрать элементы на странице по имени тега
	//$('form').css({'border':'1px solid red'});
	//Выбрать элементы на странице по имени класса
	//$('.container').css({'border':'1px solid red'});
	//Выбрать элементы на странице по идентификатору,
	//$('#contact-form').css({'border':'1px solid red'});
	//выбрать несколько элементов
	//$('.grid_12,.grid_7,#contact-form').css({'border':'1px solid red'});
	//выбрать элементы вложенные в некоторый родительский блок.
	//$('.grid_12 > h1').css({'border':'1px solid red'});
	//$('.container > div').css({'border':'1px solid red'});
	//$('h1 + nav').css({'border':'1px solid red'});
	//$('header ~ fieldset').css({'border':'1px solid red'});
	$('.container > div > div').css({'border':'1px solid red'});
});