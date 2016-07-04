function processScore(group, format) {
  "use strict";

  if (!format.match(/^homeworks|project|final|test\d$/)) console.error("wrong format: " + format);

  var scoresFunc = function scoresFunc(scores, format) {
    console.log(scores);

    $.each(scores, function (index, score) {
      var table = $('#score');
      var row = $('<tr></tr>');

      row.append('<td class="s4">' + index + '</td>');
      row.append('<td class="s3">' + score.name + '</td>');

      var projFields = [
        "proj_layout",
        "proj_design",
        "proj_navigation",
        "proj_responsiveness",
        "proj_js",
        "proj_effects",
        "proj_code",
        "proj_use",
        "proj_complete"
      ];
      
      score.test1.total = score.test1.raw[0] + score.test1.raw[1];
      score.test1.score = Math.round(score.test1.total / 2.65) + score.test1.raw[2];

      score.test2.total = score.test2.part1 +
        score.test2.part2 +
        score.test2.part3_1 +
        score.test2.part3_2 +
        score.test2.part3_3;
      score.test2.score = Math.round(score.test2.total * 0.4);

      score.test4.total = score.test4.test + score.test4.css + score.test4.js;
      score.test4.score = Math.round(score.test4.total / 2.5);

      score.examsTotal = score.test1.score +
        score.test2.score +
        score.test3.score +
        score.test4.score / 2;

      score.homeworks.array = [];
      score.homeworks.total = 0;
      for (var key in score.homeworks) {
        if (key.match(/l\d+/)) {
          score.homeworks.array.push(score.homeworks[key]);
          score.homeworks.total += score.homeworks[key];
        }
      };

      score.homeworks.total = score.homeworks.total / 2;

      score.projectTotal = 0;
      
      projFields.forEach(function(fname) {
        score.projectTotal += score[fname];
      });

      score.certificate = Math.round((score.examsTotal + score.homeworks.total + score.projectTotal) / 3);

      if (format === "test1") {
        row.append('<td class="s2">' + score.test1.raw[0] + '</td>');
        row.append('<td class="s2">' + score.test1.raw[1] + '</td>');
        row.append('<td class="s8">' + score.test1.total + '</td>');
        row.append('<td class="s8">' + score.test1.raw[2] + '</td>');
        row.append('<td class="s6">' + score.test1.score + '</td>');
      } else if (format === "test2") {
        row.append('<td class="s2">' + score.test2.part1 + '</td>');
        row.append('<td class="s2">' + score.test2.part2 + '</td>');
        row.append('<td class="s2">' + score.test2.part3_1 + '</td>');
        row.append('<td class="s2">' + score.test2.part3_2 + '</td>');
        row.append('<td class="s2">' + score.test2.part3_3 + '</td>');
        row.append('<td class="s8">' + score.test2.total + '</td>');
        row.append('<td class="s8">' + score.test2.score + '</td>');
      } else if (format === "test3") {
        row.append('<td class="s8">' + score.test3.score + '</td>');
      } else if (format === "test4") {
        row.append('<td class="s2">' + score.test4.test + '</td>');
        row.append('<td class="s2">' + score.test4.css + '</td>');
        row.append('<td class="s2">' + score.test4.js + '</td>');
        row.append('<td class="s2">' + score.test4.total + '</td>');
        row.append('<td class="s8">' + score.test4.score + '</td>');
      } else if (format === "homeworks") {
        score.homeworks.array.forEach(function (item) {
          row.append('<td class="s2">' + item / 10 + '</td>');
        });
        row.append('<td class="s8">' + score.homeworks.total + '%</td>');
      } else if (format === "final") {
//        if (score.certificate < 35 || score.test4.total === 0 || score.projectTotal === 0)
        if (score.test4.total === 0)
          row.addClass("danger");
//        else if (score.certificate < 50)
//          row.addClass("warning");

        row.append('<td class="s2">' + score.test1.score + '</td>');
        row.append('<td class="s2">' + score.test2.score + '</td>');
        row.append('<td class="s2">' + score.test3.score + '</td>');
        row.append('<td class="s2">' + score.test4.score + '</td>');
        row.append('<td class="s8">' + score.homeworks.total + '%</td>');
        row.append('<td class="s8">' + score.examsTotal + '%</td>');
        row.append('<td class="s8">' + score.projectTotal + '%</td>');
        row.append('<td class="s6">' + score.certificate + '%</td>');
      } else if (format === "project") {
        projFields.forEach(function(fname) {
          var comment = score[fname + '_comment'];
          if (comment === undefined) {
            row.append('<td class="s2">' + score[fname] + '</td>');
          } else {
            row.append('<td class="s2 commented" title="' + comment + '">' + score[fname] + '</td>');
          }
        });
        row.append('<td class="s2">' + score.projectTotal + '</td>');
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