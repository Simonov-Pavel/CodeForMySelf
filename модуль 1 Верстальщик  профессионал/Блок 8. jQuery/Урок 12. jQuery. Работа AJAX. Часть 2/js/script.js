//.ajaxComplete() - Зарегистрируйте обработчик, который будет вызываться после завершения Ajax-запросов. Это Аяксевент.
//.ajaxError() - Зарегистрируйте обработчик, который будет вызываться, когда Ajax-запросы завершатся ошибкой. Это событие Ajax.
//.ajaxSend() - Прикрепите функцию, которая должна быть выполнена до отправки Ajax-запроса. Это событие Ajax.
//.ajaxStart() - Зарегистрируйте обработчик, который будет вызван при начале первого Ajax-запроса. Это событие Ajax.
//.ajaxStop() - Зарегистрируйте обработчик, который будет вызван после завершения всех Ajax-запросов. Это событие Ajax.
//.ajaxSuccess() - Прикрепите функцию, которая будет выполняться всякий раз, когда запрос Ajax завершается успешно. Это событие Ajax.
// jQuery.ajax() - Выполните асинхронный HTTP-запрос (Ajax).
// jQuery.ajaxPrefilter() - Обрабатывайте пользовательские параметры Ajax или изменяйте существующие параметры перед отправкой каждого запроса и перед его обработкой $.Аякс().
// jQuery.ajaxSetup() - Установите значения по умолчанию для будущих запросов Ajax. Его использование не рекомендуется.
// jQuery.ajaxTransport() - Создает объект, который обрабатывает фактическую передачу данных Ajax.
// jQuery.get() - Загрузите данные с сервера с помощью запроса HTTP GET.
// jQuery.getJSON() - Загрузите данные в кодировке JSON с сервера с помощью запроса GET HTTP.
// jQuery.getScript() - Загрузите файл JavaScript с сервера с помощью запроса GET HTTP, а затем выполните его.
// jQuery.param() - Создайте сериализованное представление массива, простого объекта или объекта jQuery, подходящего для использования в строке URL-запроса или Ajax-запросе. В случае передачи объекта jQuery он должен содержать входные элементы со свойствами name/value.
// jQuery.post() - Отправляйте данные на сервер с помощью HTTP POST запроса.
//.load() - Загрузите данные с сервера и поместите возвращенный HTML-код в соответствующие элементы.
//.serialize() - Кодируйте набор элементов формы в виде строки для отправки.
//.serializeArray() - Кодируйте набор элементов формы в виде массива имен и значений.
jQuery(function($){


	$('#btn').click(function(e){
		e = e || window.event;
		if(e.preventDefault) e.preventDefault();
		else if(e.returnValue) e.returnValue = false;
		else false;

		$('#ajax').html('<span>Отправлено!</span>').fadeIn(1000,function(){
			var result = $('#contact-form').serializeArray();
			$.ajax({
				url : 'server.php',
				type : 'GET',
				data : result,
				dataType : 'json',
				context : document.getElementById('ajax'),
				success : function(data, status, jqXHR){
					
					$(this).find('span') .fadeOut(300, function(){
						$(this).text('Добавлено!').fadeIn(300);
					});
					$(this).delay(1000).fadeOut(1000,function(){
						$('.grid_5').append('<h3>'+ data.name +'</h3><p>'+ data.text +'</p>');
					});
				},
				error : function(){
					alert('ошибка');
				}
			});
			/*var jqXHR = $.get('server.php', result, function(){}, 'json');
			jqXHR.then(function(){
				$(this).find('span') .fadeOut(300, function(){
					$(this).text('Добавлено!').fadeIn(300);
				});
				$(this).delay(1000).fadeOut(1000,function(){
					$('.grid_5').append('<h3>'+ data.name +'</h3><p>'+ data.text +'</p>');
				});
			},
			function(){
				alert('fail');
			});*/
		});
	});

});
