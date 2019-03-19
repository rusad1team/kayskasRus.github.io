<?php get_header();?>
        <section class="s-banner" id="banner">
          <div class="container">
            <div class="banner">
              <div class="banner-wrapper">
              	<?php foreach (getBanner() as $post):?>
                <h1 class="banner-title"><?php echo $post->post_title?></h1>
                <p class="banner-text"><?php echo $post->post_content?></p>
            	<?php endforeach;?>
                <div class="banner-btnWrapper"><a class="btn btn-large" href="#">Онлайн запись</a><a class="btn btn-large btn-pink js-popup-link" href="#popup-onlineReserve">Получить консультацию специалиста</a></div>
              </div>
            </div>
          </div>
        </section>
        <section class="s-choose" id="choose">
          <div class="container">
            <div class="choose">
              <div class="choose-left">
                <div class="choose-left__wrapper">
                  <h2 class="choose-left__title">Выберите <strong>вид услуг</strong></h2>
                  <div class="choose-left__smallImgLink choose-box"><img class="choose-left__smallImg" src="<?php echo Q_IMG_DIR;?>/content/s-choose/img1.png" alt="">
                    <div class="choose-wrapperImg"><span class="choose-wrapperImg__title">Услуга такая то</span><a class="btn" href="#">Записаться</a></div>
                  </div>
                </div>
                <div class="choose-left__bigImgLink choose-box"><img class="choose-left__bigImg" src="<?php echo Q_IMG_DIR;?>/content/s-choose/img2.png" alt="">
                  <div class="choose-wrapperImg"><span class="choose-wrapperImg__title">Услуга такая то</span><a class="btn" href="#">Записаться</a></div>
                </div>
              </div>
              <div class="choose-right">
                <div class="choose-right__verticalWrapper">
                  <div class="choose-right__smallImgLink choose-box"><img class="choose-right__smallImg" src="<?php echo Q_IMG_DIR;?>/content/s-choose/img3.png" alt="">
                    <div class="choose-wrapperImg choose-box"><span class="choose-wrapperImg__title">Услуга такая то</span><a class="btn" href="#">Записаться</a></div>
                  </div>
                  <div class="choose-right__smallImgLink choose-box"><img class="choose-right__smallImg" src="<?php echo Q_IMG_DIR;?>/content/s-choose/img4.png" alt="">
                    <div class="choose-wrapperImg"><span class="choose-wrapperImg__title">Услуга такая то</span><a class="btn" href="#">Записаться</a></div>
                  </div>
                </div>
                <div class="choose-right__middleImgLink choose-box"><img class="choose-right__middleImg" src="<?php echo Q_IMG_DIR;?>/content/s-choose/img5.png" alt="">
                  <div class="choose-wrapperImg"><span class="choose-wrapperImg__title">Услуга такая то</span><a class="btn" href="#">Записаться</a></div>
                </div>
              </div>
            </div>
            <div class="choose-all"><a class="btn btn-allWidth" href="#">Все услуги</a></div>
          </div>
        </section>
        <section class="s-reviews" id="reviews">
          <div class="container">
            <div class="reviews">
              <h2 class="reviews-title">Впечатления <strong>наших клиентов</strong></h2>
              <div class="reviews-sliderWrapper">
                <div class="reviews-dots"></div>
                <div class="js-reviews-slider">
                <?php foreach(getReviews() as $review): ?>
                  <div class="reviews-itemWrapper">
                    <div class="reviews-item">
                      <div class="reviews-imgWrapper"><img class="reviews-img" src="<?php echo $review['img']?>" alt="Впечатления наших клиентов"></div>
                      <div class="reviews-wrapperText">
                        <div class="reviews-problems">
                          <div class="reviews-problems__TexttWrapper"><span class="reviews-problems__title">Проблема:</span>
                            <div class="reviews-problems__spanWrapper"><span class="reviews-problems__text"><?php echo $review['problem']?></span></div>
                          </div>
                          <div class="reviews-problems__TexttWrapper"><span class="reviews-problems__title">Решение:</span>
                            <div class="reviews-problems__spanWrapper"><span class="reviews-problems__text"><?php echo $review['decision']?></span></div>
                          </div>
                          <div class="reviews-problems__TexttWrapper"><span class="reviews-problems__title">Результат:</span>
                            <div class="reviews-problems__spanWrapper"><span class="reviews-problems__text"><?php echo $review['result']?></span></div>
                          </div>
                        </div>
                        <div class="reviews-quote">
                          <svg class="svg-sprite-icon icon-quote reviews-quote__icon">
                            <use xlink:href="<?php echo Q_IMG_DIR;?>/svg/symbol/sprite.svg#quote"></use>
                          </svg><a class="reviews-quote__link" href="mailto:naturel-studio@mail.ru"><?php echo $review['descr']?></a>
                        </div>
                      </div>
                    </div>
                  </div>
                <?php endforeach;?>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="s-discont">
          <div class="container">
            <div class="discont">
              <h2 class="discont-title">Получите скидку 500р на первое посещение</h2>
              <?php echo do_shortcode('[contact-form-7 id="34" title="скидка 500р"]');?>
            </div>
          </div>
        </section>
        <section class="s-ourMasters" id="ourMasters">
          <div class="container">
            <div class="ourMasters">
              <h2 class="ourMasters-title">Наши мастера</h2>
              <div class="tabs">
                <div class="tabs-listWrappers">
                  <div class="tabs-list">
                    <select id="selectFirst">
                      <option value="one" selected="selected">Парикмахер</option>
                      <option value="two">Cтилист</option>
                      <option value="three">Шугаринг</option>
                    </select>
                  </div>
                  <div class="tabs-list hide one">
                    <select id="selectStreetFirst">
                      <option value="street1" selected="selected">ул. Композиторов, д 10</option>
                      <option value="street2">ул. Композиторов, д 11</option>
                      <option value="street3">ул. Композиторов, д 12</option>
                    </select>
                  </div>
                  <div class="tabs-list hide two" id="street_2">
                    <select>
                      <option>ул. Композиторов, д 4</option>
                      <option>ул. Композиторов, д 3</option>
                      <option>ул. Композиторов, д 5</option>
                    </select>
                  </div>
                  <div class="tabs-list hide three" id="street_3">
                    <select>
                      <option>ул. Композиторов, д 21</option>
                      <option>ул. efafa</option>
                      <option>ул. Композиторов, д 22131</option>
                    </select>
                  </div>
                </div>
                <div class="tabs-body slider-tabs">
                  <div class="tab street-hide street1">
                    <div class="ourMasters-sliderWrapper">
                      <div class="ourMasters-sliderFirstWrapper">
                        <div class="js-ourMasters-first">
                          <div class="ourMasters-itemWrapper">
                            <div class="ourMasters-item">
                              <div class="ourMasters-item__imgWrapper"><img src="<?php echo Q_IMG_DIR;?>/content/s-firstSlider/img1.png" alt="Парикмахеры"></div>
                              <div class="ourMasters-item__textWrapper"><span class="ourMasters-item__name">Анастасия.</span><span class="ourMasters-item__profession">Стилист-колорист</span>
                                <p class="ourMasters-item__text">Опыт работы - 10 лет.</p>
                              </div>
                            </div>
                          </div>
                          <div class="ourMasters-itemWrapper">
                            <div class="ourMasters-item">
                              <div class="ourMasters-item__imgWrapper"><img src="<?php echo Q_IMG_DIR;?>/content/s-firstSlider/img2.png" alt="Парикмахеры"></div>
                              <div class="ourMasters-item__textWrapper"><span class="ourMasters-item__name">Наталья.</span><span class="ourMasters-item__profession">Прикмахер стилист</span>
                                <p class="ourMasters-item__text">Опыт работы - 15 лет.</p>
                              </div>
                            </div>
                          </div>
                          <div class="ourMasters-itemWrapper">
                            <div class="ourMasters-item">
                              <div class="ourMasters-item__imgWrapper"><img src="<?php echo Q_IMG_DIR;?>/content/s-firstSlider/img3.png" alt="Парикмахеры"></div>
                              <div class="ourMasters-item__textWrapper"><span class="ourMasters-item__name">Светлана.</span><span class="ourMasters-item__profession">Прикмахер стилист</span>
                                <p class="ourMasters-item__text">Опыт работы - 10 лет.</p>
                              </div>
                            </div>
                          </div>
                          <div class="ourMasters-itemWrapper">
                            <div class="ourMasters-item">
                              <div class="ourMasters-item__imgWrapper"><img src="<?php echo Q_IMG_DIR;?>/content/s-firstSlider/img4.png" alt="Парикмахеры"></div>
                              <div class="ourMasters-item__textWrapper"><span class="ourMasters-item__name">Ирина С.</span><span class="ourMasters-item__profession"> Парикмахер-стилист.</span>
                                <p class="ourMasters-item__masters">Звание : мастер международного класса</p>
                                <p class="ourMasters-item__text">Опыт работы - 20 лет.</p>
                              </div>
                            </div>
                          </div>
                          <div class="ourMasters-itemWrapper">
                            <div class="ourMasters-item">
                              <div class="ourMasters-item__imgWrapper"><img src="<?php echo Q_IMG_DIR;?>/content/s-firstSlider/img5.png" alt="Парикмахеры"></div>
                              <div class="ourMasters-item__textWrapper"><span class="ourMasters-item__name">Нина.</span><span class="ourMasters-item__profession">Парикмахер-стилист.</span>
                                <p class="ourMasters-item__masters">Звание : мастер международного класса</p>
                                <p class="ourMasters-item__text">Опыт работы - 12 лет.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="ourMasters-sliderSecondWrapper">
                        <div class="js-ourMasters-second">
                          <div class="ourMasters-itemSecondWrapper">
                            <div class="ourMasters-itemSecond">
                              <div class="ourMasters-itemSecond__imgWrapper"><img src="<?php echo Q_IMG_DIR;?>/content/s-secondSlider/img1.png" alt="Парикмахер"></div><span class="ourMasters-itemSecond__name">Анастасия</span>
                            </div>
                          </div>
                          <div class="ourMasters-itemSecondWrapper">
                            <div class="ourMasters-itemSecond">
                              <div class="ourMasters-itemSecond__imgWrapper"><img src="<?php echo Q_IMG_DIR;?>/content/s-secondSlider/img1.png" alt="Парикмахер"></div><span class="ourMasters-itemSecond__name">Наталья</span>
                            </div>
                          </div>
                          <div class="ourMasters-itemSecondWrapper">
                            <div class="ourMasters-itemSecond">
                              <div class="ourMasters-itemSecond__imgWrapper"><img src="<?php echo Q_IMG_DIR;?>/content/s-secondSlider/img1.png" alt="Парикмахер"></div><span class="ourMasters-itemSecond__name">Светлана</span>
                            </div>
                          </div>
                          <div class="ourMasters-itemSecondWrapper">
                            <div class="ourMasters-itemSecond">
                              <div class="ourMasters-itemSecond__imgWrapper"><img src="<?php echo Q_IMG_DIR;?>/content/s-secondSlider/img1.png" alt="Парикмахер"></div><span class="ourMasters-itemSecond__name">Ирина С</span>
                            </div>
                          </div>
                          <div class="ourMasters-itemSecondWrapper">
                            <div class="ourMasters-itemSecond">
                              <div class="ourMasters-itemSecond__imgWrapper"><img src="<?php echo Q_IMG_DIR;?>/content/s-secondSlider/img1.png" alt="Парикмахер"></div><span class="ourMasters-itemSecond__name">Нина</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab street-hide street2">
                    <p>123</p>
                  </div>
                  <div class="tab street-hide street3">
                    <p>2356</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="s-questions" id="questions">
          <div class="container">
            <div class="question">
              <div class="questions-blockLeft">
                <h2 class="question-title">Ответы на ваши вопросы</h2>
                <div class="question-imgWrapper"><img src="<?php echo Q_IMG_DIR;?>/general/legs.png" alt="Салон Красоты"></div>
              </div>
              <div class="question-block">
                <ul class="question-list">
                 <?php foreach(getFaq() as $faq): ?>
                  <li class="question-item"> <span class="question-link"><?php echo $faq['name']?></span>
                    <ul class="question-dropDown">
                      <li class="question-dropDown__item"><a class="question-dropDown__link" href="#"><?php echo $faq['question1']?></a></li>
                      <li class="question-dropDown__item"><a class="question-dropDown__link" href="#"><?php echo $faq['question2']?></a></li>
                      <li class="question-dropDown__item"><a class="question-dropDown__link" href="#"><?php echo $faq['question3']?></a></li>
                      <li class="question-dropDown__item"><a class="question-dropDown__link" href="#"><?php echo $faq['question4']?></a></li>
                    </ul>
                  </li>
                  <?php endforeach;?>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="s-formPink">
          <div class="container">
            <div class="formPink">
              <div class="formPink-wrapper">
                <h2 class="formPink-title">Другой вопрос?</h2>
                <p class="formPink-text">Отправьте заявку сейчас и наш опытный специалист ответит на Ваш вопрос в течении 15 минут</p>
              </div>
              <?php echo do_shortcode('[contact-form-7 id="35" title="вопрос"]');?>
            </div>
          </div>
        </section>






<?php get_footer();?>