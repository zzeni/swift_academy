"use strict";

// Initially hide the validation icons of the username field
$('.form-control-feedback').hide();

$(document.registrationForm.username).blur(function () {
  if (this.value.length >= 3) {

    var ajaxProperties = {
      url: "http://zenifytheweb.com/api/examples/check_username",
      method: "get",
      data: {
        username: $(this).val()
      }
    };

    var ajax = $.ajax(ajaxProperties);

    ajax.done(function (response) {
      var usernameEl = document.registrationForm.username;
      var container = $(usernameEl).parent();
      container.addClass('has-feedback');

      container.find('.form-control-feedback').hide();

      if (response === "available") {
        container.addClass('has-success');
        container.removeClass('has-error');
        container.find('.form-control-feedback.success').show();
        container.find('.help-block').text('');

      } else {
        container.addClass('has-error');
        container.removeClass('has-success');
        container.find('.form-control-feedback.failure').show();
        container.find('.help-block').text('This username is taken');
      }
    });
  } else {
      var usernameEl = document.registrationForm.username;
      var container = $(usernameEl).parent();
      container.addClass('has-feedback');

      container.addClass('has-error');
      container.removeClass('has-success');
      container.find('.form-control-feedback.failure').show();
      container.find('.help-block').text('The username must be at least 3 characters long');
  }
});