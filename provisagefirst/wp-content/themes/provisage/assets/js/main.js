

$(document).ready(function () {
    svg4everybody({});

    let sliderReviews = function () {
    	$('.js-reviews-slider').slick({
    		arrows: false,
        dots: true,
        fade: true,
        customPaging: function(slider, i) {
          return '<a class="reviews-dot"></a>'
        },
        appendDots: '.reviews-dots'
    	});
    };
    let sandwich = () => {
      $('.sandwich').on('click', function(){
        $(this).toggleClass('sandwich--active');
        $('.mobile-nav').toggleClass('mobile-nav--active');
      });
      $('.nav-link').click(function(){
        $('.mobile-nav').removeClass('mobile-nav--active');
        $('.sandwich').removeClass('sandwich--active'); 
      });
      $('.dropBx').on('click', function(){
         if ($(window).width() <= '768') {
            $('.dropDownMenu').slideToggle();
         }
      });
    };

    let sliderTabs =  () => {
       $('.js-ourMasters-second').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.js-ourMasters-first'
        });
        $('.js-ourMasters-first').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          asNavFor: '.js-ourMasters-second',
          vertical: true,
          arrows: false,
          centerMode: true,
          focusOnSelect: true,
          responsive: [
            {
              breakpoint: 450,
              settings: "unslick"
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
        });
    };
    let sliderToggleBlock = function() {
        $('.question-item').on('click', function(){
          $(this).children().eq(1).slideToggle(400);
        });
    }
    let linkChange = function() {
    $('.question-link').on('click', function() {
            $(this).toggleClass('question-link--active');
        });
    }
    $("nav").on("click",".nav-link", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    let popupOnline = () => {
      $('.js-popup-link').magnificPopup({
        showCloseBtn: false,
      });
    }
     $(document).on('click','.popup-close', function(){
        $.magnificPopup.close();
     }); 
    sandwich();
    sliderReviews();
    sliderTabs();
    sliderToggleBlock();
    linkChange();
    popupOnline();
});
window.addEventListener('DOMContentLoaded', function() {
  var select = document.querySelector('#selectFirst'),
  hide = document.querySelectorAll('.hide');
  function change()
  {
    [].forEach.call(hide, function(el) {
           var add = el.classList.contains(select.value) ? "add" : "remove"
           el.classList[add]('show');
    });
  }
  select.addEventListener('change', change);
  change()
 });
window.addEventListener('DOMContentLoaded', function() {
  var selecttwo = document.querySelector('#selectStreetFirst'),
  hide = document.querySelectorAll('.street-hide');
  function change()
  {
    [].forEach.call(hide, function(el) {
           var add = el.classList.contains(selecttwo.value) ? "add" : "remove"
           el.classList[add]('street-show');
    });
  }
  selecttwo.addEventListener('change', change);
  change()
 });