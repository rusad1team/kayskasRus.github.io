let texts = {
    "a": "textA",
    "b": "textB",
    "c": "textC",
    "d": "textD",
    "e": "textE",
    "f": "textF",
    "g": "textG",
    "h": "textH",
    "i": "textI",
    "j": "textJ",
    "k": "textK"
};

function getSpeciaOffer() {
    return getData = window.location.search
        .replace('?', '')
        .split('&')
        .reduce(
            function (p, e) {
                let a = e.split('=');
                p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            }, {}
        );
}

function setSpecialOffer() {
    let uriId = getSpeciaOffer().goal ? getSpeciaOffer().goal : 'a';
    if (uriId) {
        $('.words > p').removeClass('active');
        $(`#${uriId}`).addClass('active');
        $('#pre-word > .words-description > .text').text(texts[uriId]);
        $('#pre-word > .words-description > .slider img').each(function () {
            let oldSrc = $(this).attr("src").split('/');
            oldSrc[2] = uriId;
            let newSrc = oldSrc.join('/');
            $(this).attr(
                {
                    "src": newSrc
                }
            );
        });
    }
}

$(document).ready(function () {

    setSpecialOffer();

    $(window).scroll(function () {
        $('section').each(function () {
            let selector = $(this).attr('id');
            // Все позиции элемента
            let targetPosition = {
                    top: window.pageYOffset + $(this)[0].getBoundingClientRect().top,
                    left: window.pageXOffset + $(this)[0].getBoundingClientRect().left,
                    right: window.pageXOffset + $(this)[0].getBoundingClientRect().right,
                    bottom: window.pageYOffset + $(this)[0].getBoundingClientRect().bottom
                };
                // Получаем позиции окна
            let windowPosition = {
                    top: window.pageYOffset,
                    left: window.pageXOffset,
                    right: window.pageXOffset + document.documentElement.clientWidth,
                    bottom: window.pageYOffset + document.documentElement.clientHeight
                };

            if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
                targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
                targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
                targetPosition.left < windowPosition.right &&
                !$(`.mobile > .menu li.${selector}`).hasClass('active')) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
                // Если элемент полностью видно, то запускаем следующий код
                $('.mobile > .menu li').removeClass('active');
                $(`.mobile > .menu li.${selector}`).addClass('active');
            }
        });
    });

    $('body').on('click', '#pre-word > .words > p', function () {
        let id = $(this).attr('id');
        $('.words > p').removeClass('active');
        $(this).addClass('active');
        $('#pre-word > .words-description > .text').text(texts[id]);
        $('#pre-word > .words-description > .slider img').each(function () {
            let oldSrc = $(this).attr("src").split('/');
            oldSrc[2] = id;
            let newSrc = oldSrc.join('/');
            $(this).attr(
                {
                    "src": newSrc
                }
            );
        });
    });

    $('body').on('click', '.table-toggle > button:not(.active)', function () {
        let id = $(this).attr('id');
        $('.table-toggle > .active').removeClass('active');
        $(this).addClass('active');
        $('.schedule-content > .table-container:not(.table-hidden)').addClass('table-hidden');
        $(`.schedule-content > .${id}`).removeClass('table-hidden');
    });

    $('body').on('click', '.gallery-buttons > button:not(.active)', function () {
        $('.gallery-buttons > button').removeClass('active');
        $(this).addClass('active');
        let category = $(this).attr('id');

        if (category !== 'all') {
            $('.gallery > .gallery-item').addClass('table-hidden');
            $(`.gallery > .${category}`).removeClass('table-hidden');
        } else {
            $('.gallery > .gallery-item').removeClass('table-hidden');
        }

    });

    $('body').on('click', '.table-cell', function () {
        let value = $(this).text();

        if (value) {
            $('.table-cell').removeClass('active');
            $('.table-cell').each(function () {
                if ($(this).text() === value) {
                    $(this).addClass('active');
                }
            });
        }
    });

    $('body').on('click', '.description > p > a, .mobile-hint > p > a', function () {
        let value = $(this).text();
        
        $('#adult').addClass('active');
        $('#children').removeClass('active');

        $('.schedule-content > .children').addClass('table-hidden');
        $('.schedule-content > .adult').removeClass('table-hidden');
        
        $('.table-cell').removeClass('active');
        $('.table-cell').each(function () {
            if ($(this).text() === value) {
                $(this).addClass('active');
            }
        });
    });
    $('body').on('click', '.mobile > .label > *', function () {
        $('.menu').toggleClass('menu-active');
    });
    $('body').on('click', '.mobile > .menu ul a', function () {
        $('.menu').removeClass('menu-active');
    });

    $('body').on('click', '#tickets .gallery-item', function (e) {
        if (!$(e.target).hasClass('.close')) {
            $('#tickets .gallery-item').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('body').on('click', '#tickets .gallery-item > .mobile-hint > .close', function (e) {
        e.stopPropagation();
        console.log('hi____)');
        $(this).parent().parent().removeClass('active');
    });
    $(".fp ul li").on("click", 'a', function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".navbar ul li").on("click", 'a', function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});