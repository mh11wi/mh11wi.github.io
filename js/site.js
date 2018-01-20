$(document).ready(function() {
    
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
	this.blur();
	var target = $(this.hash);
	if (target.length) {
	    var h = $('.navbar-header').height();
	    $('html, body').animate({
		scrollTop: target.offset().top - h + 1
	    }, 1000, function() {
		//$(this).removeClass("active");
	    });
	    return false;
        }
    });

    //Collapse menu on scroll
    $(window).scroll(function() {
	$('.navbar-collapse').collapse('hide');
    });
    
    //Set year in footer
    $('#yr').html(new Date().getFullYear());
    
});
