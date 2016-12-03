$(document).ready(function () {
  "use strict";

  $('form').submit(function (event) {
    var form = event.target;

    try {
      formValidate(form);
      alert("Success!");
    } catch (error) {
      event.preventDefault();

      if (error.name === "FieldValidationError") {
        setError(error.target, error.message);
        $(error.target).focus();
      } else {
        throw error;
      }
    } finally {
      event.preventDefault();
    }
  });

  $('#username').keyup(function (event) {
    try {
      fieldValidate(event.target, /^[\w\d]+$/);
      setSuccess($(event.target));
    }
    catch(error) {
      if (error.name === "FieldValidationError") {
        setError($(error.target));
      } else {
        throw error;
      }
    }
  });

  $('input').blur(function (event) {
    if ($(event.target).parent().hasClass('has-error'))
      clearFeedback($(event.target));
  });

  function formValidate(form) {
    fieldValidate(form.username, /^[\w\d]+$/);
    fieldValidate(form.email, /^[^@]+@[^\.@]+(?:\.[^\.@]+)+$/);
    fieldValidate(form.password, /^[A-Za-z\d]{8,16}$/, 'must be between 8 and 16 characters and contain at leas one capital, one lowercase letter and at least one digit');
    fieldValidate(form.password_confirmation, $(form).find("input[name=password]").val(), 'doesn\'t match password');
  }

  function fieldValidate(input, regEx, regExMsg) {
    input = $(input);
    var fieldName = input.attr('name').replace("_", " ");
    var value = input.val();
    var error = "";

    clearFeedback(input);

    if (!value) {
      error = new Error(fieldName + " is mendatory");
    } else if (!value.match(regEx)) {
      var msg = regExMsg || "is invalid";
      error = new Error(fieldName + " " + msg);
    }

    if (error) {
      error.name = "FieldValidationError";
      error.target = input;

      throw error;
    }
  }

  function setError(input, errMsg) {
    var parent = input.parent();
    clearFeedback(input);
    parent.addClass('has-error has-feedback');
    parent.find('.failure').show();
    parent.find('.help-block').text(errMsg).show();
  }

  function setSuccess(input, errMsg) {
    var parent = input.parent();
    clearFeedback(input);
    parent.find('.success').show();
    parent.addClass('has-success has-feedback');
  }

  function clearFeedback(input) {
    var parent = input.parent();
    parent.find('.success').hide();
    parent.find('.failure').hide();
    parent.removeClass('has-error').removeClass('has-success').removeClass('has-feedback');
    parent.find('.help-block').hide();
  }
});
