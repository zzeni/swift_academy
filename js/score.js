function processScore(group,format) {
  "use strict";

  if (!format.match(/^homeworks|project|comulative$/)) console.error("wrong format: " + format);

  var scoresFunc = function scoresFunc(scores,format) {
    console.log(scores);

    $.each(scores,function(index,score) {
      var hw_total = 0;
      var exam_total = 0;
      var project_total = 0;

      var table = $('#score');
      var row = $('<tr></tr>');

      row.append('<td class="s4">' + index + '</td>');
      row.append('<td class="s3">' + score["name"] + '</td>');

      for(var j=0;j<3;j++) {
        var sum = 0;
        for(var i=(6*j)+1;i<=(6*j)+6;i++) {
          var sc = score['l' + i];
          if (format === "homeworks") {
            row.append('<td class="s2">' + sc + '</td>');
          }
          sum += sc;
        }
        hw_total += sum;
        if (format === "homeworks" || format === "comulative") {
          var style = (format==="homeworks")? 's8' : 's2';
          row.append('<td class="' + style + '">' + sum + '</td>');
        }
      }

      if (format === "homeworks" || format === "comulative") {
        var style = (format==="homeworks")? 's2' : 's8';
        if (hw_total <= 100) {
          row.append('<td class="' + style + ' danger">' + hw_total + '</td>');
        }
        else if (hw_total < 260) {
          row.append('<td class="' + style + ' warning">' + hw_total + '</td>');
        }
        else {
          row.append('<td class="' + style + '">' + hw_total + '</td>');
        }
      }

      for(var i=1; i<=4; i++) {
        if (format === "comulative") {
          row.append('<td class="s2">' + score['test' + i] + '</td>');
        }
        exam_total += score['test' + i];
      }

      $.each([
        "proj_layout",
        "proj_design",
        "proj_navigation",
        "proj_responsiveness",
        "proj_js",
        "proj_effects",
        "proj_code",
        "proj_use",
        "proj_complete"
      ],function(index,key_name) {
        if (format === "project") {
          row.append('<td class="s2">' + score[key_name] + '</td>');
        }
        project_total += score[key_name];
      });

      if (format === "project" || format === "comulative") {
        row.append('<td class="s2">' + project_total + '</td>');
      }

      // Now all the final scores
      if (format === "comulative") {
        // persistance
        var persistence = Math.round((Math.max(hw_total-100,0))/20);
        var exam = Math.round((exam_total + project_total*5)/90);
        var recom = score['recommendation'];

        if (persistence > 10) {
          recom += persistence - 10;
          persistence = 10;
        }
        if (exam > 10) {
          recom += exam - 10;
          exam = 10;
        }
        if (recom > 10) {
          recom = 10;
        }

        row.append('<td class="s8">' + persistence + '/10</td>');
        // exam
        row.append('<td class="s8">' + exam + '/10</td>');
        // teacher's grade
        row.append('<td class="s8">' + recom + '/10</td>');
      }

      table.append(row);
    });
  }

  var jsonReq = $.getJSON("../js/scores/" + group + ".json", function(data) {
    var score = data["score"];
    scoresFunc(score,format);
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
  })
  .done(function(){ console.log('success'); });
}
