$(document).ready(function () {
  const URL = 'https://fourtonfish.com/hellosalut/?lang=fr';
  const handler = function (data) {
    const translation = data.hello;
    $('DIV#hello').text(translation);
  };

  $.getJSON(URL, handler);
});
