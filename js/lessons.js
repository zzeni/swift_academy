'use_strict';      
      
$(document).on("ready", function() {
  
  $('.lesson-preview a').click(function(e) {
    var lesson = $(this).attr('data-target');
    var lesson_index =  lesson.charAt(lesson.length - 1);
    var lesson_link = 'http://courses.zenifytheweb.com/lessons/' + lesson + '/lesson.pdf';
    var example_link = 'http://courses.zenifytheweb.com/lessons/' + lesson + '/example/index.html';
    var homework_link = 'https://github.com/zzeni/swift-academy-homeworks/tree/master/tasks/L' + lesson_index;
    $('.lesson-preview .selected').removeClass('selected');
    $(this).parent().addClass('selected');
    $('#lesson-name').text('Lesson ' + lesson_index);
    $('#presentation').attr('src', lesson_link);
    $('#presentation').parent().find('a:first').attr('href', lesson_link);
    $('#examples').attr('src', example_link);
    $('#examples').parent().find('a:first').attr('href', example_link);
    $('#homework-viewer').find('a:first').attr('href', homework_link).text(homework_link);
    e.preventDefault();
  });
  
  $('.lesson-preview a:last-child').click();

});