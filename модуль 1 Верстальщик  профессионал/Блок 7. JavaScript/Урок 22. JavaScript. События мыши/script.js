//click - Срабатывает, когда пользователь нажимает и опускает кнопку мыши или иным образом "активирует" элемент
//contextmenu - Срабатывает перед выводом контекстного меню
//dblclick - Срабатывает, когда пользователь выполняет двойной щелчок
//mousedown - Срабатывает, когда пользователь нажимает кнопку мыши
//mouseup - Срабатывает, когда пользователь отпускает кнопку мыши 
//mousemove - Срабатывает, когда пользователь перемещает указатель мыши
//mouseover - Срабатывает, когда указатель мыши помещается над элементом
//mouseout - Срабатывает, когда указатель мыши покидает элемент
//mouseenter - Подобно 'mouseover',но не всплывает
//mouseleave - Подобно 'mouseout', но не всплывает


/*function drag(el, event){
	var scroll = getScroll();
	var startX = event.clientX + scroll.x;
	var startY = event.clientY + scroll.y;
	var elX = el.offsetLeft;
	var elY = el.offsetTop;
	var deltaX = startX - elX;
	var deltaY = startY - elY;
	addEvent(document, 'mousemove', moveHandler);
	addEvent(document, 'mouseup', upHandler);
	if(event.stopPropagation) event.stopPropagation();
	if(event.preventDefault) event.preventDefault();
	function moveHandler(e){
		el.style.left = (e.clientX + scroll.x - deltaX) + 'px';
		el.style.top = (e.clientY + scroll.y - deltaY) + 'px';
	}
	function upHandler(e){
		removeEvent(document, 'mousemove', moveHandler);
		removeEvent(document, 'mouseup', upHandler);
	}
	
}

function getScroll(w){
	w = w || window;
	if(w.pageXOffset != null){
		return {x: w.pageXOffset, y: w.pageYOffset}
	}
}

function addEvent(target, type, func){
	if(target.addEventListener) target.addEventListener(type, func, true);
	else target.attachEvent('on'+type, func);
}
function removeEvent(target, type, func){
	if(target.removeEventListener) target.removeEventListener(type, func, true);
	else target.detachEvent(type, function(e){
		return func.call(target, e);
	})
}*/


function drag(el, e) {

var coords = getCoords(el);
var shiftX = e.clientX - coords.left;
var shiftY = e.clientY - coords.top;

if(e.stopPropagation) e.stopPropagation();
if(e.preventDefault) e.preventDefault();

 document.onmousemove = function(e) {
    el.style.left = e.clientX - shiftX + 'px';
    el.style.top = e.clientY - shiftY + 'px';
 };

  el.onmouseup = function() {
    document.onmousemove = null;
    el.onmouseup = null;
  };

}

function getCoords(el) { 
  var box = el.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

