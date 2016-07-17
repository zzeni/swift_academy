function generateCarousel(items) {
  var carousel = $('#carousel-example-generic');
  var indicators = carousel.find('.carousel-indicators');
  var inner = carousel.find('.carousel-inner');

  for (var i in items) {
    // generate the indicators
    var li = $('<li data-target="#carousel-example-generic"></li>');
    li.attr('data-slide-to', i);

    // generate the content
    var outerDiv = $('<div class="item"></div>');
    var image = $('<img class="slide-image">');
    image.attr('src', items[i].image_url);
    image.attr('alt', items[i].name);

    if (i==0) {
      li.addClass('active');
      outerDiv.addClass('active');
    }

    // append generated elements
    indicators.append(li);
    outerDiv.append(image);
    inner.append(outerDiv);
  }
}

function generateItemsList(items) {
  var container = $('#itemsList');
  container.empty();

  for (var i in items) {
    var item = items[i];

    var html = '<div class="col-sm-4 col-lg-4 col-md-4"> \
                  <div class="thumbnail"> \
                      <img src="' + item.image_url + '" alt=""> \
                      <div class="caption"> \
                          <h4 class="pull-right">$' + item.price + '</h4> \
                          <h4><a href="#">' + item.name + '</a> \
                          </h4> \
                          <p>' + item.description + '.</p> \
                      </div> \
                      <div class="ratings"> \
                          <p class="pull-right">15 reviews</p> \
                          <p> \
                              <span class="glyphicon glyphicon-star"></span> \
                              <span class="glyphicon glyphicon-star"></span> \
                              <span class="glyphicon glyphicon-star"></span> \
                              <span class="glyphicon glyphicon-star"></span> \
                              <span class="glyphicon glyphicon-star"></span> \
                          </p> \
                      </div> \
                  </div> \
                </div>';

    container.append($(html));
  }
}

function sortBy(itemsList, rule) {
  var compare;

  switch (rule) {
    case 'name_up':
      compare = function(i1, i2) {
        return i1.name.localeCompare(i2.name);
      };
      break;
    case 'name_down':
      compare = function(i1, i2) {
        return i2.name.localeCompare(i1.name);
      };
      break;
    case 'price_up':
      compare = function(i1, i2) {
        return i1.price - i2.price;
      };
      break;
    case 'price_down':
      compare = function(i1, i2) {
        return i2.price - i1.price;
      };
      break;
    default:
      throw new Error("Unrecognized sorting option: " + rule);
  }

  return itemsList.sort(compare);
}