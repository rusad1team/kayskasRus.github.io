      </div>
      <footer class="footer">
        <div class="footer-top">
          <div class="footer-top__block">
            <h2 class="footer-top__title">Салоны красоты «Про Визаж» («Pro Visage») ООО "Кристалл"</h2>
            <div class="footer-top__addresWrapper"><span class="footer-top__addres">Салон на ул.Композиторов Адрес: Санкт-Петербург, ул. Композиторов, 10</span>
              <div class="footer-top__metro">
                <svg class="svg-sprite-icon icon-metro footer-top__icon">
                  <use xlink:href="<?php echo Q_IMG_DIR;?>/svg/symbol/sprite.svg#metro"></use>
                </svg><span class="footer-top__metroName">пр. Просвещения</span>
              </div>
            </div>
            <div class="footer-top__addresWrapper"><span class="footer-top__addres">Салон на Коломяжском пр.Адрес: Санкт-Петербург, пр. Коломяжский, 15</span>
              <div class="footer-top__metro">
                <svg class="svg-sprite-icon icon-metro footer-top__icon">
                  <use xlink:href="<?php echo Q_IMG_DIR;?>/svg/symbol/sprite.svg#metro"></use>
                </svg><span class="footer-top__metroName">Пионерская</span>
              </div>
            </div>
          </div>
          <div class="map" id="map">
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac8d44b7181f93546ad50d7882770fb49193d19e518b542bd2bf59d732b8bdd45&amp;width=100%25&amp;height=550&amp;lang=ru_RU&amp;scroll=true"></script>
          </div>
        </div>
        <div class="footer-bottom"><a class="btn btn-large js-popup-link" href="#popup-onlineReserve">Свяжитесь с нами сейчас</a><span class="footer-bottom__copy">Copyright 2018. Все права защищены. При копировании материалов ссылка обязательна</span><small>Rus Kayskas</small></div>
      </footer>
    </div>
    <div class="popup mfp-hide" id="popup-onlineReserve">
      <div class="hide-on-success">
        <div class="popup-header"><span class="popup-title">Получить Консультацию</span>
          <div class="popup-close">
            <svg class="svg-sprite-icon icon-close popup-close__icon">
              <use xlink:href="<?php echo Q_IMG_DIR;?>/svg/symbol/sprite.svg#close"></use>
            </svg>
          </div>
        </div>
        <div class="popup-body">
          <form class="popupform">
            <div class="popupform-group popupform-group--required">
              <label class="popupform-group__label">Контактный телефон<strong>*</strong></label>
              <input class="input-field" placeholder="+7(912)123-34-45" type="phone">
            </div>
            <div class="popupform-group">
              <label class="popupform-group__label">Ваше имя</label>
              <input class="input-field" placeholder="Ваше Имя" type="name">
            </div>
            <div class="popupform-group">
              <label class="popupform-group__label">Сообщение</label>
              <textarea class="textarea-field" placeholder="Сообщение" type="msq"></textarea>
            </div>
            <div class="popupform-footer">
              <input class="btn" type="submit" value="Записаться">
              <p class="popupform-info">Нажимая кнопку "Записаться", вы соглашаетесь с <a href="#" class="form-info__link">политикой конфиденциальности</a></p>
            </div>
          </form>
        </div>
        <div class="show-on-success"></div>
      </div>
    </div>
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
    <?php wp_footer();?>
  </body>
</html>