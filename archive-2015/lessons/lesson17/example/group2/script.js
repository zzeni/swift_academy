$('form').find('[name=username]').blur(function (e) {
  e.preventDefault();

  var ajax = $.ajax({
    url: "http://zenifytheweb.com/api/examples/check_username",
    method: 'get',
    data: { username: $(this).val() }
  });

  ajax.done(function(result) {
    console.log(result);
  });

  ajax.fail(function(error) {
    console.log(error);
  });
});