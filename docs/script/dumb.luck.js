jQuery( document ).ready(function() {
	"use strict";

	checkWidth();

	$( window ).on('resize orientationchange', function() {
		checkWidth();
	});

	$( '#burger-menu' ).on('click', function() {
		$( '#nav-links' ).toggle();
	});

	$( document ).on('scroll', function() {
		if ($( window ).scrollTop() <= 632) {
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
	} else {
		$( '#about-us' ).css('flex-direction', 'row');
	}
}
