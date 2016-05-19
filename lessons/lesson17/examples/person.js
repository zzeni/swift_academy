"use strict";

function Person(firstName, lastName) {
  if (firstName == undefined || lastName == undefined) {
    throw new Error("you must pass first name and last name");
  }

  this.firstName = firstName;
  this.lastName = lastName;
  this.isPolite = true;

  this.bePolite = function (politness) {
    this.isPolite = (politness === undefined) ? true : politness;
  };

  this.greet = function (otherPerson) {
    var greeting = "";

    if (this.isPolite) {
      greeting = (otherPerson === undefined) ? "Здравейте!" : "Здравейте, " + otherPerson.fullName() + "!";
    }
    else {
      greeting = (otherPerson === undefined) ? "Здрасти!" : "Здравей, " + otherPerson.firstName + "!";
    }

    return greeting;
  };

  this.introduce = function (otherPerson) {
    var greeting = this.greet(otherPerson);
    greeting += " ";
    greeting += (this.isPolite) ? "Казвам се " + this.fullName() : "Аз съм " + this.firstName;
    greeting += ".";

    return greeting;
  };

  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
