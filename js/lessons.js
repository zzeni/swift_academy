'use_strict';

$(document).on("ready", function() {
  var version = "0.12"

  $('.lesson-preview a').click(function(e) {
    var lesson = $(this).attr('data-target');
    var lesson_index =  lesson.split("lesson")[1];
    if (lesson_index.length == 1) lesson_index = '0' + lesson_index;
    var htmlLessons = []; // ['01', '20', '21', '22'];
    var lesson_link = 'lessons/' + lesson + '/';
    if (htmlLessons.indexOf(lesson_index) > -1)
      lesson_link += lesson + '/index.html';
    else
      lesson_link += 'lesson.pdf';
//    var lesson_page_link = 'lessons/' + lesson + '/index.html';
//    var github_example_link = 'https://github.com/zzeni/swift_academy/tree/master/lessons/' + lesson + '/examples';
    var example_link = 'lessons/' + lesson + '/examples/index.html';
    var downlod_link = 'lessons/' + lesson + '/examples.zip';
    var homework_link = 'https://github.com/zzeni/swift-academy-homeworks/tree/master/tasks/L' + lesson_index;
    var homework_src = 'lessons/' + lesson + '/hw-task.html';

    lesson_link = lesson_link + "?version=" + version;
    downlod_link = downlod_link + "?version=" + version;

    $('.lesson-preview .selected').removeClass('selected');
    $(this).parent().addClass('selected');
    $('#lesson-name').text('Lesson ' + lesson_index);
    $('#presentation').attr('src', lesson_link);
    $('#presentation').parent().find('a:first').attr('href', lesson_link);
    $('#examples').attr('src', example_link);
    $('#examples').parent().find('a:first').attr('href', example_link);
//    $('#examples').parent().find('a:last').attr('href', github_example_link);
    $('#examples').parent().find('a:last').attr('href', downlod_link);
    $('#homework-viewer').find('a:first').attr('href', homework_src);
    $('#hw-task').attr('src', homework_src);
    e.preventDefault();
  });

  $('.lesson-preview a:last-child').click();

  if ($('.lesson-preview ul').width() > $('.lesson-preview').width()) {
    var diff = $('.lesson-preview ul').width() - $('.lesson-preview').width() + 22;
    $(".lesson-preview").animate({ scrollLeft: diff }, 2000);
  }
});
