//h1 elementa click pannina red collor ku change panna
/*
$(document).ready(function(){
	$("h1").click(function(){  
		$(this).css("color","#FF0000");
	});
});

//"services-section" classa click pannakola background color change pannanum endal
$(document).ready(function(){
	$(".services-section").click(function(){  //class name sotti . vakka enum
		$(this).css("background-color","#FFF47D");
	});
});  */





//hen user pass about section then sticky nav to appear : waypoint //iduku cdnlink add panni iki
/*we want to it appear only when it crosses the header section-iduku naaga use panra jquery code "way point": imakewebthings.com */
$(document).ready(function(){
	$(".js--about-section").waypoint(function(direction){  
		if(direction=="down"){
				$("nav").addClass("sticky-nav");
			}
			else{
				$("nav").removeClass("sticky-nav");
			}
	});

	$(".js--scroll-to-a-contact").click(function(){  
		$("html,body").animate({scrollTop:$(".js--contact").offset().top},1000);
	})



	//copied from css-trics.com/snippets/jquery/smooth-scrolling/
	// Select all links with hashes
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
        }, 1000, function() {
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

});// idu "$(document).ready(function(){" da })
