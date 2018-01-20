$(document).ready(function() {

    function hasTouch() {
	return 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;
    }

    if (hasTouch()) { // remove all :hover stylesheets
	try { // prevent exception on browsers not supporting DOM styleSheets properly
            for (var si in document.styleSheets) {
		var styleSheet = document.styleSheets[si];
		if (!styleSheet.rules) continue;

		for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;

                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
			styleSheet.deleteRule(ri);
                    }
		}
            }
	} catch (ex) {}
    }
    
    //Page loaded to particular hash
    if (window.location.hash) {
	var target = $(window.location.hash);
	var h = $('.navbar-header').height();
	$('html, body').scrollTop(target.offset().top - h + 1);
    }
    
    //Title animation
    $('#myTitle').slideDown(1500);
    
    //Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
	target: '#myNavbar',
	offset: $('.navbar-header').height()
    });
    
    //Smooth scrolling between anchors
    $('a[href*="#"]').click(function(e) {
	e.preventDefault();
	this.blur();
	var target = $(this.hash);
	if (target.length) {
	    var h = $('.navbar-header').height();
	    $('html, body').animate({
		scrollTop: target.offset().top - h + 1
	    }, 1000);
        }
    });

    //Collapse menu on scroll
    $(window).scroll(function() {
	$('.navbar-collapse').collapse('hide');
    });
    
    //Set year in footer
    $('#yr').html(new Date().getFullYear());
    
});
