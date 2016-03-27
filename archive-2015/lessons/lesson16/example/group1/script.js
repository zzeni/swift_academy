$('form').submit(function (event) {
  event.preventDefault();

  var form = event.target;

  try {
    formValidate(form);
    alert('all is fine!');
  }
  catch (error) {
    alert(error.message);
  }
});


function formValidate(form) {
  var name = $(form).find('input[name=name]').val();

  if (name === "") {
    throw new Error("name is mendatory");
  }
}