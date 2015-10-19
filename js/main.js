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
    $('#presentation').attr('src', 'http://courses.zenifytheweb.com/courses/lessons/' + lesson + '/lesson.pdf');
    $('#examples').attr('src', 'http://courses.zenifytheweb.com/courses/lessons/' + lesson + '/example/index.html');
    e.preventDefault();
  });
});