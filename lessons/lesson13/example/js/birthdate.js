"use strict";

window.console.log('start parsing the js..');

document.addEventListener('DOMContentLoaded', function () {
  console.log('ready');

  document.getElementById("addPerson").addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('form submitted..');

    var name = document.getElementById("nameInput").value;
    var birthdate = document.getElementById("birthdateInput").value;

    var person = new Person(name, birthdate);

    var nameContainer = document.createElement('h4');
    nameContainer.innerHTML = person.name;

    var infoContainer = document.createElement('div');
    infoContainer.className = 'info-container';
    infoContainer.innerHTML = person.toString();

    var personContainer = document.createElement('div');
    personContainer.setAttribute("id", Date.now());
    personContainer.setAttribute("draggable", true);
    personContainer.className = "person-container";
    personContainer.appendChild(nameContainer);
    personContainer.appendChild(infoContainer);

    personContainer.addEventListener('dragstart', function(e) {
      e.dataTransfer.setData("targetId", e.target.id);
    });

    document.getElementById("people").appendChild(personContainer);
  });

  document.getElementById("trash-container").addEventListener('dragover', function(e) {
    this.className = "hover";
    e.preventDefault();
  });

  document.getElementById("trash-container").addEventListener('dragleave', function(e) {
    this.className = "";
    e.preventDefault();
  });

  document.getElementById("trash-container").addEventListener('drop', function(e) {
    e.preventDefault();
    var targetId = e.dataTransfer.getData("targetId");
    var target = document.getElementById(targetId);
    document.getElementById("people").removeChild(target);
    this.className = "";
  });

}, false);