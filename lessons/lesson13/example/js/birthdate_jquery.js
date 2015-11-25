"use strict";

$(document).ready(function () {
  console.log('ready');

  $('#addPerson').submit(function(e) {
    e.preventDefault();
    console.log('form submitted..');

    var person = new Person($('#nameInput').val(), $('#birthdateInput').val());

    var nameContainer = $('<h4 class="person-hearer">' + person.name + '</h4>');
    var infoContainer = $('<div class="info-container">' + person.toString() + '</div>');
    var personContainer = $('<li class="person-container"></li>');

    personContainer.append(nameContainer);
    personContainer.append(infoContainer);

    $("#people").append(personContainer);
  });

  $("#people").sortable();
  $("#people").disableSelection();
});
