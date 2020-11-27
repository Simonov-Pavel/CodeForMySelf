jQuery(function($){

			//Используя метод merge объединить два массива в один.
	var arr1 = [1,2,3,4,5];
	var arr2 = [6,7,8,9];
	console.log($.merge(arr1,arr2));
	


			//Создать новый массив, в котором будут храниться только четные значения из исходного.
	var a = [1,6,10,67,3,9,2,0,34,23,5];
	
	a = $.grep(a,function(el){if(el%2 == 0) return true;});
	$('#ajax').text(a);
});

