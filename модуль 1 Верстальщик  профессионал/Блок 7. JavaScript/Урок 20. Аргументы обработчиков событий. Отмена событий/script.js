
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

function addEvent(target, type, func){
	if(target.addEventListener) target.addEventListener(type, func, false);
	else if(target.attachEvent) target.attachEvent('on'+type, function(e){
		return func.call(target, e);
	});
}
function removeEvent(target, type, func){
	if(target.removeEventListener) target.removeEventListener(type, func, false);
	else if(target.detachEvent) target.detachEvent('on'+type, function(e){
		return func.call(target, e);
	});
}

for(var i = 0; i < batton.length; i++){
	addEvent(batton[i], 'click', addRed);
}
function addRed(){
	this.style.color = 'red';
	removeEvent(this, 'click', addRed);
	addEvent(this, 'click', addGreen);
}
function addGreen(){
	this.style.color = 'green';
	removeEvent(this, 'click', addGreen);
	addEvent(this, 'click', addRed);
}
