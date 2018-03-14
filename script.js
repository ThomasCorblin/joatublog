$(document).ready(function(){
  var heights = $(".sol_box").map(function ()
    {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);
    $('.sol_box').css('height', maxHeight+'px');
    
    
    
    $(window).on('resize',function() {
      var height_resize = $(".sol_box").map(function ()
      {
        
          return $(this).height();
      }).get(),
      maxHeight_resize = Math.max.apply(null, height_resize);
      alert(maxHeight_resize);
      $('.sol_box').css('height', maxHeight_resize+'px');
    });

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $('.link_ben').on('click', function(e){
    e.preventDefault();
    var url= this.href;
    var $exit = $('<a href="" style="text-align: right; float:right;">X</a>'); 
    $('#content').slideUp("slow", function(){   
      $('#content').load(url + ' #container').hide().delay(100).slideDown('slow',function () {  
        $('#close').click(function (e) {
          e.preventDefault();
          $('#content').slideUp("slow"); 
        });
      });
    });    
  });
});


