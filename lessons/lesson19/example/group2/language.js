$('#langSelect').change(function(event) {
  var lang = $(this).val();
  $('[class*=lang-]').hide();
  $('.lang-' + lang).show();

  document.cookie = "language=" + lang;
});

var allCookies = document.cookie.split('; ');

for(var i=0; i < allCookies.length; i++) {
  var cookie = allCookies[i].split("=");
  var key = cookie[0], value = cookie[1];

  if (key === "language") {
    $('#langSelect').val(value);
    $('#langSelect').change();
  }
}

