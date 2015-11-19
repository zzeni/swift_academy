$('.nav-tabs li').click(function (e) {
  e.preventDefault();

  $('.nav-tabs li').removeClass('active');
  $(this).addClass('active');

  var target = $(this).attr('data-target');

  $('.tabs-body > div').hide();
  $('#' + target).show();
});

$('.tabs-body').height(Math.max(
  $('#about-main').height(),
  $('#about-work').height()
));