$(document).on("ready", function () {
  'use_strict';

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
  
  $('#midstates a').click(function (e) {
    e.preventDefault();
    $("#item-preview iframe").attr('src', $(this).attr('href'));
  });

});


// <!-- Google Analytics tracker-->
(function() {
  'use_strict';

  try {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-77240033-1', 'auto');
    ga('send', 'pageview');
  } catch (e) {
    console.error(e)
  }
}());