
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

var batton = document.getElementsByTagName('button');

for(var i = 0; i < batton.length; i++){
	if(batton[i].addEventListener) batton[i].addEventListener('click',addRed, false);
	else if(batton[i].attachEvent) batton[i].attachEvent('onclick', addRed);
}
function addRed(){
	this.style.color = 'red';
	if(this.addEventListener){
		this.removeEventListener('click', addRed, false);	
		this.addEventListener('click', addGreen, false);	
	}
	else if(this.attachEvent){
		this.attachEvent('onclick', addRed, false);	
		this.detachEvent('onclick', addGreen, false);
	}
}
function addGreen(){
	this.style.color = 'green';
	if(this.addEventListener){
		this.removeEventListener('click', addGreen, false);	
		this.addEventListener('click', addRed, false);	
	}
	else if(this.attachEvent){
		this.attachEvent('onclick', addGreen, false);	
		this.detachEvent('onclick', addRed, false);
	}


}