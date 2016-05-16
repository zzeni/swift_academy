var bikes = [
  {
    name: "Drag",
    price: 200
  },
  {
    name: "RAM",
    price: 500
  },
  {
    name: "Scott",
    price: 1200
  }
];

console.log("Need a bike?..");

function logBikes(bikesList) {
  bikesList.forEach(function (bike) {
    console.log("    " + bike.name + ": " + bike.price);
  });
}

logBikes(bikes);

// ===========================================

console.log("I just wanna know who are you..");

bikes.whoAmI = function() {
  console.log(this);
};

bikes.whoAmI();

// ===========================================

bikes.customForEach = function(callback) {
  for (var i=0, size = this.length; i < size; i++) {
    callback(this[i]);
  }
};

console.log("The result from the custom forEach is: ");

bikes.customForEach(function (bike) {
  console.log("   - " + bike.name + ": " + bike.price);
});

// ===========================================

console.log("Let's filter the bikes by price!");

var filteredBikes = bikes.filter(function (bike) {
  return bike.price < 1000;
});

logBikes(filteredBikes);


