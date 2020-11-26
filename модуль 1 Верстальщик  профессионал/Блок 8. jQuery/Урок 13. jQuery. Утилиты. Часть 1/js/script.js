//jQuery.isNumeric() - Определяет, представляет ли его аргумент число JavaScript.
//jQuery.isFunction() - Определяет, может ли его аргумент вызываться как функция.
//jQuery.isEmptyObject() - Проверьте, пуст ли объект (не содержит перечисляемых свойств).
//jQuery.isArray() - Определите, является ли аргумент массивом.
//jQuery.inArray() - Выполните поиск указанного значения в массиве и верните его индекс (или -1, если он не найден).
//jQuery.globalEval() - Выполните некоторый код JavaScript глобально.
//jQuery.extend() - Объедините содержимое двух или более объектов вместе в первый объект.
//jQuery.each() - Универсальная функция итератора, которая может быть использована для плавного перебора как объектов, так и массивов. Массивы и массивоподобные объекты со свойством length (например, объект аргументов функции) итерируются числовым индексом от 0 до length-1. Другие объекты повторяются через их именованные свойства.
//jQuery.data() - Храните произвольные данные, связанные с указанным элементом, и / или возвращайте заданное значение.
jQuery(function($){

			//Сохранить произвольное значение в data атрибуте произвольного элемента.
	var el = $('.row');
	$.data(el, 'data', 'name');
	console.log($.data(el,'data'));

			//Обойти элементы массива методом each и вывести значения на экран.
	var arr = ['one', 'two', ['three', 'four'], ['five', 'six']];
	var result = $.each(arr, function(index, value){
		console.log(index + ' - ' + value);
	});


	console.log(result);
});

