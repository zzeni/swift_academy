$(document).ready(function () {
  var kids = [];
  
  $.getJSON("./js/kids.json", function (data) {
    data.forEach(function (kid) {
      kids.push(new Kid(kid));
    });
    printKids(kids);
  });
  
  function printKids(kids) {
    var container = $("#kids");
    kidsStr = kids.map(function (kid) { return kid.toHTML() });
    container.empty().append(kidsStr.join(""));
  }
});

