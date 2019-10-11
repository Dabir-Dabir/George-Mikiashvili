<?php get_header(); ?>

<section id="container-window">

	<div class="mobile-site-name">
		<h1>George Mikiashvili</h1>
	</div>

<div id="images-grid">

	<?php
	wp_reset_query();
		$gallery = get_post_gallery( get_the_ID(), false );
		$args = array( 
		    'post_type'      => 'attachment', 
		    'posts_per_page' => -1, 
		    'post_status'    => 'published', 
	        'order'      	 => 'ASC',
	        'orderby'    	 => 'post__in',
		    'post__in'       => explode( ',', $gallery['ids'] ) 
		); 
		$attachments = get_posts( $args );

		foreach ( $attachments as $attachment ) :

		    $image_alt = get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true);
		    $image_title = $attachment->post_title;
		    $hashtags = $attachment->post_excerpt;
		    $small_image = wp_get_attachment_image_src( $attachment->ID, 'medium' );
		    $medium_image = wp_get_attachment_image_src( $attachment->ID, 'large' );
		    $big_image = wp_get_attachment_image_src( $attachment->ID, 'full' );

		 ?>
	        <div class="image-container" data-width="<?php echo $small_image[1]; ?>" data-height="<?php echo $small_image[2]; ?>" data-hashtags="<?php echo $hashtags; ?>">
	            <img src='' data-src="<?php echo $small_image[0]; ?>" data-medium-image="<?php echo $medium_image[0]; ?>" data-big-image="<?php echo $big_image[0]; ?>" class="img" alt="<?php echo $image_title; ?>" />
	            <span class="img-ov">
					<h3><?php echo $image_title; ?></h3>
				</span>
			</div>
            <?php
        endforeach; 
    ?>

	<div class="developer bottom">
		<a href="http://mEgaweb.ge" target="_blank">by mEgaweb</a>
	</div>
</div>
</section>


<div id="lightbox" class="fitted">

    <div id="close-lightbox" class="back">
        <img src="<?php bloginfo('template_directory'); ?>/img/arrow-down.png" alt="Go Back">
		<h5><span>Go</span> back</h5>
    </div>

	<i id="view" class="view fa fa-eye-slash"></i>
	<h3 id="lightbox-image-title" class="image-title"></h3>

	<div id="prev-image" class="prev-image"><img src="<?php bloginfo('template_directory'); ?>/img/arrow-down.png" alt=""></div>
	<div class="prev-text">Previous Image</div>
	<div class="after-prev-text">Previous Image</div>
	<div id="next-image" class="next-image"><img src="<?php bloginfo('template_directory'); ?>/img/arrow-down.png" alt=""></div>
	<div class="next-text">Next Image</div>
	<div class="after-next-text">Next Image</div>

    <img id="lightbox-image" class="single-image" src="" alt="">

    <ul class="share-buttons">
		<li class="share-button"><a href="https://www.facebook.com/sharer/sharer.php ?&p[url]=<?php the_permalink(); ?>" target="_blank"><i class="fa fa-facebook"></i></a></li>
		<li class="share-button"><a href="https://plus.google.com/share?url=<?php the_permalink(); ?>" target="_blank"><i class="fa fa-google"></i></a></li>
		<li class="share-button"><a href="https://twitter.com/home?status=<?php the_permalink(); ?>" target="_blank"><i class="fa fa-twitter"></i></a></li>
	</ul>

	<div id="image-loader-wrap"><img src="<?php echo get_bloginfo('template_directory'); ?>/img/loader.gif" alt="Loader" class="loader"></div>
</div>

<?php get_footer(); ?>