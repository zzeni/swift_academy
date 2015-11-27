'use_strict';

$(document).on("ready", function () {
    $(window).on('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        if (distanceY > 150) {
            if (!$('header').hasClass('collapse'))
                $('header').addClass('collapse');
        } else {
            if ($('header').hasClass('collapse'))
                $('header').removeClass('collapse');
        }
    });


    $(document).ready(function () {
        $(".projectlinks").on("click", function () {
            $("#mandatory").fadeIn(2000);
                    });
    });
    $(document).ready(function () {
        $("#project1").click(function () {
            $("#whole_section").load("projects/project1.html");

        });
    });
    $(document).ready(function () {
        $("#project2").click(function () {
            $("#whole_section").load("projects/project2.html");

        });
    });
    $(document).ready(function () {
        $("#project3").click(function () {
            $("#whole_section").load("projects/project3.html");

        });
    });

$(document).ready(function () {
        $("#project4").click(function () {
            $("#whole_section").load("projects/project4.html");

        });
    });
$(document).ready(function () {
        $("#project5").click(function () {
            $("#whole_section").load("projects/project5.html");

        });
    });
$(document).ready(function () {
        $("#project6").click(function () {
            $("#whole_section").load("projects/project6.html");

        });
    });
    $(document).ready(function () {
        $("#project7").click(function () {
            $("#whole_section").load("projects/project7.html");

        });
    });
    $(document).ready(function () {
        $("#project8").click(function () {
            $("#whole_section").load("projects/project8.html");

        });
    });

    $(function() {
    $( "#accordion" ).accordion({
      heightStyle: "content"
        
    });
  });
    
    $(window).on('resize', function () {

        $('#item-preview').each(function () {
            var width = $(this).width();
            $(this).find('iframe').height(width * 0.7);
        });

        var min_height = $(window).height() - $('footer').outerHeight() - $('header').outerHeight();

        if (min_height > 0) {
            $('main').css('min-height', '' + min_height + 'px');
        }
    });

    $(window).resize(); // trigger the resize event in order to set footer position

});
