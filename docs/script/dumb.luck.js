jQuery( document ).ready(function() {
	"use strict";

	checkWidth();

	let $window = $(window);

	$window.on('resize orientationchange', function() {
		checkWidth();
	});

	$( '#burger-menu' ).on('click', function() {
		$( '#nav-links' ).toggle();
	});

	checkIfHidemeOnScreen();

	$( document ).on('scroll', function() {
		checkIfHidemeOnScreen();

		if ($window.scrollTop() <= 432) {
			$( '.navigation_bar' ).fadeOut();
			$( '#nav-links' ).is(':visible') ? $( '#nav-links' ).fadeOut() : null;
		} else {
			$( '.navigation_bar' ).fadeIn();
		}
	});
});

$( window ).on( 'load', function() {
	if ($( this ).scrollTop() <= 632) {
		$( '.navigation_bar' ).hide();
	}
	$( '#nav-links' ).hide();
	if ($( '#nav-links' ).is(':hidden')) {
		$( '#loading' ).hide();
	}
});

function checkWidth() {
	if ( $( window ).width() < 700) {
		$( '#about-us' ).css('flex-direction', 'column');
		$( '#we-love-games' ).css('overflow-x', 'auto');
	} else {
		$( '#about-us' ).css('flex-direction', 'row');
		$( '#we-love-games' ).css('overflow-x', 'hidden');
	}
}

function toggleNavLinks() {
	$( '#burger-menu' ).on('click', function() {
		$( '#nav-links' ).toggle();
	});
}

function checkIfHidemeOnScreen() {
	/* Check the location of each desired element */
  $('.hideme').each( function(i){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){

          $(this).animate({'opacity':'1'},500);

      }

  });
}
