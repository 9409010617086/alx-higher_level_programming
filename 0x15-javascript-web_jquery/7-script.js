$(document).ready(function () {
  const URL = 'https://swapi.co/api/people/5/?format=json';
  $.getJSON(URL, (data) => $('DIV#character').text(data.name));
});
