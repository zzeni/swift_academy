(function () {
  "use strict";

  $(document).ready(function () {
    function smoothScroll(target) {
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
    
    $.getJSON("./js/program.json", function (data) {
      var lesson, i, size, events, extractTopics, swapDates, panel, calendarConfig, eventDate, eventMonth;
      
      calendarConfig = {
        firstDay: 1,
        theme: false,
        events: [],
        eventClick: function (calEvent, jsEvent, view) {
          var panel = $(calEvent.target);
          if (panel.length) {
            panel.find('.panel-title a').click();
            setTimeout(function () {
              smoothScroll(panel.find('.eventTarget'));
            }, 200);
          }
        }
      };
      
      size = data.length;
      events = {};
      
      extractTopics = function extractTopics(arr, classAttr) {
        if (classAttr === undefined) classAttr = "topics";
        var topic, topicObj, topics = $("<ul/>", { "class": classAttr });

        $.each(arr, function (i) {
          topic = arr[i];
          topicObj = $("<li />").append($("<p />", { text: topic.name, "class": topic["class"] }));
          
          if (topic.subtopics !== undefined) {
            topicObj.append(extractTopics(topic.subtopics, "subtopics"));
          }
          topics.append(topicObj);
        });
        
        return topics;
      };
      
      swapDates = function swapDates(dateStr) {
        var parts = dateStr.split('-');
        return parts[1] + '-' + parts[0] + '-' + parts[2] + ' 18:30';
      };
      
      for (i = 0; i < size; i = i + 1) {
        lesson = data[i];
        panel = $($('#panelPrototype').html());
        panel.attr('id', 'lessonPanel' + lesson.lesson);
        panel.find('.panel-heading').attr('id', 'Heading' + i);
        panel.find('.panel-collapse')
          .attr('aria-labelledby', 'Heading' + i)
          .attr('id', 'Collapse' + i);
        panel.find('.eventTarget')
          .attr('id', 'eventTarget' + lesson.lesson);
        panel.find('.panel-title a')
          .text(lesson.lesson + ". " + lesson.name)
          .attr('href', '#Collapse' + i)
          .attr('aria-controls', 'Collapse' + i)
          .attr('tabindex', i);
        panel.find('.panel-body').append(extractTopics(lesson.topics));

        $('.panel-group').append(panel);
        
        eventDate = new Date(swapDates(lesson.date));
        eventMonth = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dev'][eventDate.getMonth()];
        eventMonth = 'may';
        
        if (events[eventMonth] === undefined) events[eventMonth] = [];
        
        events[eventMonth].push({
          title: "Lesson " + lesson.lesson,
          allDay: true,
          start: eventDate,
          target: '#lessonPanel' + lesson.lesson
        });
        
        if (lesson.exam !== undefined) {
          events[eventMonth].push({
            title: lesson.exam,
            allDay: true,
            start: eventDate,
            target: '#lessonPanel' + lesson.lesson,
            backgroundColor: "#660000"
          });
        }
      }
    
      calendarConfig.events = events.may;
      $('#calendar').css('width', $('#calendar-container').innerWidth());
      $('#calendar').fullCalendar(calendarConfig);
    });
  });
}());