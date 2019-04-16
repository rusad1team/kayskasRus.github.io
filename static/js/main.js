$(document).ready(function () {
    svg4everybody({});

    let jsBannerSlider = () => {
        $('.js-banner-slider').slick({
            nextArrow: '.slider-nav--next',
            prevArrow: '.slider-nav--prev',
        });
    };
    let jsHitsSlider = () => {
        $('.js-hits-slider').slick({
            nextArrow: '.slider-nav--hitsNext',
            prevArrow: '.slider-nav--hitsPrev',
            slidesToShow: 3,
            slidesToScroll: 1,
        });
    };

    let locDisplay = () => {
      $('.location').on('click', function() {
         $('.location-onClick').toggleClass('location-onClick--active'); 
      });  
    };
    jsBannerSlider();
    jsHitsSlider();
    locDisplay();
});