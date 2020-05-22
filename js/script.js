function hidePreloader() {
      let preloader = document.getElementById('preloader')
      preloader.style.opacity = "0"; //fade out transition
      setTimeout(function() {
        preloader.style.display = "none";
      }, 2000);
    }


$(document).ready(function () {


//скролл
let scrollLinks = function() {
  $('.nav-link').click(function (){
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
  });
}


let numbers = function() {
var section = document.querySelector('.numbers');
var hasEntered = false;

window.addEventListener('scroll', (e) => {
  var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;

  if (shouldAnimate && !hasEntered) {
    hasEntered = true;
    
    $('.value').each(function () {
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
      });
    });

  }
});
}


//wow
let wow = function() {
  new WOW().init();
}

//slider
let jsSlider = function() {
  $('.js-rev-slider').slick({
  centerMode: true,
  variableWidth: true,
  slidesToShow: 1,
  prevArrow: '.navigation--prev',
  nextArrow: '.navigation--next',
  autoplay: true,
});
}

//popupGallery
let popupGallery = function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });
}

//scrollMagig

let scrollM = function() {
  let t1 = new TimelineMax({onUpdate:updatePercentage});
  const controller = new ScrollMagic.Controller();


  t1.from(".line", .5, {height: 0});
  const scene = new ScrollMagic.Scene({
    triggerElement: ".s-who",
    triggerHook: "onLeave",
    duration: "100%"
  })
  .setPin(".s-who")
  .setTween(t1)
    .addTo(controller);

  function updatePercentage() {
    t1.progress();
    console.log(t1.progress());
  }
};
let scrollM1 = function() {
  let t1 = new TimelineMax({onUpdate:updatePercentage});
  const controller = new ScrollMagic.Controller();

  t1.from(".line2", .5, {height: 0});
  const scene = new ScrollMagic.Scene({
    triggerElement: ".s-kriptoM",
    triggerHook: "onLeave",
    duration: "100%"
  })
  .setPin(".s-kriptoM")
  .setTween(t1)
    .addTo(controller);

  function updatePercentage() {
    t1.progress();
    console.log(t1.progress());
  }
};


numbers();
jsSlider();
popupGallery();
scrollLinks();

if ($(window).width() > 1025) {
  scrollM1();
  scrollM();
  wow();
}
});

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline="January 01 2018 00:00:00 GMT+0300"; //for Ukraine
var deadline = new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);

