$(document).ready(function (){
  var levels = {
    easy: { time: 60 },
    medium: { time: 30 },
    hard: { time: 20 }
  };

  var applesCount = random(12) + 12;
  var time = levels[getDifficulty() || 'medium'].time;

  var pickedApples = 0;
  var tree = $('#tree');

  var greenApple = '<img class="green-apple" src="img/greenApple.png">';
  var redApple = '<img class="red-apple" src="img/redApple.png">';

  var applesContainer = $("#applesContainer");
  setApplesContainerDimentions(applesContainer);

  var wagon = $("#wagon");
  wagon.width(applesContainer.width()*0.75);

  $('.start-caption .apples-placeholder').text(applesCount);
  $('.start-caption .seconds-placeholder').text(time);
  $('#timeCounter .placeholder').text(time);


  $.getJSON("js/axis.json", function (data) {
    var axisDB = data;
    var apples = [];

    for (var i=0; i < axisDB.length; i++) {
      var axis = axisDB[i];
      apples.push(spawnApple(i,axis[0],axis[1]));
    }

    startGame(apples);
  });


  function spawnApple(index,x,y) {
    var apple = $("<div></div>", {
      id: "apple" + index,
      class: "apple green"
    });
    apple.append(greenApple);
    apple.append(redApple);
    apple.css({left: x + "%", top: y + "%", "margin-top": random(10) + "px"});

    applesContainer.append(apple);

    return apple;
  }

  function startGame(apples) {
    var startCaptions = $('.start-caption');
    var startCounters = $('.start-counter');

    var startingTime = {t: 0};

    startCaptions.each(function (index) {
      setTimeout(function () {
        $(startCaptions[index]).addClass('pop-caption');
      }, startingTime.t);

      startingTime.t += 4400;
    });

    startCounters.each(function (index) {
      setTimeout(function () {
        $(startCounters[index]).addClass('pop-counter');
      }, startingTime.t);

      startingTime.t += 1500;
    });

    setTimeout(function () {
      getApplesReady(apples, applesCount);
      startTimeCounter();
    }, startingTime.t);
  }

  function getApplesReady(apples, redCount) {
    var redIndex = [];

    while (redIndex.length < redCount) {
      var rand = random(apples.length - 1);
      if (redIndex.indexOf(rand) < 0) {
        redIndex.push(rand);
      }
    }

    for (var i=0; i<redCount; i++) {
      apples[redIndex[i]].removeClass('green').addClass('unpicked');
      apples[redIndex[i]].find('.green-apple').hide();
      apples[redIndex[i]].find('.red-apple').show();
    }
  }

  function startTimeCounter() {
    $('#timeCounter').show();
    var siId = setInterval(function () {
      time--;
      $('#timeCounter .placeholder').text(time);
      if (time <= 0) {
        clearInterval(siId);
        $('#timesUP').show();

        endGame();
      }
      else if (time < 10) {
        $('#hurryUp').addClass('pop-counter');
        var unpicked = $('.unpicked');
        var rand = random(unpicked.length);
        var apple = $(unpicked[rand]);
        apple.addClass('pop-counter');
        setTimeout(function() {
          apple.removeClass('pop-counter');
        }, 500);
      }
    }, 1000);

    $('.apple').click(function (e) {
      e.preventDefault();

      if ($(this).hasClass('picked') || $(this).hasClass('green')) {
        tree.addClass('shaking');
        setTimeout(function() {
          tree.removeClass('shaking');
        }, 500);
        return;
      }
      pickedApples++;

      var target = $(this);

      target.removeClass('unpicked').addClass('picked');

      setTimeout(function() {
        target.addClass('falling');
      }, 2000);

      if (pickedApples === applesCount) {
        clearInterval(siId);
        endGame();
      }
    });

    return siId;
  }

  function endGame() {
    setTimeout(function() {
      $('#timesUP h1').hide();
      $('#timesUP').show();
      $('#wagon').addClass('moving');

      setTimeout(function() {
        $('#credits .placeholder').text(pickedApples);
        $('#credits').addClass('scaling').show();
      }, 5000);

      setTimeout(function() {
        $('#credits p').addClass('pop-counter');
      }, 9000);


      setTimeout(function() {
        $('#credits button').addClass('shaking');
      }, 11000);


    }, 3000);
  }

  function random(number) {
    return Math.round(Math.random() * number);
  }

  function setApplesContainerDimentions(applesContainer) {
    var width = Number(tree.innerWidth());
    var height = Number(tree.innerHeight());

    if (width===0 || height===0) throw new Error("wth");

    if (width > height) {
      width = height;
    }
    else {
      height = width;
    }

    applesContainer.css({width: width*0.9 + "px", height: height + "px", right: width*0.05+ "px"});
  }

  $(window).keyup(function (e) {
    if (ESCkey(e.keyCode) && $('#settings').hasClass('open')) {
      $('#settings').removeClass('open');
    }
  });

  function ESCkey(keycode) {
    return keycode === 27;
  }

  $('#settingsToggle').click(function (e) {
    $('#settings').toggleClass("open");
  });

  $('#settings button').click(function (e) {
    e.preventDefault();
    setDificculty($(e.target).attr('data-level'));
    $('#settings').removeClass('open');
    window.location.assign('index.html');
  });

  function setDificculty(level) {
    Cookies.set('difficulty', level, { expires: 365, path: '/' });
  }

  function getDifficulty() {
    return Cookies.get('difficulty');
  }
});

