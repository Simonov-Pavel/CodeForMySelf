var div = document.getElementsByTagName('div');
for(var i = 0; i < div.length; i++){
	addEvent(div[i],'click',redColor);
}
function addEvent(target, type, func){
	if(target.addEventListener) target.addEventListener(type, func, false);
	else target.attachEvent('on'+type, func);
}
function removeEvent(target, type, func){
	if(target.removeEventListener) target.removeEventListener(type, func, false);
	else target.detachEvent('on'+type, function(e){
		return func.call(target, e);
	});
}
function redColor(event){
	this.style.background = 'red';
	event.stopPropagation();
	removeEvent(this, 'click', redColor);
	addEvent(this, 'click', greenColor);
}
function greenColor(event){
	this.style.background = 'green';
	event.stopPropagation();
	removeEvent(this, 'click', greenColor);
	addEvent(this, 'click', redColor);
}