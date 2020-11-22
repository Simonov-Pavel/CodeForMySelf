		//Методы фильтрации
//.eq() - Возвращает элемент, идущий под задоным номеромв наборе выбранных элементов
//.filter() - Фильтрует набор выбранных элементов с помощью заданного селектора или функции
//.first() - Возвращает первый элемент в наборе
//.has() - Фильтрует набор выбранных элементов, оставляя те, которые имеют потомков, соответствующему селектору
//.is() - Проверяет, содержится ли в наборе, хотя бы один элемент удовлетворяющий заданному селектору
//.last() - Возвращает последний элемент в наборе
//.not() - Возвращает элементы, не соответствующие заданым условиям
//.slice() - Возвращает элементы с индексами из определенной области(например от 0 до 5)

		//Методы обработки элементов выборки
//.each() - Вызывает заданую функцию для каждого элемента набора
//.map() - Вызывает заданую функцию для каждого элемента набора, а в итоге создает новый набор, составленныйиз значений, возвращенных этой функциуй

jQuery(function($){

	//$('li').eq(2).css({'border':'1px solid black'});

	//$('div').filter('.address').css({'border':'1px solid black'});
	/*$('li').filter(function(index){
		//return $(this).attr('class') == 'current';
		return index%2 == 0;
	}).css({'border':'1px solid black'});*/

	//$('div').first().css({'border':'1px solid green'});

	//$('div').last().css({'border':'1px solid green'});

	//$('div').has('h1, .row').css({'border':'1px solid green'});

	/*if($('div').is('.grid_7')){
		alert('yes');
	}*/
	
	/*$('span').parent().not(function(index){
		return $(this).is('h1');
	}).css({'border':'1px solid red'});*/

	// $('li').slice(0,3).css({'border':'1px solid black'}); 

			//Выбрать все элементы списка и их текстовое содержимое записать в массив (каждый отдельный текст списка в отдельную ячейку)
			
	/*var arr = [];
	$('li').each(function(index,elem){
		arr.push($(elem).text());
	});
	alert(arr);*/

	/*var arr = [];
	$('li').map(function(index,elem){
		arr.push($(elem).text());
	});
	alert(arr);*/

	var arr = $('li').map(function(index,elem){
		return $(elem).text();
	});
	alert(arr.get());

});