window.onload = function(){
	var text = document.getElementById('text');
	var form = document.querySelectorAll('input');
	console.log(form);

	for(var i = 0; i <form.length; i++){
		form[i].onblur = (text.innerHTML = 'hhh - '+ i);
	}

	
}