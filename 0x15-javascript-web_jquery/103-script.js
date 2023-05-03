$(document).ready(function () {
  const URL = 'https://fourtonfish.com/hellosalut/';
  function translate () {
    const language = $('INPUT#language_code').val();
    const handler = function (data) {
      const translation = data.hello;
      $('DIV#hello').text(translation);
    };
    $.getJSON(URL, { lang: language }, handler);
  }

  $('INPUT#btn_translate').click(translate);
  $('INPUT#language_code').keypress(function (event) {
    if (event.keyCode === 13) {
      translate();
    }
  });
});
