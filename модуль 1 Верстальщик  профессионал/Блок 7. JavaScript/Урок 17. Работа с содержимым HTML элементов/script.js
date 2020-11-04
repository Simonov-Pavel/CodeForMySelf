var arr = document.querySelectorAll('a');

for(i=0; i<arr.length; i++){
	//arr[i].innerHTML='Пункт'+(i+1);
	//console.log(arr[i].outerHTML = '<h2>' + arr[i].outerHTML + '</h2>');
//textContent поддерживается в IE (innerText)
	//arr[i].textContent = 'Ссылка' + (i+1);
	textCont(arr[i], 'Ссылка' + (i+1));
}
	function textCont(element, value){
		var content = element.textContent;

		if(value === undefined){
			if(content !== undefined) return content;
			else return element.innerText;
		}
		else{
			if(content !== undefined) element.textContent = value;
			else element.innerText = value;
		}
	} 
