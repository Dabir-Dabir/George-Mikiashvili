/////////////////////
// config.js
/////////////////////

// Gallery grid
var columnsMargin = 5;
var columnImage = 5;

var top_line_height = 50;

// Devices widths
var mobileWidth = 400;
var tabletWidth = 767;
var laptopWidth = 959;
var desktopWidth = 1500;
var desktopFullWidth = 1921;

//////////////////////

// Variables
var windowWidth = $(window).width();
var windowHeight = $(window).height();


// Detect portrait or landscape
var window_orientation = '';

function windowOrientation() {
	if ($(window).width() > $(window).height()) {
		window_orientation = 'landscape';
	} else {
		window_orientation = 'portrait';
	}
}

// Ajax load page
var lasturl=""; //here we store the current URL hash

/////////////////////////
/////// Fit to size
/////////////////////////

function fitToSize() {

		var imageOffset = $('#lightbox-image').offset().top;
		alert(imageOffset);
		var imageCalcHeight = $(window).height() - 65;
		var imageHeight = $('#lightbox-image').height();
		var imageCalcWidth = imageCalcHeight / imageHeight * $('#lightbox-image').width();

		if (imageHeight > imageCalcHeight) {

			$('html, body').animate({ scrollTop: 0 }, 1);

			$('#view').css({display: 'block'});

			$('#view').click(function(){
				$('#image-container').toggleClass('fited');
				if ($('#image-container').hasClass('fited')) {	

					if ($(window).width() < tabletWidth) {
						$('html, body').animate({ scrollTop:  imageOffset - 57 }, 700);
					}

					$('#lightbox-image').width(imageCalcWidth);

				} else {
					$('#lightbox-image').width('');
				}
			});
		} else {
			$('#view').css({display: 'none'});

			if ($(window).width() >= tabletWidth) {
				var align_center = $(window).height()/2 - $('#lightbox-image').height()/2 - 33;
				$('#lightbox-image').css({top: align_center});
			}
		}
}


/////////////////////
//// Gallery Grid
/////////////////////

function createGalleryGrid() {

	var column = 0;
	var column1 = 0;
	var column2 = 0;
	var column3 = 0;
	var column4 = 0;

	function chooseColumnCount(columns) {
		switch (columns) {
			case 1:
				column += top_line_height;

				$('.image-container').each(function(index) {

					var imageWidth = $(this).data('width');
					var imageHeight = $(this).data('height');
					var calcImageWidth = $(this).width();
					var calcImgHeight = calcImageWidth * imageHeight / imageWidth;

					$(this).css({
						top: column,
						height: calcImgHeight,
						left: '0'
					})
					column += calcImgHeight + columnImage;
				});
				return;

				break;

			case 2:
				column1 += top_line_height;
				column2 += top_line_height;

				$('.image-container').each(function(index) {

					var imageWidth = $(this).data('width');
					var imageHeight = $(this).data('height');
					var calcImageWidth = $(this).width();
					var calcImgHeight = calcImageWidth * imageHeight / imageWidth;

					if (column1 <= column2) {
						$(this).css({
							top: column1,
							height: calcImgHeight,
							left: '2%'
						});
						column1 += calcImgHeight + columnImage + 30;

					} else {
						$(this).css({
							top: column2,
							height: calcImgHeight,
							left: '52%'
						});
						column2 += calcImgHeight + columnImage + 30;

					}
				});

				if (column1 >= column2) {
					var longestColumn = column1;
				} else {
					var longestColumn = column2;
				}
				$('#images-grid').height(longestColumn);
				return;

				break;

			case 3:
				$('.image-container').each(function(index) {

					var imageWidth = $(this).data('width');
					var imageHeight = $(this).data('height');
					var calcImageWidth = $(this).width();
					var calcImgHeight = calcImageWidth * imageHeight / imageWidth;

					if (column1 <= column2 && column1 <= column3) {
						$(this).css({
							top: column1,
							height: calcImgHeight,
							left: '0'
						});
						column1 += calcImgHeight + columnImage + 50;

					} else if (column2 < column1 && column2 <= column3) {
						$(this).css({
							top: column2,
							height: calcImgHeight,
							left: '33.3%'
						});
						column2 += calcImgHeight + columnImage + 50;

					} else {
						$(this).css({
							top: column3,
							height: calcImgHeight,
							left: '66.6%'
						});
						column3 += calcImgHeight + columnImage + 50;

					}
				});

				if (column1 >= column2 && column1 >= column3) {
					var longestColumn = column1;
				} else if (column2 > column1 && column2 >= column3) {
					var longestColumn = column2;
				} else {
					var longestColumn = column3;
				}
				$('#images-grid').height(longestColumn);
				return;

				break;

			case 4:
				$('.image-container').each(function(index) {

					var imageWidth = $(this).data('width');
					var imageHeight = $(this).data('height');
					var calcImageWidth = $(this).width();
					var calcImgHeight = calcImageWidth * imageHeight / imageWidth;

					if (column1 <= column2 && column1 <= column3 && column1 <= column4) {
						$(this).css({
							top: column1,
							height: calcImgHeight,
							left: '0'
						});
						column1 += calcImgHeight + columnImage + 80;

					} else if (column2 < column1 && column2 <= column3 && column2 <= column4) {
						$(this).css({
							top: column2,
							height: calcImgHeight,
							left: '25%'
						});
						column2 += calcImgHeight + columnImage + 80;

					} else if (column3 < column1 && column3 < column2 && column3 <= column4) {
						$(this).css({
							top: column3,
							height: calcImgHeight,
							left: '50%'
						});
						column3 += calcImgHeight + columnImage + 80;

					} else {
						$(this).css({
							top: column4,
							height: calcImgHeight,
							left: '75%'
						});
						column4 += calcImgHeight + columnImage + 80;

					}
				});

				if (column1 >= column2 && column1 >= column3 && column1 >= column4) {
					var longestColumn = column1;
				} else if (column2 > column1 && column2 >= column3 && column2 >= column4) {
					var longestColumn = column2;
				} else if (column3 > column1 && column3 > column2 && column3 >= column4) {
					var longestColumn = column2;
				} else {
					var longestColumn = column3;
				}
				$('#images-grid').height(longestColumn);
				return;

				break;
		}
	}	

	// Columns count on screen sizes
	if ($(window).width() > desktopWidth) {

		chooseColumnCount(4);

	} else if ($(window).width() > laptopWidth) {

		chooseColumnCount(3);

	} else {

		chooseColumnCount(2);

	}

}


////////////////////////
/////// Lightbox
////////////////////////
var imageWidth, imageHeight, imageCurrentHeight, imageCalcWidth, imageCalcHeight, imageViewHeight;

function openLightbox() {
	var index = 1;


	// Main functions
	function fitImageToHeight() {
		imageWidth = $('.image-container').eq(index).data('width');
		imageHeight = $('.image-container').eq(index).data('height');
		imageCurrentHeight = $('#lightbox-image').height();
		// var imageOffset = $('.image-container').eq(index).offset().top;
		imageCalcWidth = $('#lightbox').width();
		if ( windowWidth > tabletWidth + 1 ) imageCalcWidth = imageCalcWidth * .77;
		imageCalcHeight = imageHeight * imageCalcWidth / imageWidth;
		imageViewHeight = $(window).height() - 55;
		var fitted = true;



		if (imageCalcHeight >= $(window).height() - 55) {

			$('#view').css({display: 'block'});
			$('#lightbox-image').css({top: ''});
			$('#lightbox-image').height($(window).height() - 55);
			$('#lightbox-image').width('');

			$('#view').click(function(){
				if ( fitted ) {

					fitted = false;
					$('#lightbox-image').height('');
					$('#lightbox-image').width('100%');
					$('#lightbox').removeClass('fitted');	

					// if ($(window).width() <= tabletWidth) {
					// 	$('html, body').animate({ scrollTop:  imageOffset - 57 }, 700);
					// }


				} else {
					fitted = true;
					$('#lightbox-image').height($(window).height() - 55);
					$('#lightbox-image').width('');
					$('#lightbox').addClass('fitted');	
				}
			});
		} else {
			$('#view').css({display: 'none'});
			$('#lightbox-image').height('');
			$('#lightbox-image').width('');

			if ( windowWidth > tabletWidth + 1 ) {
				var align_center = $(window).height()/2 - imageCalcHeight/2 - 33;
				$('#lightbox-image').css({top: align_center, position: 'absolute'});
			}
		}
	}



	// 'Close' button
	$('#close-lightbox').click(function() {
		$('#lightbox').removeClass('opened');
	});

	// Click on image in grid
	$('.image-container').click(function() {
		$('#lightbox').addClass('opened');
		$('#lightbox-image').addClass('faid');
		$('#image-loader-wrap').first().addClass('loading');
		index = $(this).index();
		fitImageToHeight();

		$('#next-image').css('visibility', 'visible');
		$('#prev-image').css('visibility', 'visible');
		if (index === 0) {
			$('#prev-image').css('visibility', 'hidden');
		} else if (index === $('.image-container').length - 1) {
			$('#next-image').css('visibility', 'hidden');
		}


		var currentImage;
		if (windowWidth <= mobileWidth) {

			if ($('.image-container').eq(index).find('img').first().data('src') != undefined) {
				currentImage = $('.image-container').eq(index).find('img').first().data('src');
			} else {
				currentImage = $('.image-container').eq(index).find('img').first().attr('src');
			}

		} else if (windowWidth <= laptopWidth) {

			currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');

		} else {

			currentImage = $('.image-container').eq(index).find('img').first().data('big-image');

		}

		var currentImageTitle = $('.image-container').eq(index).find('h3').first().text();
		$('#lightbox-image').attr('src', currentImage).on('load', function(){
			setTimeout(function(){$('#lightbox-image').removeClass('faid'); $('#image-loader-wrap').first().removeClass('loading');}, 300);
		});
		$('#lightbox-image-title').text(currentImageTitle);
		$('#hashtags').text($('.image-container').eq(index).data('hashtags'));
	});

	// 'Previous' button
	$('#prev-image').click(function() {
		if (index > 0) {
			$('#lightbox-image').addClass('faid');
			$('#image-loader-wrap').first().addClass('loading');

			index = index - 1;
			fitImageToHeight();
			
			// Lightbox nav arrows visibility
			if (index === 0) {
				$(this).css('visibility', 'hidden');
			}
			$('#next-image').css('visibility', 'visible');
			
			

			if (windowWidth <= mobileWidth) {

				if ($('.image-container').eq(index).find('img').first().data('src') != undefined) {
					var currentImage = $('.image-container').eq(index).find('img').first().data('src');
				} else {
					var currentImage = $('.image-container').eq(index).find('img').first().attr('src');
				}

			} else if (windowWidth <= laptopWidth) {

				var currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');

			} else {

				var currentImage = $('.image-container').eq(index).find('img').first().data('big-image');

			}

			var currentImageTitle = $('.image-container').eq(index).find('h3').first().text();
			$('#lightbox-image').attr('src', currentImage).on('load', function(){
				setTimeout(function(){$('#lightbox-image').removeClass('faid'); $('#image-loader-wrap').first().removeClass('loading');}, 300);
			});
			$('#lightbox-image-title').text(currentImageTitle);
			$('#hashtags').text($('.image-container').eq(index).data('hashtags'));
			$('#prev-image img').removeClass('clicked');
			setTimeout(function(){$('#prev-image img').addClass('clicked');}, 100);
		}
	});

	// 'Next' button
	$('#next-image').click(function() {
		if (index < $('.image-container').length - 1) {
			$('#lightbox-image').addClass('faid');
			$('#image-loader-wrap').first().addClass('loading');
			index = index + 1;
			fitImageToHeight();
			
			// Lightbox nav arrows visibility
			if (index === $('.image-container').length - 1) {
				$('#next-image').css('visibility', 'hidden');
			}
			$('#prev-image').css('visibility', 'visible');


			if (windowWidth <= mobileWidth) {

				if ($('.image-container').eq(index).find('img').first().data('src') != undefined) {
					var currentImage = $('.image-container').eq(index).find('img').first().data('src');
				} else {
					var currentImage = $('.image-container').eq(index).find('img').first().attr('src');
				}

			} else if (windowWidth <= laptopWidth) {

				var currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');

			} else {

				var currentImage = $('.image-container').eq(index).find('img').first().data('big-image');

			}

			var currentImageTitle = $('.image-container').eq(index).find('h3').first().text();
			$('#lightbox-image').attr('src', currentImage).on('load', function(){
				setTimeout(function(){$('#lightbox-image').removeClass('faid'); $('#image-loader-wrap').first().removeClass('loading')}, 300);
			});
			var currentImageTitle = $('.image-container').eq(index).find('h3').first().text();
			$('#lightbox-image-title').text(currentImageTitle);
			$('#hashtags').text($('.image-container').eq(index).data('hashtags'));
			$('#next-image img').removeClass('clicked');
			setTimeout(function(){$('#next-image img').addClass('clicked');}, 100);
		}
	});
}

///////////////////////////
//// Ajax load pages
///////////////////////////

function ajaxLoadPage() {

	$('.ajax').click(function() {
		var url = $(this).data('href');
        history.pushState({url}, '', url);
		checkURL(url);
	});

	// $('.logo').click(function(e) {
	// 	e.preventDefault();
	// 	if ( !$('logo').first().attr('href') == window.location ) {
	// 		var url = $(this).attr('href');
	//         history.pushState({url}, '', url);
	// 		checkURL(url);
	// 	}
	// });

	$('.menu a').click(function(e) {
		e.preventDefault();

		if ( !$(this).parent().hasClass('menu-item-has-children') ) {
			$('#mobile-nav').removeClass('opened');
			$('.top-line').removeClass('opened');
			var url = $(this).attr('href');
        	history.pushState({url}, '', url);
			checkURL(url);
		}
	});

}

function checkURL(pathname) {
    if(!pathname) pathname=window.location.pathname;    //if no parameter is provided, use the pathname value from the current address

    if(pathname != lasturl) // if the pathname value has changed
    {
        $('.loader-wrap').addClass('loading');
        lasturl=pathname;   //update the current pathname
        loadPage(pathname); // and load the new page
    }
}

function loadPage(url) {

	$('#content').load(url + ' #content > *', function() {

		$("html, body").animate({ scrollTop: 0 }, 10);
		setTimeout(function(){$('.loader-wrap').removeClass('loading')}, 1000);

        var current_page_title = $('#inner').data('page-title');
		$(document).attr('title', current_page_title);
	});

}

// hilight current menu item
function currentMenuItem() {

	var cur_url = window.location.href;
	var firstChar = cur_url.indexOf("/", 7);
	var lastChar = cur_url.indexOf("/", firstChar + 1);

	if (lastChar > -1) {
		var cur_word = cur_url.substring(firstChar + 1, lastChar);
	} else {
		var cur_word = 'home';
	}

	$('.menu li').each(function(){

		if ( $(this).hasClass(cur_word) ) {

			$(this).addClass('hilight');

		} else if ( $(this).hasClass('hilight') ) {

			$(this).removeClass('hilight');

		}
	});
}

// Categories Overlay Open-Close on Mobile and Tablet Devices
function openCategoriesOvMobile() {
	if ($(window).width() <= tabletWidth) {
		$('#open-categories').click(function() {
			$('#categories-ov').addClass('opened');
		});

		$('#close-categories').click(function() {
			$('#categories-ov').removeClass('opened');
		});
	} else {
		$('#categories-ov').removeClass('opened');
	}
}



$(document).ready(function($) {

	createGalleryGrid();
	openLightbox();
	ajaxLoadPage();
	currentMenuItem();
	openCategoriesOvMobile();


    $('.img').Lazy();

	
	// Info Overlay Open-Close
	$('#open-info').click(function() {
		$('#info-ov').addClass('opened');
	});
	$('#close-info').click(function() {
		$('#info-ov').removeClass('opened');
	});

	// Closu categories overlay after click
	$('#categories-ov ul a').click(function() {
		$('#categories-ov').removeClass('opened');
	});

	if ( $('.prev-image').attr('href') == window.location.href ) {
		$('.prev-image').css('display', 'none');
	} else if ( $('.next-image').attr('href') == window.location.href ) {
		$('.next-image').css('display', 'none');
	}
});

$(window).on('resize', function() {

	createGalleryGrid();
	openLightbox();
	openCategoriesOvMobile();

	
    $('.img').Lazy();

});

$(document).ajaxComplete(function() {

	createGalleryGrid();
	openLightbox();
	ajaxLoadPage();
	currentMenuItem();
	openCategoriesOvMobile();

	
    $('.img').Lazy();
});

window.addEventListener('popstate', function(event) {
    loadPage(window.location);
});











