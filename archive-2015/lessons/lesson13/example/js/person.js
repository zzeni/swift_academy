"use strict";

function Person(name, birthdate) {
  this.name = name;
  this.birthdate = new Date(birthdate);
  this.hasBirthDayToday = false;

  this.calcAge = function () {
    var result = 0;
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth();
    var todayDate = today.getDate();

    var personYear = this.birthdate.getFullYear();
    var personMonth = this.birthdate.getMonth();
    var personDate = this.birthdate.getDate();

    result = todayYear - personYear;

    if (personMonth > todayMonth) {
      result -= 1;
    } else if (personMonth == todayMonth) {
      if (personDate > todayDate) {
        result -= 1;
      } else if (personDate == todayDate) {
        this.hasBirthDayToday = true;
      }
    }

    return result;
  }

  this.toString = function () {
    var result = "";
    var age = this.calcAge();

    result = "<p><b>Name: </b>" + this.name + "</b><br>";
    result += "<b>Birth date: </b>" + this.birthdate.toDateString() + "</b></p>";

    result += "<p>";

    if (age < 0) {
      result += this.name + " is not born yet..";
    } else if (age > 100) {
      result += this.name + " is immortal!";
    } else {
      result += this.name + " is " + age + " years old.";
    }

    if (this.hasBirthDayToday) {
      result += "<br>" + this.name + " has a birthday today!! :)";
    }

    result += "</p>";

    return result;
  }

  console.log(this.calcAge());
}