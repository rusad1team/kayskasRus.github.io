<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'provisagefirst' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'X_q[l%f xydx|dWD/~B5a&QENQ# =N~Y0B@C. ,<Z1F-w}a&],yZxH5!lBdX&=f>' );
define( 'SECURE_AUTH_KEY',  'p1*or8oWen3] & D0V~9Od?mv1#VWJX7Z$D^X%/aTU(&Rw1Z~**c!Vs:wy3oa(*M' );
define( 'LOGGED_IN_KEY',    'em,So.<X<6ruEFj).<UOS.CV~3BE|KM1^P&:nw=#O~N5WRl.+Z|)ZEUR`H#p`Hm.' );
define( 'NONCE_KEY',        'hk9K^P$<cAiKVX_*H13`gbvidnSU7bmhNsZxufGWC-:QPA37QaAtpmV=a P+zhSG' );
define( 'AUTH_SALT',        '*JJ|B=gh|0iP#lYS 9w]GcUoGTRTE@{`B9qNz/4YpTfo?gqnYQM(/55dBYK}0Dz)' );
define( 'SECURE_AUTH_SALT', 'O-4pxWz9v!H4/KKT oKGl_[!ZB#pohZgjPxUYEU*0dP ,i(tO#.r?BuQmWqJ]rVu' );
define( 'LOGGED_IN_SALT',   '^-y~=|WxgPc/;lMsoBNA|54020jX^=2P=;12]bDFM:VMmS`!k4]FItVJQn@bhY2;' );
define( 'NONCE_SALT',       'u]~uA^PhYW-#Fx;ybZ*osgRXf&ye?3f-oW4~bKYgK`@$?mf@O+KRkz7dJJg~@YH[' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
