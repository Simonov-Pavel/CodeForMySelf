function addEvent(target, type, func){
	if(target.addEventListener) target.addEventListener(type, func, false);
	if(target.attachEvent) target.attachEvent('on'+type, func);
	else false;
}
var batton = document.getElementById('button');
addEvent(batton,'click', formAjax);

function formAjax(e){
	e = e || window.event;
	var formDate = {
				name: document.querySelector('input[name="name"]').value,
				email: document.querySelector('input[name="email"]').value
				}
	var request = new XMLHttpRequest();
	request.open("POST",'server.php');
	request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

	request.onreadystatechange = function(){ 
		if(request.readyState === 4 && request.status === 200){
			document.getElementById('firstForm').innerHTML = request.responseText;
		}
	}

	request.send('name='+formDate.name+'&email='+formDate.email);
	e.preventDefault();

}