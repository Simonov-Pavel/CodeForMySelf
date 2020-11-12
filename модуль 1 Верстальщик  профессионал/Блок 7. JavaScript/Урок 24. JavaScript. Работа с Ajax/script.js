function addEvent(target, type, func){
	if(target.addEventListener) target.addEventListener(type, func, false);
	if(target.attachEvent) target.attachEvent('on'+type, func);
	else false;
}
var batton = document.getElementById('button');
addEvent(button,'click', formAjax);

function formAjax(e){
	e = e || window.event;
	//e.preventDefault();
	//if(e.returnValue) e.returnValue = false;
	//else return false;
	
	var formDate = {
				name: document.querySelector('input[name="name"]').value,
				email: document.querySelector('input[name="email"]').value
				}
	var request = new XMLHttpRequest();
	request.open('POST','server.php',true);
	request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	request.readystatechange = function(){
		if(request.readyState === 4 && request.status === 200){
			document.getElementById('firstForm').innerHTML = '<h2>Спасибо</h2>';
		}
	request.send('name='+formDate.name+'&email='+formDate.email);
	console.log(request.responseText);
	}

	//e.preventDefault();
	//if(e.returnValue) e.returnValue = false;
	//return false;
}