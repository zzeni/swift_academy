function Hero(name, avatarUrl, gender) {
  if (name === undefined || String(name) === "") {
    throw new Error("You can't create a hero without a name!");
  }
  else if (avatarUrl === undefined || String(avatarUrl) === "") {
    throw new Error("Avatar is missing!");
  }
  else if (gender === undefined || String(gender) === "" || (gender !== "F" && gender !== "M")) {
    throw new Error("Please select a gender!");
  }

  this.name = name;
  this.avatar = avatarUrl;
  this.gender = gender;

  this.enemiesKilled = 0;
  this.status = 'alive';
  this.id = Date.now();

  this.introduce = function () {
    return "Hi! My name is " + this.name;
  }

  this.die = function () {
    if (this.status === "alive") {
      this.status = "dead";
    }
    else {
      if (gender === "F") {
        throw new Error("She is dead!");
      } else {
        throw new Error("He is dead!");
      }
    }
  }

  this.kill = function (other) {
    if (this.id === other.id) {
      throw new Error("You can't kill yourself!");
    }
    if (this.status === "dead") {
      throw new Error("You are dead! Choose another hero.");
    }

    other.die();
    this.enemiesKilled++;
  }

  this.toString = function() {
    var resultHTML = "<div><img src='" + this.avatar + "'></div>";
    resultHTML += "<div><p>Name: <b>" + this.name + "</b></p>";
    resultHTML += "<p>Gender: <b>" + this.gender + "</b></p></div>";
    resultHTML += "<div><p>Status: <b>" + this.status + "</b></p>";
    resultHTML += "<p>Enemies killed: <b>" + this.enemiesKilled + "</b></p></div>";
    return resultHTML;
  }
}