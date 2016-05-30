$(document).ready(function () {
  "use strict";
  
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.toHTML = function () {
    var container = $("<p></p>");
    container.append(this.name + " is " + this.age + " old.");
    
    return container;
  };
  
  var peopleDB = [];
  
  $.getJSON('./db.json', function (data) {
    console.log("success");
    
    var dbContainer = $("#database");
    
    data.forEach(function (obj) {
      peopleDB.push(new Person(obj.name, obj.age));
    });
    
    var index = 0;
    
    var siID = setInterval(function () {
      dbContainer.append(peopleDB[index].toHTML());
      index++;
      
      if (index >= peopleDB.length) {
        clearInterval(siID);
        setTimeout(function () {
          dbContainer.append("<p>DB is loaded!</p>");
        }, 1000);
      }
    }, 1000);
    
  }); 
  
  setTimeout(function() {
    console.log(peopleDB);
  }, 500);
  
 });