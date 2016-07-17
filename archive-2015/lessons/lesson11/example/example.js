"use strict";

function swap(input) {
  var textLength = input.length;
  var firstChar = input.charAt(0);
  var lastChar = input.charAt(textLength - 1);

  var result = lastChar;

  for (var index = 1; index < textLength - 1; index++) {
    result += input.charAt(index);
  }

  result += firstChar;

  return result;
}

function square(x) {
  return x * x;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// var me = Person('Jeni', 31);

function describe(people) {
  for (var index = 0; index < people.length; index++) {
    var person = people[index];
    console.log(person.name + " is " + person.age + " years old.");

  }
}

var people = [
  new Person('Ivan', 23),
  new Person('Elena', 32),
  new Person('Mario', 45),
  new Person('Andrea', 19)
];

describe(people);
