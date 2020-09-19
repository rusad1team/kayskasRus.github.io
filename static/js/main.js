$(document).ready(function () {
//скролл
$('.btnScroll').click(function (){
var elementClick = $(this).attr("href");
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});
$('.search').on('click', function (){
  $('.form-search__wrapper').addClass('form-search--active');
  $(this).addClass('search-toggle');
});
$('.form-search__close').on('click', function (){
  $('.form-search__wrapper').removeClass('form-search--active');
  $('.search').removeClass('search-toggle');
});
$('.js-banner-slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 7000,
  });
let sanwichToggle = function() {
    $('.sandwich').on('click', function(){
       $('.sandwich-line').toggleClass('sandwich--active');
       $('.nav-wrapper').fadeToggle('slow'); 
    });
};

sanwichToggle();

$('.popup-modal').magnificPopup({
  type: 'inline',
  preloader: false,
  focus: '#name'
});

});

