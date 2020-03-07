$(document).ready(function () {
//скролл
$('.btnScroll').click(function (){
var elementClick = $(this).attr("href");
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});
let tabSlider = function () {
    $('.tabs-nav').slick({
    mobileFirst: true,
    arrows: false,
    dots: true,
    appendDots: '.navig-dots2',
    customPaging: function(slider,i) {
        return '<div class="navig-dot2"></div>';
},
    responsive: [
        {
            breakpoint: 801,
            settings: "unslick",
            slidesToShow: 3,
            arrows: false,
        },
         {
            breakpoint: 400,
            slidesToShow: 1,
            arrows: false,
        }
    ]
});
}



let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach( item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach( item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');

        tabName = this.getAttribute('data-tab-name');

        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName)? item.classList.add('is-active'): item.classList.remove('is-active');
        })
    }
};

tab();
tabSlider();
});

