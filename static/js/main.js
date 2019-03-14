/*const dict = [
  {
    masters: [1,2,3],
    servises: [1,2],
  },
  {
    masters: [4,5,6],
    servises: [1],
  }
]*/
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
        $('.nav').slideToggle();  
      });
    };
function CityChange()
      {
    $("#streets").html($("#street_"+$("#street").options[this.selectedIndex].value).html())
      }
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
    $("nav").on("click","a", function (event) {
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
if($('div').is('.map')) {
   ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [60.00452727, 30.29612482],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'static/images/general/map-dot.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
        myMap.controls.remove('trafficControl').remove('searchControl').remove('typeSelector').remove('fullscreenControl');
    }); 
};
