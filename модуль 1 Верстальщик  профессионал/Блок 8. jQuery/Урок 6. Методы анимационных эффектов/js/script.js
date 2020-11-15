 
			//Добавить html содержимое в конец произвольного блока.
 var count = 0;
function  func(){
	count++;
	var header = $('.grid_12 header h2 span');
	
	var res = header.text().substr(8);
	if(res){
		text = header.text().replace(res, ' - result '+count);
		header = header.html(text);
	}
	else 
		header = header.append(' - result '+count);

			//Привести к верхнему регистру все четные элементы произвольного списка
$('.sf-menu li a').text(function(index,oldValue){
	if(count%2 == 0){
		if(index%2 == 0){
			return oldValue.toUpperCase();
		}
	}
		else return oldValue.toLowerCase();
});


}