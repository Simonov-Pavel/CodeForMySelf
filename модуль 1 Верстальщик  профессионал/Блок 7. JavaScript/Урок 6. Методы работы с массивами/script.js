var a = [1,6,10,67,3,9,2,0,34,23,5];
document.write('исходный массив ' + a + '<br>');
var arr = a.sort(function(a, b){
	return a-b;
});
document.write('сортировка в прямом направлении - ' + arr + '<br>');

var arr2 = a.sort(function(a, b){
	return b-a;
});
document.write('сортировка в обратном направлении - ' + arr2 + '<br>');

var arr3 = a.slice(3);
document.write('все элементы исходного, начиная с третьего ' + arr3 + '<br>');

var arr4 = a.reduce(function(x,y){
	return x + y;
}, 0);
document.write('сумму элементов массива ' + arr4 + '<br>');

var arr5 = arr4/a.length;
document.write('среднее арифметическое ' + arr5 + '<br>');

function maxValue(array){
	var max = array[0];
	for(i = 0; i < array.length; i++){
		if(max < array[i]) max = array[i];
	}
	document.write('максимальное значение массива ' + max + '<br>');
}
maxValue(a);

function minValue(array){
	var min = array[0];
	for(i = 0; i < array.length; i++){
		if(min > array[i]) min = array[i];
	}
	document.write('минимальное значение массива ' + min + '<br>');
}
minValue(a);

var arr6 = a.sort(function(a, b){
	return a-b;
});
document.write('минимальное значение массива ' + arr6[0] + '<br>');
document.write('максимальное значение массива ' + arr6[arr.length - 1] + '<br>');