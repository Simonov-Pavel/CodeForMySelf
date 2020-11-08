
var text = document.getElementById('text');
var input = document.getElementsByTagName('input');
var img = document.getElementsByTagName('img');
	
for (var i = 0; i < input.length; i++) {
	if(input[i].addEventListener)  input[i].addEventListener('blur', func, false);
	else if(input[i].attachEvent)  input[i].attachEvent('onblur',func);
}

function func() {
	text.innerHTML = this.value;
}


for (var i = 0; i < img.length; i++) {
	img[i].onclick = src;
}

function src() {
	text.innerHTML = this.getAttribute('src');
}