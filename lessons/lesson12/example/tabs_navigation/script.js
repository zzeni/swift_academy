$('.nav-tabs li').click(function (e) {
  e.preventDefault();

  $('.nav-tabs li').removeClass('active');
  $(this).addClass('active');

  var target = $(this).attr('data-target');

  $('.tabs-body > div').hide();
  $('#' + target).show();
});

$(window).resize(function () {
  if (window.innerWidth > 999) {
    var minHeight = Math.max(
      $('#about-main').outerHeight(),
      $('#about-work').outerHeight()
    );
    $('.tabs-body').css('min-height',  minHeight + 'px');
    $('.tabs-body').css('box-sizing',  'content-box');
  }
});

$(window).resize();