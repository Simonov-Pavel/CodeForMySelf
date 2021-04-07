$('#currency').change(function () {
    window.location = 'currency/change?curr=' + $(this).val();
});

/*$('.btn-map').click(function(event) {
    event.preventDefault();
    $('.product_click').toggleClass('on');
});*/

window.onload= function() {
    document.getElementById('toggler').onclick = function() {
        openbox('box', 'box2',);
        return false;
    };
};
function openbox(id, id_2) {
    var div = document.getElementById(id);
    var div2 = document.getElementById(id_2);
    if(div.style.display == 'block') {
        div.style.display = 'none';
        div2.style.display = 'block';
        toggler.innerHTML = 'Закрыть';
    }
else {
        div.style.display = 'block';
        div2.style.display = 'none';
        toggler.innerHTML = 'Смотреть все';
    }
}

