(function () {
  "use strict";

  $(document).ready(function () {
    $.getJSON("/js/program.json", function (data) {
      var lesson, i, size, events, extractTopics, swapDates, panel;
      
      size = data.length;
      events = [];
      
      extractTopics = function extractTopics(arr, classAttr) {
        if (classAttr === undefined) classAttr = "topics";
        var topic, topicObj, topics = $("<ul/>", { "class": classAttr });

        $.each(arr, function (i) {
          topic = arr[i];
          topicObj = $("<li />").append($("<p />", { text: topic.name }));
          
          if (topic.subtopics !== undefined) {
            topicObj.append(extractTopics(topic.subtopics, "subtopics"));
          }
          topics.append(topicObj);
        });
        
        return topics;
      };
      swapDates = function swapDates(dateStr) {
        var parts = dateStr.split('-');
        return parts[1] + '-' + parts[0] + '-' + parts[2];
      };
      
      for (i = 0; i < size; i = i + 1) {
        lesson = data[i];
        panel = $($('#panelPrototype').html());
        panel.attr('id', 'Lesson' + i);
        panel.find('.panel-heading').attr('id', 'Heading' + i);
        panel.find('.panel-collapse')
          .attr('aria-labelledby', 'Heading' + i)
          .attr('id', 'Collapse' + i);
        panel.find('.panel-title a')
          .text(lesson.lesson + ". " + lesson.name)
          .attr('href', '#Collapse' + i)
          .attr('aria-controls', 'Collapse' + i);
        panel.find('.panel-body').append(extractTopics(lesson.topics));

        $('.panel-group').append(panel);
        
        events.push({
          title: "Lesson " + lesson.lesson,
          allDay: true,
          start: new Date(swapDates(lesson.date)),
          url: '#Lesson' + lesson.lesson
        });
      }
      
      $('#calendar').fullCalendar({
        events: events
      });
      
      $('.fc-event').click(function (e) {
        e.preventDefault();
        var panelId = $(this).attr('href');
        $(panelId).find('.panel-title a').click();
      });
    });
  });
}());