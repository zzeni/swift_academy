$(document).ready(function () {
  $('#langSelect').change(function () {
    var lang = $(this).val();
    $('html').attr('lang', lang);
    setCookie('language', lang)
  });
  
  var cookies = {};
  loadCookies(cookies);
  
  // console.log(cookies);
  
  var cookieLang = cookies.language;
  if (cookieLang && (cookieLang === "bg" || cookieLang === "en")) {
    $('html').attr('lang', cookieLang);
    $('#langSelect').val(cookieLang);
  }
  
  function setCookie(key, val) {
    var timeNow = new Date;
    var timeNow = +timeNow - 1000 * 60 * 120;
    var expTime = new Date(timeNow + 1000 * 60 * 5);
    
    document.cookie = key + "=" + val + "; expires=" + expTime + "; path=/";
  }
  
  function loadCookies(cookieHash) {
    document.cookie.split('; ').forEach(function (keyvalStr) {
      var keyval = keyvalStr.split('=');
      cookieHash[keyval[0]] = keyval[1];
    });
  }
});