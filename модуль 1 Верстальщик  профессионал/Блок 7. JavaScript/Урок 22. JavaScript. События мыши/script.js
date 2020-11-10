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

var div = document.getElementById('div');

div.onmousedown = function(e) {

  var coords = getCoords(div);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

 // div.style.position = 'absolute';
  document.body.appendChild(div);
  moveAt(e);

  //div.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    div.style.left = e.pageX - shiftX + 'px';
    div.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  div.onmouseup = function() {
    document.onmousemove = null;
    div.onmouseup = null;
  };

}

div.ondragstart = function() {
  return false;
};

function getCoords(elem) {   // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}