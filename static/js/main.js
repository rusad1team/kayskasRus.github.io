$(document).ready(function () {

svg4everybody({});
$('.tel-icon').on('click', function(){
	$('.tel-link').slideToggle();
	$('.mail-link').css('display', 'none');
});
$('.mail-icon').on('click', function(){
	$('.mail-link').slideToggle();
	$('.tel-link').css('display', 'none');
});
$('.mod-titleBox').on('click', function(){
	$(this).toggleClass('in').next().slideToggle();

	$('.mod-titleBox').not(this).removeClass('in').next().slideUp();
});
});
