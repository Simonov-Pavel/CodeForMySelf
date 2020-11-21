function func(){
	$('.grid_12 header h2').append('<div class="btnDiv" style="width:100px;height:100px;background:red;margin:10px;display:inline-block"></div>');
}

$('.btnDiv').on('click', function(){
	$('.btnDiv').remove();
});

$(document).on('click','.btnDiv',function(){
       $(this).remove();
});