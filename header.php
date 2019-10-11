<!DOCTYPE html>
<html lang="en">
<head>
	<title><?php bloginfo('name'); ?><?php wp_title(); ?></title>
	<meta name="description" content="I'm photographer from Georgia.">
	<meta name="keywords" content="photography, photographer, photo, art, retro, colors" />
	<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/img/favicon.ico" type="image/x-icon">

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

	<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Julius+Sans+One" rel="stylesheet">
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">


	<?php if ( is_home() || is_front_page() || is_category() ) : ?>
	<meta property="og:url"                content="<?php echo get_home_url(); ?>" />
	<meta property="og:type"               content="website" />
	<meta property="og:title"              content="Photographer George Mikiashvili" />
	<meta property="og:description"        content="I'm photographer from Georgia. Visit my photos on my website!" />
	<meta property="og:image"              content="<?php echo get_home_url(); ?>/wp-content/uploads/FOR-WEB-500x666.jpg" />
	<?php endif; ?>
	<?php if ( is_single() ) : ?>
	<?php while(have_posts()) : the_post(); ?>
	<meta property="og:url"                content="<?php the_permalink(); ?>" />
	<meta property="og:type"               content="website" />
	<meta property="og:title"              content="<?php the_title(); ?>" />
	<meta property="og:description"        content="I'm photographer from Georgia. Visit also my other photos on my website!" />
	<meta property="og:image"              content="<?php the_post_thumbnail_url('home-thumb'); ?>" />
	<?php endwhile; ?>
	<?php endif; ?>
	<?php wp_head(); ?>
	
	
	<!-- Facebook Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1893036554145494');
      fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1893036554145494&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Facebook Pixel Code -->

</head>

<body>

<div id="preloader">
	<div id="whitediv"></div>
	<div id="photographer">Photographer</div>
	<div id="name">George Mikiashvili</div>
</div>

<header>
		
	<svg id="open-categories" width="28px" height="23px" viewBox="0 0 28 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	        <g id="Mobile" transform="translate(-18.000000, -14.000000)" fill="#424242">
	            <g id="Header" transform="translate(18.000000, 14.000000)">
	                <g id="Categories">
	                    <path d="M25.9617989,10 C26.2430074,10 26.4863762,9.90085339 26.6919054,9.70294371 C26.8972354,9.50522581 27,9.27068751 27,8.99990411 L27,6.99990411 C27,6.72892895 26.8972354,6.49477419 26.6919054,6.29686451 C26.4863762,6.09895484 26.2430074,6 25.9617989,6 L1.03859942,6 C0.757191751,6 0.513822913,6.09895484 0.308293748,6.29686451 C0.102764583,6.49477419 0,6.72912072 0,6.99990411 L0,8.99990411 C0,9.27068751 0.102764583,9.50522581 0.308293748,9.70294371 C0.514022069,9.90085339 0.757390907,10 1.03859942,10 L25.9617989,10 Z" id="Shape"></path>
	                    <path d="M18.9998658,4 C19.2706595,4 19.5052068,3.90104516 19.7033159,3.70313549 C19.9010414,3.50522581 20,3.27087928 20,3.00009589 L20,1.00009589 C20,0.729312494 19.9010414,0.49496596 19.7033159,0.296864512 C19.5052068,0.0991466104 19.2706595,0 18.9998658,0 L1.00013425,0 C0.729148687,0 0.494793165,0.0991466104 0.296875899,0.296864512 C0.098958633,0.494774187 0,0.729312494 0,1.00009589 L0,3.00009589 C0,3.27087928 0.098958633,3.50522581 0.296875899,3.70313549 C0.494984945,3.90104516 0.729340468,4 1.00013425,4 L18.9998658,4 Z" id="Shape"></path>
	                    <path d="M27.7031253,19.2968645 C27.5052089,19.0989548 27.2706625,19 26.9998699,19 L1.00013014,19 C0.729145691,19 0.494791132,19.0989548 0.296874679,19.2968645 C0.0989582263,19.4947742 0,19.7291207 0,19.9999041 L0,21.9999041 C0,22.2706875 0.0989582263,22.5052258 0.296874679,22.7033273 C0.494982911,22.9008534 0.72933747,23 1.00013014,23 L26.9998699,23 C27.2706625,23 27.5052089,22.9008534 27.7031253,22.7033273 C27.9010418,22.5052258 28,22.2706875 28,21.9999041 L28,19.9999041 C28,19.7291207 27.9010418,19.4947742 27.7031253,19.2968645 L27.7031253,19.2968645 Z" id="Shape"></path>
	                    <path d="M20.999878,17 C21.2706684,17 21.5052129,16.9008534 21.7029359,16.7029437 C21.9008508,16.5052258 22,16.2706875 22,15.9999041 L22,14.0000959 C22,13.7295043 21.9008508,13.4947742 21.7029359,13.2970563 C21.5052129,13.0991466 21.2706684,13 20.999878,13 L1.00012204,13 C0.729139789,13 0.494787126,13.0991466 0.296872276,13.2970563 C0.0989574253,13.4947742 0,13.7295043 0,14.0000959 L0,16.0000959 C0,16.2708793 0.0989574253,16.5054176 0.296872276,16.7031355 C0.494978904,16.9010452 0.729331567,17 1.00012204,17 L20.999878,17 Z" id="Shape"></path>
	                </g>
	            </g>
	        </g>
	    </g>
	</svg>

	<div class="logo"><img src="<?php bloginfo('template_directory'); ?>/img/logo.jpg" alt=""></div>
	
	<div id="open-info" class="info-button">
		<h3>Info</h3>
	</div>

	<div class="site-name">
		<h1 class="site-title light"><span class="left">George</span> <span class="right">Mikiashvili</span></h1>
	</div>

</header>

<aside id="categories-ov">
	<i id="close-categories" class="close">
		<span class="l1"></span>
		<span class="l2"></span>
	</i>
	<h1 class="site-title light">George Mikiashvili</h1>

	<div class="list-categories">
		<h2 class="list-title">CATEGORIES</h2>

		<?php wp_nav_menu( array( 'theme_location' => 'categories-menu', 'container_class' => 'wp_nav_menu' ) ); ?>
	</div>
	
</aside>

<aside id="info-ov">

	<i id="close-info" class="close">
		<span class="l1"></span>
		<span class="l2"></span>
	</i>
	
	<h1 class="site-title dark">George Mikiashvili</h1>
	<h3 class="description">I’m Photographer from Georgia</h3>

	<div class="list-contact">
		<h2 class="list-title">CONTACT</h2>
		<ul class="contact-informations">
			<li class="contact-information">
				<a href="mailto:info@georgemikiashvili.com" target="_blank">Email</a>
				<span class="email-account">info@georgemikiashvili.com</span>
				<span class="after-email-account">info@georgemikiashvili.com</span>
			</li>
			<li class="contact-information">
				<a href="tel:+995579560303" target="_blank">Phone</a>
				<span class="phone-number">(+995) 579 56 03 03</span>
				<span class="after-phone-number">(+995) 579 56 03 03</span>
			</li>
		</ul>
	</div>

	<div class="list-follow">
		<h2 class="list-title">FOLLOW</h2>
		<ul class="follow-informations">
			<li class="follow-information"><a href="https://www.facebook.com/George-photography-123778254916452/" target="_blank">Facebook</a></li>
			<li class="follow-information"><a href="https://www.instagram.com/arrival.r/" target="_blank">Instagram</a></li>
		</ul>
	</div>

	<div class="developer">
		<a href="http://mEgaweb.ge" target="_blank">by mEgaweb</a>
	</div>
	
</aside>

<div id="content">