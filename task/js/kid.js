function Kid(data) {
  this.name = data.name;
  this.age = data.age;
  this.color = data.color;
  this.food = data.food;
  this.game = data.game;
  this.pic = data.pic;
}

Kid.prototype.toHTML = function() {
  return '<div class="this">' +
            '<div class="panel panel-info">' +
              '<div class="panel-heading">' +
                '<h3>' + this.name + '</h3>' +
              '</div>' +
              '<div class="panel-body">' +
                '<div class="col-sm-4">' +
                  '<img class="img-responsive" src="img/' + this.pic + '">' +
                '</div>' +
                '<div class="col-sm-8">' +
                  '<ul>' +
                    '<li><h5>Години: ' + this.age + '</h5></li>' +
                    '<li><h5>Любим цвят: ' + this.color + '</h5></li>' +
                    '<li><h5>Любима игра: ' + this.game + '</h5></li>' +
                    '<li><h5>Любима храна: ' + this.food + '</h5></li>' +
                  '</ul>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>';
}