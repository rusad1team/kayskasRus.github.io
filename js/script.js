//переключатель ночной и дневной режим
const switcher = document.querySelector('#cbx'),
//кнопка more
    more = document.querySelector('.more'),
    modal = document.querySelector('.modal'),
    videos = document.querySelectorAll('.videos__item');

//переменная плеера который будем подтягивать из youtube
let player;

//slid toggle menu
function bindSlideToggle(trigger, boxBody,content, openClass) {
    //кнопка и ее состояние открыто и неотрыко
    let button = {
        'element': document.querySelector(trigger),
        'active': false
    };
    //элементы для раскрыти меню
    const box = document.querySelector(boxBody),
        boxContent = document.querySelector(content);
    //при клике следи за элементом toggle button
    button.element.addEventListener('click', () => {
        if (button.active === false) { //проверяем меню на не активность
            button.active = true; //если не активно то делаем активной
            //полуаем высоту элемента
            box.style.height = boxContent.clientHeight + 'px';
            box.classList.add(openClass); //активный класс для слайда
        }else {
            button.active = false;
            box.style.height = 0 + 'px';
            box.classList.remove(openClass); //активный класс для слайда
        }
    });
}
bindSlideToggle ('.hamburger', '[data-slide="nav"]','.header__menu', 'slide-active');

//переключение ночного режима
function switchMode() {
    if(night===false) {
        night = true;
        document.body.classList.add('night');
        //перекрашиваем гамбургер и перебираем линии
        document.querySelectorAll('.hamburger > line').forEach(item => {
           item.style.stroke = '#fff';     
        });
        //все заголовки
        document.querySelectorAll('.videos__item-descr').forEach(item => {
            item.style.color = '#fff';     
         });
         //просмотры
         document.querySelectorAll('.videos__item-views').forEach(item => {
            item.style.color = '#fff';     
         });
         document.querySelector('.header__item-descr').style.color= '#fff';
         //смена лого 
         document.querySelector('.logo > img').src = 'logo/youtube_night.svg';
    }else {
        night = false;
        document.body.classList.remove('night');
        //перекрашиваем гамбургер и перебираем линии
        document.querySelectorAll('.hamburger > line').forEach(item => {
            item.style.stroke = '#000';     
         });
         //все заголовки
        document.querySelectorAll('.videos__item-descr').forEach(item => {
            item.style.color = '#000';     
         });
          //просмотры
        document.querySelectorAll('.videos__item-views').forEach(item => {
            item.style.color = '#000';     
         });
         document.querySelector('.header__item-descr').style.color= '#000';
         //смена лого 
         document.querySelector('.logo > img').src = 'logo/youtube.svg';
    }
}
//ночной режим изнаально выклюен
let night = false;
switcher.addEventListener('change', ()=>{
    switchMode();
});
//создаем все видео с помощью javascript
const data = [
    ['img/thumb_3.webp', 'img/thumb_4.webp', 'img/thumb_5.webp'],
    ['#3 Верстка на flexbox CSS | Блок преимущества и галерея | Марафон верстки | Артем Исламов',
        '#2 Установка spikmi и работа с ветками на Github | Марафон вёрстки  Урок 2',
        '#1 Верстка реального заказа landing Page | Марафон вёрстки | Артём Исламов'],
    ['3,6 тыс. просмотров', '4,2 тыс. просмотров', '28 тыс. просмотров'],
    ['X9SmcY3lM-U', '7BvHoh0BrMw', 'mC8JW_aG2EM']
];

more.addEventListener('click', () => {
    const videosWrapper = document.querySelector('.videos__wrapper');
    //убираем кнопку
    more.remove();
    //создание элементов
    for (let i=0;i<data[0].length;i++) {
        let card = document.createElement('a');
        card.classList.add('videos__item','videos__item-active');
        card.setAttribute('data-url', data[3][i]);
        //внедряем в html
        card.innerHTML = `
            <img src="${data[0][i]}" alt="thumb">
            <div class="videos__item-descr">
                ${data[1][i]}
            </div>
            <div class="videos__item-views">
                ${data[2][i]}
            </div>
        `;
        videosWrapper.appendChild(card);
        setTimeout(() => {
            card.classList.remove('videos__item-active');
        },10);
        bindNewModal(card);
    }
    sliceTitle('.videos__item-descr', 100);
});
//сокращение тайтлов
function sliceTitle(selector, count) {
    document.querySelectorAll(selector).forEach(item => {
        //команда обризания бробелов item это каждый title trim удаляет лишние пробелы
        item.textContent.trim();
        //если меньше ста то ничего не делаем
        if (item.textContent.length < count) {
            return;
        }else {
            //вырезаем от 0 100 ста символов
            const str = item.textContent.slice(0, count + 1) + "..." ;
            item.textContent = str;
        }
    });
}
sliceTitle('.videos__item-descr', 100);

//modal
function openModal() {
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
    player.stopVideo();
}

//открываем видео в модалке
function bindModal(cards) {
    cards.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            //загружаем новое видео
            const id = item.getAttribute('data-url');
            loadVideo(id);
            openModal();
        });
    });
}
bindModal(videos);
//на одну карточку
function bindNewModal(cards) {
    cards.addEventListener('click', (e) => {
        e.preventDefault();
       //загружаем новое видео
        const id = cards.getAttribute('data-url');
        loadVideo(id);
        openModal();
    });
}
//закрываем видео в модалке
modal.addEventListener('click', (e) => {
    if (!e.target.classList.contains('modal__body')) {
        closeModal();
    }
});
//функция для создания плеера
function creatVideo() {
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    //в плеер помещаем новый экземпляр плеера//делаем задержку для плеера а то так не будет грузиться
    setTimeout(()=>{
        player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: 'M7lc1UVf-VE',
        });
    },300);
}
creatVideo();

//загружаем новое видео в плеер
function loadVideo(id) {
    player.loadVideoById({'videoId': `${id}`});
}