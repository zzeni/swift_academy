(function () {

  document.addEventListener('DOMContentLoaded', onload);

  function onload() {
    console.log('DOM is loaded');

    var counterWrapper = document.getElementById("counter");

    function incrementCounter() {
      var count = counterWrapper.innerText * 1;
      counterWrapper.innerText = count + 1;
    }

    document.getElementById("button").addEventListener("click", incrementCounter);
  }
  
})();