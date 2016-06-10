(function () {
  "use strict";

  var canvas = document.getElementsByTagName('canvas')[0];
  var ctx = canvas.getContext("2d");

  run(ctx, "grow");

  function run(ctx, direction) {
    var counter = 0;

    var siId = setInterval(function () {
      var radius, colour1, colour2;

      if (direction === "grow") {
        radius = (counter++);
        colour1 = "rgb(" + counter + ", 128, 196)";
        colour2 = "rgb(196, " + counter + ", 128)";

        if (counter >= 255) {
          direction = "shrink";
        }
      } else if (direction === "shrink") {
        radius = (--counter);
        colour1 = "rgb(224, 128, " + counter + ")";
        colour2 = "rgb(128, " + counter + ", 64)";

        if (counter <= 0) {
          direction = "grow";
        }
      } else {
        clearInterval(siId);
        throw new Error("unrecognized direction: " + direction);
      }

      draw(ctx, radius, colour1, colour2);
    }, 50);
  }

  function draw(ctx, radius, bgColour, circleColour) {
    // draw the background
    ctx.fillStyle = bgColour;
    ctx.fillRect(0, 0, 500, 350);

    // draw the circle
    ctx.beginPath();
    ctx.fillStyle = circleColour;
    ctx.arc(250, 175, radius, 0, 2 * Math.PI);
    ctx.fill();
  }
})();