jQuery(function($){
			//1. Выделять ссылки красной рамкой при наведении курсора мыши.

	/*$('a').mouseenter(function(){
		$(this).css({'border':'1px solid red'});
	});

	$('a').mouseleave(function(){
		$(this).css({'border':'none'});
	});*/

			//Запретить отправку формы, если не заполнено одно из полей.

	$('.btn').click(function(){
		var name = $('input[name="name"]');
		var email = $('input[name="email"]');
		var phone = $('input[name="phone"]');
		var message = $('textarea[name="message"]');
		var error = 0;
		if(name.val() == ''){
			name.css({'border':'1px solid red'});
			error = 1;
		}else name.css({'border':'1px solid gray'});
		if(email.val() == ''){
			email.css({'border':'1px solid red'});
			error = 1;
		}else email.css({'border':'1px solid gray'});
		if(phone.val() == ''){
			phone.css({'border':'1px solid red'});
			error = 1;
		}else phone.css({'border':'1px solid gray'});
		if(message.val() == ''){
			message.css({'border':'1px solid red'});
			error = 1;
		}else message.css({'border':'1px solid gray'}); 
		if(error != 0 ) return false;
		else  return true;
	});

			//Динамически отображать введенное значение при наборе текста в произвольном поле формы.

	var text = $('input[type="text"]');
	text.keyup(function(){
		$('textarea[name="message"]').val($(this).val());
	})

});

