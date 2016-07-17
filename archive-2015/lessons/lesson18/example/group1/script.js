$('form').find('[name=username]').blur(function (e) {
  e.preventDefault();

  var ajax = $.ajax({
    url: "http://zenifytheweb.com/api/examples/check_username",
    method: 'get',
    data: { username: $(this).val() }
  });

  ajax.done(function(response) {
    if (response === "available") {
      console.log("OK!");
    } else {
      console.log("This username is taken");
    }
  });

  ajax.fail(function(error) {
    console.log(error);
  });
});