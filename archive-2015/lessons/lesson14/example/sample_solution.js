function greeting (name) {
  return "Hello, " + name + "!";
}

function personGreeting (person, beFormal) {
  if (beFormal === false) {
    return "Hi, " + person.firstName + "!";
  }
  else {
    return "Hello, " + person.fullName() + "!";
  }
}

function Person(firstName, lastName) {
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
      greeting = (otherPerson === undefined) ? "Здрасти!" : "Здрасти, " + otherPerson.firstName + "!";
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
