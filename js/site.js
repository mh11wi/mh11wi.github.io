history.scrollRestoration = "manual";

// Title animation after page (background image) loads
$(window).on('load', function() {
  $('#myTitle').slideDown(1500);
});

$(document).ready(function() {
  // Page loaded to particular hash
  if (window.location.hash) {
    var target = $(window.location.hash);
    var h = $('.navbar-header').height();
    $('html, body').scrollTop(target.offset().top - h + 1);
    history.replaceState({}, document.title, window.location.href.split('#')[0]);
  }
    
  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#myNavbar',
    offset: $('.navbar-header').height()
  });
    
  // Smooth scrolling between anchors
  $('a[href*="#"]').click(function(e) {
    this.blur();
    var target = $(this.hash);
    if (target.length) {
      var h = $('.navbar-header').height();
      $('html, body').animate({
        scrollTop: target.offset().top - h + 1
      }, 1000);
      e.preventDefault();
    }
  });

  // Collapse menu on scroll
  $(window).scroll(function() {
    $('.navbar-collapse').collapse('hide');
  });
});
