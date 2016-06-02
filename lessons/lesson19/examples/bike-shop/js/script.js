$(document).ready(function () {
  "use strict";
  
  function Bike(title, price, description, imgUrl, rating, cat) {
    this.title = title;
    this.price = price;
    this.description = description
    this.imgUrl = imgUrl;
    this.rating = rating;
    this.category = cat;
  }
  
  Bike.prototype.toHTML = function () {
    var asStr = '<div class="col-sm-4 col-lg-4 col-md-4">'  +
            '<div class="thumbnail">'  +
              '<img src="' + this.imgUrl + '" alt="">'  +
              '<div class="caption">'  +
                '<h4 class="pull-right">$' + this.price + '</h4>'  +
                '<h4><a href="#">' + this.title + '</a></h4>'  +
                '<p>' + this.description + '</p>'  +
              '</div>'  +
              '<div class="ratings">'  +
                '<p class="pull-right">15 reviews</p>'  +
                '<p>'  +
                  '<span class="glyphicon glyphicon-star"></span>'  +
                  '<span class="glyphicon glyphicon-star"></span>'  +
                  '<span class="glyphicon glyphicon-star"></span>'  +
                  '<span class="glyphicon glyphicon-star"></span>'  +
                  '<span class="glyphicon glyphicon-star"></span>'  +
                '</p>'  +
              '</div>'  +
            '</div>'  +
          '</div>';

    return asStr;
  };
  
  var bikesDB = [];
  
  $.getJSON('js/bikes.json', function (data) {
    console.log("success");
    
    data.forEach(function (obj) {
      var bike = new Bike(obj.title, obj.price, obj.desc, obj.url, obj.rating, obj.category);
      bikesDB.push(bike);
    });
    
    printBikes(bikesDB);
  }); 

  $('.catFilter').click(function (event) {
    var filter = $(event.target).attr('data-filter');
    var filtered = bikesDB.filter(function (bike) {
      return filter === 'All' || bike.category === filter;
    });
    
    printBikes(filtered);
  });
  
  function printBikes(bikes) {
    var dbContainer = $("#products");
    dbContainer.empty();
    
    bikes.forEach(function (bike) {
      dbContainer.append(bike.toHTML());
    });
  }
  
  $("#search").keyup(function (event) {
    var value = $(this).val();
    var filtered;
    if (value.length > 2) {
      filtered = bikesDB.filter(function (bike) {
        return (bike.title+bike.description).match(new RegExp(value));
      });
    }
    else {
      filtered = bikesDB;
    }
    printBikes(filtered);
  });
 });