function processScore(group) {
  "use strict";

  var scoresFunc = function scoresFunc(scores) {
    console.log(scores);

    $.each(scores,function(index,score) {
      var table = $('#score');
      var total = 0;
      var row = $('<tr></tr>');
      row.append('<td class="s4">' + index + '</td>');
      row.append('<td class="s3">' + score["name"] + '</td>');
      for(var j=0;j<3;j++) {
        var sum = 0;
        for(var i=(6*j)+1;i<=(6*j)+6;i++) {
          var sc = score['l' + i];
          row.append('<td class="s2">' + sc + '</td>');
          sum += sc;
        }
        total += sum;
        row.append('<td class="s8">' + sum + '</td>');
      }
      row.append('<td class="s2">' + total + '</td>');
      table.append(row);
    });
  }

  var jsonReq = $.getJSON("../js/scores/" + group + ".json", function(data) {
    var score = data["score"];
    scoresFunc(score);
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
  })
  .done(function(){ console.log('success'); });
}
