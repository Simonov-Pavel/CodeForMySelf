
var check = document.forms.firstForm.elements.check;
for(var i = 0; i < check.length; i++){
	if(check[i].checked){
		alert(check[i].value);
	}
}

