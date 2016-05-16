(function() {
  
  "use strict";

  function Bike(name, price) {
    this.name = name;
    this.price = price;
    this.distanceCovered = 0;
    this.move = function (kilometers) {
      this.distanceCovered += kilometers;
    };
    this.toString = function () {
      return "    " + this.name + ": " + this.price + " $";
    };
    this.toHtml = function () {
      return this.toString() + "<br />" + "please add some html content here";
    };
  }

  var bikes = [
    new Bike("Drag", 200),
    new Bike("RAM", 500),
    new Bike("Scott", 1200),
    new Bike("cross", 150),
  ];
  
  // This is a normal function, but I'm self-invoking it, to save one line of code
  (function loadBikes(bikes) {
    bikes.forEach(function(bike) {
      var panel = $("<div class=\"panel panel-info\"></div>");
      var panelHeading = $("<div class=\"panel-heading\"><h3>" + bike.name + "</h3></div>");
      var panelBody = $("<div class=\"panel-body\">" + bike.toHtml() + "</div>");
      
      panel.append(panelHeading).append(panelBody);
      
      var panelContainer = $("<div class=\"col-md-4\"></div>").append(panel);
      
      $(".bikes-container").append(panelContainer);
    });
  })(bikes);
  
  // Uncomment the lines below, if you want to see the output in the console
//  function logBikes(bikesList) {
//    bikesList.forEach(function (bike) {
//      bike.toString();
//    });
//  }
//
//  logBikes("Logging all bikes", bikes);
//
//  // ===========================================
//
//  var filteredBikes = bikes.filter(function (bike) {
//    return bike.price < 1000;
//  });
//
//  logBikes("Logging filtered bikes (where price is < 1000 $)",filteredBikes);
  
})();

