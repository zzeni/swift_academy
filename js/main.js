'use_strict';

$(document).on("ready", function () {
  $(window).on('scroll', function (e) {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;
    if (distanceY > 150) {
      if (!$('header').hasClass('collapse'))
        $('header').addClass('collapse');
        $('aside').addClass('expand');
    } else {
      if ($('header').hasClass('collapse'))
        $('header').removeClass('collapse');
        $('aside').removeClass('expand');
    }
  });

  $(window).on('resize', function () {

    $('#item-preview').each(function () {
      var width = $(this).width();
      $(this).find('iframe').height(width * 0.7);
    });

    var min_height = $(window).height() - $('footer').outerHeight() - $('header').outerHeight();

    if (min_height > 0) {
      $('main').css('min-height', '' + min_height + 'px');
    }
  });

  $(window).resize(); // trigger the resize event in order to set footer position

});