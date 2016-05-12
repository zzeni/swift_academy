function processScore(group, format) {
  "use strict";

  if (!format.match(/^homeworks|project|final|test\d$/)) console.error("wrong format: " + format);

  var scoresFunc = function scoresFunc(scores, format) {
    console.log(scores);

    $.each(scores, function (index, score) {
      var hw_total = 0;
      var exam_total = 0;
      var project_total = 0;

      var table = $('#score');
      var row = $('<tr></tr>');

      row.append('<td class="s4">' + index + '</td>');
      row.append('<td class="s3">' + score.name + '</td>');

      for (var j = 0; j < 3; j++) {
        var sum = 0;
        for (var i = (6 * j) + 1; i <= (6 * j) + 6; i++) {
          var sc = score['l' + i];
          if (format === "homeworks") {
            row.append('<td class="s2">' + sc + '</td>');
          }
          sum += sc;
        }
        hw_total += sum;
        if (format === "homeworks" || format === "final") {
          var style = (format === "homeworks") ? 's8' : 's2';
          row.append('<td class="' + style + '">' + sum + '</td>');
        }
      }

      if (format === "homeworks" || format === "final") {
        var style = (format === "homeworks") ? 's2' : 's8';
        if (hw_total <= 100) {
          row.append('<td class="' + style + ' danger">' + hw_total + '</td>');
        } else if (hw_total < 260) {
          row.append('<td class="' + style + ' warning">' + hw_total + '</td>');
        } else {
          row.append('<td class="' + style + '">' + hw_total + '</td>');
        }
      }

      for (var i = 1; i <= 4; i++) {
        if (format === "final") {
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
      ], function (index, key_name) {
        if (format === "project") {
          var comment = score[key_name + '_comment'];
          if (comment === undefined) {
            row.append('<td class="s2">' + score[key_name] + '</td>');
          } else {
            row.append('<td class="s2 commented" title="' + comment + '">' + score[key_name] + '</td>');
          }
        }
        project_total += score[key_name];
      });

      if (format === "project" || format === "final") {
        row.append('<td class="s2">' + project_total + '</td>');
      }

      // Now all the final scores
      if (format === "final") {
        // persistance
        var persistence = Math.round((Math.max(hw_total - 100, 0)) / 20);
        var exam = Math.round((exam_total + project_total * 5) / 90);
        var bonus = 0;

        if (persistence > 10) {
          bonus += persistence - 10;
          persistence = 10;
        }
        if (exam > 10) {
          bonus += exam - 10;
          exam = 10;
        }

        row.append('<td class="s8">' + persistence + '/10</td>');
        // exam
        row.append('<td class="s8">' + exam + '/10</td>');
        // teacher's grade
        if (window.location.hostname === "127.0.0.1") {
          var commented = (score.recommendation_comment !== undefined)? "commented" : "";
          row.append('<td class="s8 ' + commented + '" title="' + score.recommendation_comment +'">' + score.recommendation + '/10</td>');
        } else {
          row.append('<td class="s8">?/10</td>')
        }
        // binus points
        if (bonus > 0) {
          row.append('<td class="s8 bonus">' + bonus + '</td>');
        } else {
          row.append('<td class="s8">-</td>');
        }
      }

      if (format === "test1") {
        var arr = score["test1_arr"];
        var length = 5;
        for(i=0; i<length; i++) {
          var value = arr[i] || "";
          if (i>=length-2)
            row.append('<td class="s8">' + value + '</td>');
          else
            row.append('<td class="s2">' + value + '</td>');
        }
      }

      if (format === "test2") {
        var testScores = score["test2_detail"];
        var total = 0;
        for (var part in testScores) {
          total += testScores[part];
          row.append('<td class="s2">' + testScores[part] + '</td>');
        }        
        row.append('<td class="s8">' + total + '</td>');
        row.append('<td class="s8">' + Math.round(total * 0.4) + '</td>');
      }
      
      table.append(row);
    });
  }

  var jsonReq = $.getJSON("../js/scores/" + group + ".json", function (data) {
      var score = data["score"];
      scoresFunc(score, format);
    })
    .fail(function (jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;
      console.log("Request Failed: " + err);
    })
    .done(function () {
      console.log('success');
    });
}