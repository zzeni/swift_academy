$('form').submit(function (event) {
  event.preventDefault();

  var form = event.target;

  try {
    fieldValidate(form, 'name');
    fieldValidate(form, 'email');
    fieldValidate(form, 'message');

    alert('all is fine!');
  }
  catch (error) {
    var field = error.target;
    field.addClass('error');
    field.focus();

    field.parent().append('<span class="error-span">' + error.message + '</span>');
  }
});


function fieldValidate(form, fieldName) {
  var field = $(form).find('[name=' + fieldName + ']');
  var fieldValue = field.val();

  field.removeClass('error');
  field.parent().find('span').remove();

  if (fieldValue === "") {
    var error = new Error(fieldName + " is mendatory");
    error.target = field;
    throw error;
  }
  if (fieldName === "email" && emailCheck(fieldValue) === false) {
    var error = new Error("email is invalid");
    error.target = field;
    throw error;
  }
}

function emailCheck(email) {
  var match = email.match(/^\w+@\w+\.\w+$/)
  return match != null;
}

function usernameCheck(username) {
  var match = username.match(/^\w+$/)
  return match != null;
}