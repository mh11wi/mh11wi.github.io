history.scrollRestoration = "manual";

$(window).on('load', function() {
  // Title animation after page (background image) loads
  $('#myTitle').slideDown(1500);
  
  // Add active class to navbar items on scroll
  var sections = document.getElementsByTagName("section");
  var observer = new IntersectionObserver((entries) => {
    for (entry of entries) {
      if (entry.isIntersecting) {
        $('li.active').removeClass('active');
        const hash = `#${entry.target.id}`;
        $(`[href="${hash}"]`).parent().addClass('active');
      }
    }
  },
  {
    rootMargin: "-50% 0px",
  });  
  for (i = 0; i < sections.length; i++) {
    observer.observe(sections[i]);
  }
});

$(document).ready(function() {
  // Page loaded to particular hash
  if (window.location.hash) {
    var target = $(window.location.hash);
    var h = $('.navbar-header').height();
    $('html, body').scrollTop(target.offset().top - h + 1);
    history.replaceState({}, document.title, window.location.href.split('#')[0]);
  }
    
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
