
'use_strict';      
      
$(document).on("ready", function() {
  
  $('#fileTree').each( function() {
    var target = $(this).attr("data-target");
    
    if (window.location.hostname == "") {
      $('#fileTree-container').html('<iframe src="http://zenifytheweb.com/courses/' + target + '/filetree.html"></iframe>')
    }
    else {
      $('#fileTree').fileTree({ root: target, script: "/api/fs_read" }, function(file) { 
        var url = '/courses/homeworks' + file;
        
        if ($('#item-preview').size > 0) {
          $('#item-preview').find('iframe').attr('src', url);
          $('#item-preview').find('a').attr('href', url);
        }
        else {
          window.location = url;
        }
      });
    }
  });
});