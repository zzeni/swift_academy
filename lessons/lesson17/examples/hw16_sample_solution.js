function greeting (name) {
  return "Hello, " + name + "!";
}

function personGreeting (person, beFormal) {
  if (beFormal) {
    return "Hello, " + person.fullName() + "!";
  }
  else {
    return "Hi, " + person.firstName + "!";
  }
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.isPolite = true;
}

Person.prototype.bePolite = function (politness) {
  this.isPolite = (politness === undefined) ? true : politness;
};

Person.prototype.greet = function (otherPerson) {
  var greeting = "";

  if (this.isPolite) {
    greeting = (otherPerson === undefined) ? "Здравейте!" : "Здравейте, " + otherPerson.fullName() + "!";
  }
  else {
    greeting = (otherPerson === undefined) ? "Здрасти!" : "Здрасти, " + otherPerson.firstName + "!";
  }

  return greeting;
};

Person.prototype.introduce = function (otherPerson) {
  var greeting = this.greet(otherPerson);
  greeting += " ";
  greeting += (this.isPolite) ? "Казвам се " + this.fullName() : "Аз съм " + this.firstName;
  greeting += ".";

  return greeting;
};

Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};
