"use strict";

function Person(fname, lname) {
  this.first_name = fname;
  this.last_name = lname;

  this.enemiesKilled = 0;

  this.introduce = function() {
    return "Hi! My name is " + this.first_name;
  }

  this.fullname = function() {
    return this.first_name + " " + this.last_name;
  }

  this.stats = function() {
    return "I have killed " + this.enemiesKilled + " enemies";
  }
}