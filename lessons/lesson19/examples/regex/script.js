$(document).ready(function () {
  $('input[type=text]').blur(function (event) {
    var value = $(this).val();

    if (!value.match(/[A-Z]/)) {
      setError($(this))
    } else if (!value.match(/[a-z]/)) {
      setError($(this));
    } else if (!value.match(/[0-9]/)) {
      setError($(this))
    }
  });
  
  function setError(input) {
    var parent = input.parent()
    parent.addClass('has-error');
    parent.find('.error').show();
  }
});