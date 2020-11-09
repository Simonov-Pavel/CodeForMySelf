var link = document.getElementsByTagName('a');
for(var i = 0; i<link.length; i++){
	addEvent(link[i], 'mouseover', addHref);
	addEvent(link[i], 'click', removeHref);
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
var href;
function addHref(){
		href = this.getAttribute('href')
		this.innerHTML = this.innerHTML + ' ( '+href+' )';
		removeEvent(this, 'mouseover', addHref);
}
function removeHref(e){
	e = e || window.event;
	if(e.preventDefault) e.preventDefault();
	else if(e.returnValue) e.returnValue = false;
	else false;
	href = ' ( '+href+ ' )';
	this.innerHTML = this.innerHTML.replace(href, '');
}
