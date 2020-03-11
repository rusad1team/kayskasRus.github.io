$(document).ready(function () {
//скролл
$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('.toTop').fadeIn();
 
} else {
 
$('.toTop').fadeOut();
 
}
 
});
 
$('.toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});

$('.cart__maps').each(function(){
        ymaps.ready(function (){
            var coords = $('#map').data('coords');
            var coords_up = '[' + coords + ']';
            coords_json = JSON.parse(coords_up);
            var myMap = new ymaps.Map('map', {
                    center: coords_json,
                    zoom: 10,
                    controls: ['geolocationControl','zoomControl']
                }, {
                    searchControlProvider: 'yandex#search'
                }),

                myPlacemarkWithContent = new ymaps.Placemark(coords_json, {
                    hintContent: 'Мы на карте',
                }, {iconLayout: 'default#image',iconImageHref: '/static/images/general/balun.png',iconImageSize: [71, 90],iconImageOffset: [-35, -90]});

                myMap.geoObjects
                .add(myPlacemarkWithContent);
        });
    });
$('.nav-link').click(function (){
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
});
//stinky header

if ($(window).width() > 800) {
   window.onscroll = function() {myFunction()};

var header = document.getElementById("nav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
}
//sandwicj
let sanwichToggle = function() {
    $('.sandwich').click(function(){
       $('.sandwich-line').toggleClass('sandwich--active');
       $('.nav-list').fadeToggle('slow'); 
    });
};
sanwichToggle();

});

//таймер
function getDayEnd() {
    var dayEnd = new Date();
    dayEnd.setHours(35, 59, 59);

    return dayEnd;
}
if (window.dayEndTimestamp === undefined) {
    window.dayEndTimestamp = getDayEnd();
}
function getTimeRemaining(endtime) {
    var t       = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours   = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
        'total':   t,
        'hours':   hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ));

    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function initializeClock(id, endtime) {
    var clock       = document.getElementById(id),
        hoursSpan   = clock.querySelector('.hours'),
        minutesSpan = clock.querySelector('.minutes'),
        secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            hoursSpan.innerHTML = ('00');
            minutesSpan.innerHTML = ('00');
            secondsSpan.innerHTML = ('00');
            clearInterval(timeinterval);
        }
    }

    updateClock();

    var timeinterval = setInterval(updateClock, 500);
}

var myClock = (document.cookie && document.cookie.match('myClock')) ?
                (Date.parse(getCookie('myClock')) - Date.now() > -60000) : null;

// if there's a cookie with the name myClock, and timer stoped less then 1 minute (-60000) ago, use that value as the deadline
if (myClock) {
    // get deadline value from cookie
    var deadline = getCookie('myClock');
}
// otherwise, set a deadline 45 minutes from now and
// save it in a cookie with that name
else {
    // create deadline 45 minutes from now
    var timeInMinutes = 45,
        currentTime   = Date.parse(new Date().toString()),
        deadline      = new Date(currentTime + timeInMinutes * 60 * 1000);

    // store deadline in cookie for future reference
    document.cookie = 'myClock=' + deadline;
}

initializeClock('timer', window.dayEndTimestamp);



