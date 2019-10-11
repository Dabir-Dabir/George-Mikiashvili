<?php 

// register menus
function register_categories_menu() {
  register_nav_menu('categories-menu',__( 'Categories Menu' ));
}
add_action( 'init', 'register_categories_menu' );

// Add featured image box
function add_featured_image_box()  
{  
    add_meta_box('postimagediv', __('Page Background Image'), 'post_thumbnail_meta_box', 'page', 'side', 'low');  
}
add_action('do_meta_boxes', 'add_featured_image_box'); 


// Add featured image to admin panel
add_image_size( 'crunchify-admin-post-featured-image', 120, 120, fase );
 
// Add the posts column filter
add_filter('manage_posts_columns', 'crunchify_add_post_admin_thumbnail_column', 2);
 
// Add the column
function crunchify_add_post_admin_thumbnail_column($crunchify_columns){
	$crunchify_columns['crunchify_thumb'] = __('Featured Image');
	return $crunchify_columns;
}
 
// Let's manage Post Admin Panel Column
add_action('manage_posts_custom_column', 'crunchify_show_post_thumbnail_column', 5, 2);
 
// Here we are grabbing featured-thumbnail size post thumbnail and displaying it
function crunchify_show_post_thumbnail_column($crunchify_columns, $crunchify_id){
	switch($crunchify_columns){
		case 'crunchify_thumb':
		if( function_exists('the_post_thumbnail') )
			echo the_post_thumbnail( 'crunchify-admin-post-featured-image' );
		else
			echo 'hmm... your theme doesn\'t support featured image...';
		break;
	}
}

// Cange column order
add_filter('manage_posts_columns', 'thumbnail_column');
function thumbnail_column($columns) {
  $new = array();
  foreach($columns as $key => $title) {
    if ($key=='title') // Put the Thumbnail column before the Title column
      $new['crunchify_thumb'] = 'Thumbnail';
    $new[$key] = $title;
  }
  return $new;
}


// Thumbnails
add_theme_support( 'post-thumbnails' );

add_image_size( 'home-thumb', 1200, 9999 );
add_image_size( 'large-thumb', 1200, 9999 );

