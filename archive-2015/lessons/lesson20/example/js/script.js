(function () {
  "use strict";

  var items = [];

  for (var i = 0; i < ITEMS_DB.length; i++) {
    var item = ITEMS_DB[i];
    items.push(new Item(i, item.name, item.image_url, item.description, item.colour, item.price));
  }

  if ($('#carousel-example-generic').length) {
    generateCarousel(items);
  }
  if ($('#itemsList').length) {
    generateItemsList(items);
  }

  var resultSet = items;
  var sortRule = "";

  $('.filter').click(function(e) {
    e.preventDefault();

    var colorFilter = $(this).attr('data-filter');

    resultSet = [];

    for (var i in items) {
      var item = items[i];
      if (colorFilter === "all" || item.colour == colorFilter) {
        resultSet.push(item);
      }
    }

    if (sortRule !== "") resultSet = sortBy(resultSet, sortRule);

    generateItemsList(resultSet);
  });

  $('#sortOrder a').click(function(e) {
    e.preventDefault();

    var rule = $(this).attr('data-sort-rule');

    if (rule !== sortRule) {
      sortRule = rule;
      var sorted = sortBy(resultSet, sortRule);
      generateItemsList(sorted);
    }

    $('#sortOrder button .text').text($(this).text());
  });

})();