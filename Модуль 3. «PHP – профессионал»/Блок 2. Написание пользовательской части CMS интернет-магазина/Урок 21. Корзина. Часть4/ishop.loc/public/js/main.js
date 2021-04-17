
/*Cart*/
$('body').on('click','.add-to-cart-link', function (e){
    e.preventDefault();
    var id = $(this).data('id'),
        qty = $('.quantity input').val() ? $('.quantity input').val() : 1,
        mod = $('.available select').val();
    $.ajax({
        url: '/cart/add',
        data: {id: id, qty: qty, mod: mod},
        type: 'GET',
        success: function (res){
            showCart(res);
        },
        error: function (){
            alert('Ошибка! Попробуйте позже');
        }
    });
});

$('#cart .modal-body').on('click', '.del-item', function (){
    var id = $(this).data('id');
    $.ajax({
        url: '/cart/delete',
        data: {id: id},
        type: 'GET',
        success: function(res){
            showCart(res);
        },
        error: function (){
            alert('Error!');
        }
    });
});

function showCart(cart){
    if ($.trim(cart) == '<h3>Корзина пустая</h3>') {
        $('#cart .modal-footer a,#cart .modal-footer .btn-danger').css('display', 'none');
    } else {
        $('#cart .modal-footer a,#cart .modal-footer .btn-danger').css('display', 'inline-block');
    }
    $('#cart .modal-body').html(cart);
    $('#cart').modal();
    if($('.cart-sum').text()){
        $('.simpleCart_total').html($('#cart .cart-sum').text());
    }else{
        $('.simpleCart_total').text('Empty Cart');
    }
}

function getCart(){
    $.ajax({
        url: '/cart/show',
        type: 'GET',
        success: function (res){
            showCart(res);
        },
        error: function (){
            alert('Ошибка! Попробуйте позже');
        }
    });
}

function clearCart(){
    $.ajax({
        url: '/cart/clear',
        type: 'GET',
        success: function (res){
            showCart(res);
        },
        error: function (){
            alert('Ошибка! Попробуйте позже');
        }
    });
}

$(document).ready(function () {
    $(".memenu").memenu();
});

addEventListener("load", function () {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}

// Can also be used with $(document).ready()
$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });
});

$(function () {

    var menu_ul = $('.menu_drop > li > ul'),
        menu_a = $('.menu_drop > li > a');

    menu_ul.hide();

    menu_a.click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            menu_a.removeClass('active');
            menu_ul.filter(':visible').slideUp('normal');
            $(this).addClass('active').next().stop(true, true).slideDown('normal');
        } else {
            $(this).removeClass('active');
            $(this).next().stop(true, true).slideUp('normal');
        }
    });

});

$('#currency').change(function () {
    window.location = 'currency/change?curr=' + $(this).val();
});

window.onload = function () {
    var toggler = document.getElementById('toggler');
    if(toggler){
        toggler.onclick = function () {
            openbox('box', 'box2',);
            return false;
    }
    }
};

function openbox(id, id_2) {
    var div = document.getElementById(id);
    var div2 = document.getElementById(id_2);
    if (div.style.display == 'block') {
        div.style.display = 'none';
        div2.style.display = 'block';
        toggler.innerHTML = 'Недавно просмотренные';
    } else {
        div.style.display = 'block';
        div2.style.display = 'none';
        toggler.innerHTML = 'Все просмотренные';
    }
}

$('.available select').on('change', function () {
    var modID = $(this).val(),
        color = $(this).find('option').filter(':selected').data('title'),
        price = $(this).find('option').filter(':selected').data('price'),
        basePrise = $('#base-price').data('base');
    if (price) {
        $('#base-price').text(symboleLeft + price + symboleRight);
    } else {
        $('#base-price').text(symboleLeft + basePrise + symboleRight);
    }
});

