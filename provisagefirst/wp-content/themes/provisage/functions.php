<?php 

	define('Q_THEME_ROOT', get_template_directory_uri());
	define('Q_JS_DIR', Q_THEME_ROOT . '/assets/js');
	define('Q_IMG_DIR', Q_THEME_ROOT . '/assets/images');
	add_action('wp_enqueue_scripts', function(){
		wp_enqueue_style('theme', get_stylesheet_uri());

		wp_deregister_script('jquery');
		wp_enqueue_script('jquery', Q_JS_DIR . '/jquery-3.3.1.min.js' );
		wp_enqueue_script('libs', Q_JS_DIR . '/libs.min.js' );
		wp_enqueue_script('main', Q_JS_DIR . '/main.js' );
	});
	add_action('after_setup_theme','theme_after_setup');
	function theme_after_setup() {
		register_nav_menu( 'top', 'Главное Меню');
		register_nav_menu( 'mobile', 'Мобильное Меню');
		add_theme_support( 'post-thumbnails' );
	}
	
	add_action( 'init', function(){
		
		add_theme_support( 'post-thumbnails' );
	
	register_post_type('reviews', array(
		'labels' => array(
			'name'               => 'Отзывы', // основное название для типа записи
			'singular_name'      => 'reviews', // название для одной записи этого типа
			'add_new'            => 'Добавить отзыв', // для добавления новой записи
			'add_new_item'       => 'Добавление заголовка', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование', // для редактирования типа записи
			'new_item'           => 'Новое ____', // текст новой записи
			'view_item'          => 'Смотреть ____', // для просмотра записи этого типа.
			'search_items'       => 'Искать ____', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => 'Отзывы', // название меню
		),
		'public'              => true,
		'show_ui'             => null,
		'menu_position'       => null,
		'menu_icon'           => 'dashicons-sticky',
		'hierarchical'        => false,
		'supports'            => array('thumbnail'), 
	), 
	);
	register_post_type('banner', array(
		'labels' => array(
			'name'               => 'Баннер', // основное название для типа записи
			'singular_name'      => 'banner', // название для одной записи этого типа
			'add_new'            => 'Добавить отзыв', // для добавления новой записи
			'add_new_item'       => 'Добавление заголовка', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование', // для редактирования типа записи
			'new_item'           => 'Новое ____', // текст новой записи
			'view_item'          => 'Смотреть ____', // для просмотра записи этого типа.
			'search_items'       => 'Искать ____', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => 'banner', // название меню
		),
		'public'              => true,
		'show_ui'             => null,
		'menu_icon'           => 'dashicons-sticky',
		'hierarchical'        => false,
		'supports'            => array('title', 'editor'), 
	),
);
	register_post_type('faq', array(
		'labels' => array(
			'name'               => 'faq', // основное название для типа записи
			'singular_name'      => 'faq', // название для одной записи этого типа
			'add_new'            => 'Добавить вопрос', // для добавления новой записи
			'add_new_item'       => 'Добавление заголовка', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование', // для редактирования типа записи
			'new_item'           => 'Новое ____', // текст новой записи
			'view_item'          => 'Смотреть ____', // для просмотра записи этого типа.
			'search_items'       => 'Искать ____', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => 'faq', // название меню
		),
		'public'              => true,
		'show_ui'             => null,
		'menu_icon'           => 'dashicons-sticky',
		'hierarchical'        => false,
		'supports'            => array('title'), 
	),
);
	register_post_type('contacts', array(
		'labels' => array(
			'name'               => 'contacts', // основное название для типа записи
			'singular_name'      => 'Контакты', // название для одной записи этого типа
			'add_new'            => 'Добавить вопрос', // для добавления новой записи
			'add_new_item'       => 'Добавление заголовка', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование', // для редактирования типа записи
			'new_item'           => 'Новое ____', // текст новой записи
			'view_item'          => 'Смотреть ____', // для просмотра записи этого типа.
			'search_items'       => 'Искать ____', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => 'contacts', // название меню
		),
		'public'              => true,
		'show_ui'             => null,
		'menu_icon'           => 'dashicons-sticky',
		'hierarchical'        => false,
		'supports'            => array('title'), 
	),
);
});
	function getBanner() {
		$args = array(
			'orderby' => 'date',
			'order' => 'ASC',
			'post_type' => 'banner'	
		);
		return get_posts($args);
	}
	function getFaq() {
		$args = array(
			'orderby' => 'date',
			'order' => 'ASC',
			'post_type' => 'faq'	
		);


		$faqs = [];

		foreach (get_posts($args) as $post) {
			$faq = get_fields($post->ID);
			$faq['name'] = $post->post_title;
			$faqs[] = $faq;
		}
		return $faqs;
	}

	function getReviews() {
		$args = array(
			'orderby' => 'date',
			'order' => 'ASC',
			'post_type' => 'reviews'	
		);

		$reviews = [];

		foreach(get_posts($args) as $post) {
			$review = get_fields($post->ID);
			$review['img'] = get_the_post_thumbnail_url( $post->ID, 'thumbnail' );
			$reviews[] = $review;	
		}
		return $reviews;
	}


	add_filter('wpcf7_form_elements', function($content) {
    $content = preg_replace('/<(span).*?class="\s*(?:.*\s)?wpcf7-form-control-wrap(?:\s[^"]+)?\s*"[^\>]*>(.*)<\/\1>/i', '\2', $content);
        
    return $content;
	});
?>