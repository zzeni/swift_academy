'use_strict';      
      
$(document).on("ready", function() {
  $(window).on('scroll', function(e) {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;
    if (distanceY > 150) {
      if (!$('header').hasClass('collapse'))
        $('header').addClass('collapse');
    }
    else {
      if ($('header').hasClass('collapse'))
        $('header').removeClass('collapse');
    }
  });
  
  $(window).on('resize', function() {
    
    $('#item-preview').each(function() {
      var width = $(this).width();
      $(this).find('iframe').height(width*0.7);
    });
    
    var footerBottomOffset = $('footer')[0].getBoundingClientRect().bottom
    if ($(window).height() > footerBottomOffset) {
      $('footer').addClass('fixed');
    } else {
      $('footer').removeClass('fixed');
    }
  });
  
  $(window).resize(); // trigger the resize event in order to set footer position
});