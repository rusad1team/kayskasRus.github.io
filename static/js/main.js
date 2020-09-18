$(document).ready(function () {
//скролл
$('.banner-bottom__link').on('click', function (){
var elementClick = $(this).attr("href");
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});
$('.search').on('click', function (){
    $('.form-search__wrapper').addClass('form-search--active');
});
$('.form-search__close').on('click', function (){
    $('.form-search__wrapper').removeClass('form-search--active');
});
$(window).on('scroll', function(){
    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('.header').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});
$('.foooter-more').on('click', function (){
        $('.footer-block--ul1 li:not(.footer-link-active)').slideToggle();
});

});

