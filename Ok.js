function play(){
       var audio = document.getElementById("audio");
       audio.play();
      }

      $('a[rel=popover]').popover({
        html: true,
        trigger: 'hover',
        placement: 'bottom',
        content: function(){return '<img src="'+$(this).data('img') + '" />';}
      });
