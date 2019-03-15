jQuery( document ).ready(function() {
	$('#import_fonts_html').load('/resources/html/fonts.html');
	$('#import_menu_html').load('/resources/html/menu.html', function(){ adjustMenuSize(); });
	$('#import_footer_html').load('/resources/html/footer.html');

	$( '#under-development' ).click(function() {
		 toggleBottomMessage();
	});
});

$( window ).on( 'resize', function() {
	adjustMenuSize();
});
