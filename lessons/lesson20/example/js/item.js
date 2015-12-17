function Item(id, name, image_url, desc, colour, price) {
  this.name = name;
  this.image_url = image_url;
  this.description = desc;
  this.colour = colour;
  this.price = price;
  this.id = id;

  this.toString = function toString() {
    var itemContainer = $('<div class="item-container"></div>');
    itemContainer.append($('<img src="' + this.image_url + '" alt="' + this.description + '">'));
    itemContainer.append($('<p class="item-name">' + this.name + '</p>'));
    itemContainer.append($('<p class="item-price">' + this.price + '</p>'));
    itemContainer.append($('<button class="btn btn-primary">buy</button>'));

    return itemContainer;
  };
}