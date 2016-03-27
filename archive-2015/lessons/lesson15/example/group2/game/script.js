(function () {
  "use strict";

  var heroes = {};

  var currentHero;
  var currentEnemy;

  var heroesContainer = document.getElementById("heroes");
  var enemiesContainer = document.getElementById("enemies");
  var fightButton = document.getElementById("fightButton");

  var errorContainer = document.getElementById("errorContainer");
  var gameLog = document.getElementById("gameLog");

  document.getElementById("heroFactory").addEventListener('submit', function (e) {
    e.preventDefault();

    errorContainer.innerHTML = "";

    var name = document.getElementById("nameInput").value;
    var avatar = document.getElementById("avatarInput").value;
    var gender = document.getElementById("genderInput").value;

    try {
      createHero(name, avatar, gender);
    } catch (error) {
      errorContainer.innerHTML = error.message;
    }
  });

  function createHero(name, avatar, gender) {
    var hero = new Hero(name, avatar, gender);

    // store the hero in the heroes associated list
    heroes[hero.id] = hero;

    var heroesContainer = document.getElementById("heroes");

    // create a 'li' container for the new hero
    var li = document.createElement('li');
    li.innerHTML = hero.toString();
    li.id = 'H' + hero.id;

    // create an event listener for the click action (when the user choses a hero)
    li.addEventListener('click', function () {
      // remove the "selected" class from previouslu selected list item
      var selected = heroesContainer.getElementsByClassName("selected");
      if (selected !== undefined && selected[0] !== undefined) selected[0].className = "";

      // remove the hidden class from the enemiesContainer
      enemiesContainer.className = "";

      // add the "selected" class to the current list item
      this.className = "selected";
      currentHero = heroes[this.id.substr(1)];
    });

    heroesContainer.appendChild(li);

    addToEnemies(hero);
  }


  function addToEnemies(hero) {
    // here we more or less repeat the same actions as in create hero, but for the enemies container

    // create a 'li' container for the new hero
    var li = document.createElement('li');
    li.innerHTML = hero.toString();
    li.id = 'E' + hero.id;

    // create an event listener for the click action (when the user choses a hero)
    li.addEventListener('click', function () {
      // remove the "selected" class from previouslu selected list item
      var selected = enemiesContainer.getElementsByClassName("selected");
      if (selected !== undefined && selected[0] !== undefined) selected[0].className = "";

      // add the "selected" class to the current list item
      this.className = "selected";

      // set the current enemy
      currentEnemy = heroes[this.id.substr(1)];

      // remove the hidden class from the fightButton
      fightButton.className = "";
    });

    enemiesContainer.appendChild(li);
  }

  document.getElementById('fightButton').addEventListener('click', function (e) {
    e.preventDefault();

    try {
      currentHero.kill(currentEnemy);

      updateHtmlContainers(currentHero);
      updateHtmlContainers(currentEnemy);

      var li = document.createElement('li');

      var time = (new Date()).toDateString();
      var html = time + ":<img src='" + currentHero.avatar + "'> killed <img src='" + currentEnemy.avatar + "'>";
      li.innerHTML = html;

      gameLog.appendChild(li);

    } catch (error) {
      alert(error.message);
    }

  });

  function updateHtmlContainers(hero) {
    var heroContainer = document.getElementById('H' + hero.id);
    heroContainer.innerHTML = hero.toString();

    var enemyContainer = document.getElementById('E' + hero.id);
    enemyContainer.innerHTML = hero.toString();
  }

  // here we tell the gender radio buttons to store the selected value in a hidden field,
  // because it's easier to get ot from there later. If I were using jQuery, that wouldn'd be necesssary
  var genderRadio = document.getElementsByName('gender');
  for (var i = 0; i < genderRadio.length; i++) {
    genderRadio[i].addEventListener('click', function () {
      document.getElementById("genderInput").value = this.value;
    });
  }

  setTimeout(function() {
    createHero('Chuck Norris', 'img/chuck.jpg', 'M');
  }, 10)
  setTimeout(function() {
    createHero('baba Yaga', 'img/baba.jpg', 'F');
  }, 10)
  setTimeout(function() {
    createHero('Baraka', 'https://upload.wikimedia.org/wikipedia/en/4/44/BarakaMK9render.png', 'M');
  }, 10)

})();