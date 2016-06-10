$(document).ready(function () {
  var applesCount = 12;
  var pickedApples = 0;
  var tree = $('#tree');

  var redApple = '<img class="red-apple" src="img/redApple.png">';

  var applesContainer = $("#applesContainer");
  setApplesContainerDimentions(applesContainer);

  var wagon = $("#wagon");
  wagon.width(applesContainer.width() * 0.75);

  $.getJSON("js/axis.json", function (data) {
    var axisDB = data;

    for (var i = 0; i < applesCount; i++) {
      var axis = axisDB[random(axisDB.length)];
      spawnApple(i, axis[0], axis[1]);
    }
    
    $('.apple').click(function (e) {
      e.preventDefault();

      var target = $(this);
      target.removeClass('unpicked').addClass('picked');

      pickedApples++;

      setTimeout(function () {
        target.addClass('falling');
      }, 2000);

      if (pickedApples === applesCount) {
        setTimeout(function () {
          $('#wagon').addClass('moving');
        }, 3000);
      }
    });
  });

  function spawnApple(index, x, y) {
    var apple = $("<div></div>", { class: "apple" });
    apple.append(redApple);
    apple.css({
      left: x + "%",
      top: y + "%",
      "margin-top": random(10) + "px"
    });

    applesContainer.append(apple);

    return apple;
  }

  function random(number) {
    return Math.round(Math.random() * number);
  }

  function setApplesContainerDimentions(applesContainer) {
    var width = Number(tree.innerWidth());
    var height = Number(tree.innerHeight());

    if (width === 0 || height === 0) throw new Error("wth");

    if (width > height) {
      width = height;
    } else {
      height = width;
    }

    applesContainer.css({
      width: width * 0.9 + "px",
      height: height + "px",
      right: width * 0.05 + "px"
    });
  }
});