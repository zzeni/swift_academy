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
  
  $('.lesson-preview a').click(function(e) {
    var lesson = $(this).attr('data-target');
    var lesson_file = lesson.charAt(0).toUpperCase() + lesson.slice(1) + '.pdf';
    $('#presentation').attr('src', 'http://89.190.215.198/lessons/' + lesson + '/' + lesson_file);
    $('#examples').attr('src', 'http://89.190.215.198/lessons/' + lesson + '/example/index.html');
    e.preventDefault();
  });
});