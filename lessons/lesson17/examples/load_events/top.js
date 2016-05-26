(function () {
  
  function wasteTime() {
    console.log("wasting some time in calculations..");
    
    for(var i=0;i<999999999; i++) {
      var count = Math.random;
    }
  }
  
  window.onload = function () {
    console.log("full page is loaded");
    wasteTime();
  };

  document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM is loaded');
    wasteTime();
  });
  
  console.log('start top js execution');
  
  wasteTime();
  
})();