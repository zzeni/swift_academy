'use_strict';

$(document).on("ready", function() {

  $('.lesson-preview a').click(function(e) {
    var lesson = $(this).attr('data-target');
    var lesson_index =  lesson.split("lesson")[1];
    var lesson_link = 'http://courses.zenifytheweb.com/lessons/' + lesson + '/lesson.pdf';
    var example_link = 'http://courses.zenifytheweb.com/lessons/' + lesson + '/example/index.html';
    var github_example_link = 'https://github.com/zzeni/swift_academy/tree/master/lessons/' + lesson + '/example';
    var homework_link = 'https://github.com/zzeni/swift-academy-homeworks/tree/master/tasks/L' + lesson_index;
    $('.lesson-preview .selected').removeClass('selected');
    $(this).parent().addClass('selected');
    $('#lesson-name').text('Lesson ' + lesson_index);
    $('#presentation').attr('src', lesson_link);
    $('#presentation').parent().find('a:first').attr('href', lesson_link);
    $('#examples').attr('src', example_link);
    $('#examples').parent().find('a:first').attr('href', example_link);
    $('#examples').parent().find('a:last').attr('href', github_example_link);
    $('#homework-viewer').find('a:first').attr('href', homework_link).text(homework_link);
    e.preventDefault();
  });

  $('.lesson-preview a:last-child').click();

  if ($('.lesson-preview ul').width() > $('.lesson-preview').width()) {
    var diff = $('.lesson-preview ul').width() - $('.lesson-preview').width() + 22;
    $(".lesson-preview").animate({ scrollLeft: diff }, 2000);
  }
});