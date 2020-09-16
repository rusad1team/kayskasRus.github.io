$(document).ready(function () {
//скролл
$('.btnScroll').click(function (){
var elementClick = $(this).attr("href");
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
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


});

