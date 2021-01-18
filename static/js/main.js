$(document).ready(function () {

$('.js-sert-slider').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next')
});

let sanwichToggle = function() {
    $('.sandwich').click(function(){
       $('.sandwich-line').toggleClass('sandwich--active');
       $('.nav-wrapper').fadeToggle('slow'); 
    });
};
sanwichToggle();
});

