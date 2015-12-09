$('form').find('[name=username]').blur(function (e) {
  e.preventDefault();

  var ajax = $.ajax({
    url: "http://zenifytheweb.com/api/examples/check_username",
    method: 'post',
    data: { username: $(this).val() }
  });

  ajax.done(function(result) {
    console.log(result);
  });

  ajax.error(function(error) {
    console.log(error);
  });
});