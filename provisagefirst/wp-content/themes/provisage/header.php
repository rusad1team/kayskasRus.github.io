<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset')?>">
    <title><?php the_title();?>s</title><!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE = edge"><![endif]-->
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="keywords" content="">
    <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js"></script><![endif]-->
    <?php wp_head();?>
  </head>
  <body class="index-page">
    <div class="wrapper">
      <header class="header">
        <div class="container">
          <div class="header-top">
            <div class="logo"><a href="<?php echo home_url()?>"><img class="logo-img" src="<?php echo Q_IMG_DIR;?>/general/logo.png" alt="provisage"></a>
              <div class="mobile mobile-social"><a href="#">
                  <svg class="svg-sprite-icon icon-vk header-top__icon">
                    <use xlink:href="<?php echo Q_IMG_DIR;?>/svg/symbol/sprite.svg#vk"></use>
                  </svg></a><a href="#">
                  <svg class="svg-sprite-icon icon-insta header-top__icon">
                    <use xlink:href="<?php echo Q_IMG_DIR;?>/svg/symbol/sprite.svg#insta"></use>
                  </svg></a><a href="#">
                  <svg class="svg-sprite-icon icon-classMates header-top__icon">
                    <use xlink:href="<?php echo Q_IMG_DIR;?>/svg/symbol/sprite.svg#classMates"></use>
                  </svg></a></div>
            </div>
            <div class="header-top__socialAndBtnWrapper">
              <div class="header-top__social"><a href="#">
                  <svg class="svg-sprite-icon icon-vk header-top__icon">
                    <use xlink:href="<?php echo Q_IMG_DIR;?>/svg/symbol/sprite.svg#vk"></use>
                  </svg></a><a href="#">
                  <svg class="svg-sprite-icon icon-insta header-top__icon">
                    <use xlink:href="<?php echo Q_IMG_DIR;?>/svg/symbol/sprite.svg#insta"></use>
                  </svg></a><a href="#">
                  <svg class="svg-sprite-icon icon-classMates header-top__icon">
                    <use xlink:href="<?php echo Q_IMG_DIR;?>/svg/symbol/sprite.svg#classMates"></use>
                  </svg></a></div><a class="btn js-popup-link" href="#">Онлайн Запись</a>
            </div>
            <div class="header-top__info">
              <div class="header-top__infoWrapper"><span class="header-top__addres">СПб, Коломяжский пр., 15</span>
                <div class="header-top__phoneWrapper"><a href="tel:+78123020606">+7 (812) 302-06-06<strong>,</strong></a><a href="tel:+79214028448">+7 (921) 402-84-48</a></div>
              </div>
              <div class="header-top__infoWrapper"><span class="header-top__addres">СПб, ул. Композиторов, 10</span>
                <div class="header-top__phoneWrapper"><a href="tel:+78123358848">+7 (812) 335-88-48<strong>,</strong></a><a href="tel:+79117431000">+7 (911) 743-10-00</a></div>
              </div>
            </div>
          </div>
          <div class="header-bottom">
            <div class="sandwich">
              <div class="sandwich-line sandwich-line--top"></div>
              <div class="sandwich-line sandwich-line--middle"></div>
              <div class="sandwich-line sandwich-line--bottom"></div>
            </div>
            <div class="mobile"><a class="btn" href="">Онлайн Запись</a></div>
            <nav class="nav">
              <?php wp_nav_menu([
              'theme_location' => 'top',
              'container' => null
              ]);?>
             <!--  <ul>
               <li><a class="nav-link" href="#banner">О НАС</a></li>
               <li class="dropBx"><a class="nav-link" href="#choose">УСЛУГИ</a>
                 <ul class="dropDownMenu">
                   <li><a href="https://www.provisage.ru/kollagirovanie.html">Парикмахерские услуги</a></li>
                   <li><a href="https://www.provisage.ru/kollagirovanie.html">Образ невесты</a></li>
                   <li><a href="https://www.provisage.ru/kollagirovanie.html">Педикюр</a></li>
                   <li><a href="">Эстетическая косметология</a></li>
                   <li><a href="">Пирсинг</a></li>
                   <li><a href="">Лечение волос</a></li>
                   <li><a href="">Маникюр</a></li>
                   <li><a href="">Перманентный макияж</a></li>
                   <li><a href="">Перманентный макияж</a></li>
                   <li><a href="">Перманентный макияж</a></li>
                   <li><a href="">Лечение волос</a></li>
                   <li><a href="">Маникюр</a></li>
                   <li><a href="">Перманентный макияж</a></li>
                   <li><a href="">Перманентный макияж</a></li>
                   <li><a href="">Перманентный макияж</a></li>
                 </ul>
               </li>
               <li><a class="nav-link" href="#reviews">ОТЗЫВЫ</a></li>
               <li><a class="nav-link" href="#ourMasters">НАШИ МАСТЕРА</a></li>
               <li><a class="nav-link" href="#questions">ВОПРОСЫ</a></li>
             </ul> -->
            </nav>
            <nav class="nav mobile-nav">
               <?php wp_nav_menu([
              'theme_location' => 'mobile',
              'container' => null,
              ]);?>
              <!-- <ul>
                <li><a class="nav-link" href="#banner">О НАС</a></li>
                <li class="dropBx">УСЛУГИ
                  <ul class="dropDownMenu">
                    <li><a href="https://www.provisage.ru/">Парикмахерские услуги</a></li>
                    <li><a href="https://www.provisage.ru/kollagirovanie.html">Образ невесты</a></li>
                    <li><a href="#">Педикюр</a></li>
                    <li><a href="#">Эстетическая косметология</a></li>
                    <li><a href="http://kinocoin.co/10855-chernaya-magiya-2018-smotret-onlayn.html">Пирсинг</a></li>
                    <li><a href="#">Лечение волос</a></li>
                    <li><a href="#">Маникюр</a></li>
                    <li><a href="#">Перманентный макияж</a></li>
                    <li><a href="#">Перманентный макияж</a></li>
                    <li><a href="#">Перманентный макияж</a></li>
                    <li><a href="#">Лечение волос</a></li>
                    <li><a href="#">Маникюр</a></li>
                    <li><a href="#">Перманентный макияж</a></li>
                    <li><a href="#">Перманентный макияж</a></li>
                    <li><a href="#">Перманентный макияж</a></li>
                  </ul>
                </li>
                <li><a class="nav-link" href="#reviews">ОТЗЫВЫ</a></li>
                <li><a class="nav-link" href="#ourMasters">НАШИ МАСТЕРА</a></li>
                <li><a class="nav-link" href="#questions">ВОПРОСЫ</a></li>
              </ul> -->
            </nav>
          </div>
        </div>
      </header>
      <div class="content">