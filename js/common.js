$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function () {
 $("form").submit(function () {
 // Получение ID формы
 var formID = $(this).attr('id');
 // Добавление решётки к имени ID
 var formNm = $('#' + formID);
 $.ajax({
 type: "POST",
 url: 'mail.php',
 data: formNm.serialize(),
 success: function (data) {
 // Вывод текста результата отправки
 $(formNm).html(data);
 },
 error: function (jqXHR, text, error) {
 // Вывод текста ошибки отправки
 $(formNm).html(error);
 }
 });
 return false;
 });
});
$(window).bind('scroll',function(e){
	parallaxScroll();
});

function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0+(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.2))+'px');
}

$(function(){
	$("#phone").mask("+7(999) 999-9999");
});
