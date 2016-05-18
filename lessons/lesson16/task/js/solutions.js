function greeting(name) {
  return "Hello, " + name + "!";
}

function personGreeting(person, beFormal) {
  return beFormal ? "Hello, " + person.firstName + " " + person.lastName + "!" : "Hi, " + person.firstName + "!";
}

function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
  
  this.introduce = function () {
    return "Казвам се " + this.firstName + " " + this.lastName + ".";
  }
}