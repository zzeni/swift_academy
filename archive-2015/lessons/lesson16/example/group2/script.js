"use strict";

function checkEmail(emailStr) {
  var result = false;
  var parts = emailStr.split('@');

  if (parts.length === 2) {
    var domain = parts[1];

    if ((domain.indexOf('.') > 0) && (domain.indexOf('.') < domain.length - 1)) {
      result = true;
    }
  }

  return result;
}

$('form').submit(function (event) {
  var form = event.target;

  try {
    formValidate(form);
  } catch (error) {
    event.preventDefault();

    if (error.name === "FieldValidationError") {
      alert(error.message);
      error.target.focus();
      error.target.addClass('error');
    } else {
      throw error;
    }
  }
});

$('#emailInput').blur(function (e) {
  var value = $(e.target).val();
  if (!checkEmail(value)) {
    $('#emailInput').addClass('error');
  } else {
    $('#emailInput').removeClass('error');
  }
});

$('input[name=name]').keyup(function (e) {
  var value = $(e.target).val();

  if (value.length > 0) {
    var lastChar = value[value.length-1];

    if (!lastChar.match(/[a-zA-Z]/)) {
      $(this).val(value.substr(0, value.length - 1));
    }
  }
});

function formValidate(form) {
  fieldValidate(form, 'name');
  fieldValidate(form, 'email');
}

function fieldValidate(form, fieldName) {
  var fieldInput = $(form).find("input[name=" + fieldName + "]");
  var fieldValue = fieldInput.val();

  fieldInput.removeClass('error');

  if (fieldValue === "") {
    var error = new Error(fieldName + " is mendatory");
    error.name = "FieldValidationError";
    error.target = fieldInput;

    throw error;
  } else if (fieldName === "email" && checkEmail(fieldValue) === false) {
    var error = new Error("email is invalid");
    error.name = "FieldValidationError";
    error.target = fieldInput;

    throw error;
  }
}