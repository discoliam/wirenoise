// -------------- APPLICATION.JS --------------
// Aplication wide javascript

// -------------- JQUERY START --------------
$(document).ready(function () {
	
	$.supersized({
		
		// Custom
		progress_bar			: 0, 
		mousr_scrub			: 0, 
		autoplay			:0,
	
		// Functionality
		slide_interval          :   3000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	700,		// Speed of transition
												   
		// Components							
		slide_links				:	'false',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides 					:  	[			// Slideshow Images
											{image : '/images/photos/joss-look-railride.jpg', title : 'Joss, Look Railride'},
											{image : '/images/photos/bp-bath-vert-lipslide.jpg', title : 'Ben Pearson, Vert Lipside, Bath'}, 
											{image : '/images/photos/bp-bath-trails-x-up.jpg', title : 'Ben Pearson, X-Up, Bath Trails'} 
									]

	});
	
	
	
  // MENU
  

  // About
  $("a.about").click(function() {
   if( $("article.about").hasClass("open")){
     $("article.about").animate({left: -250});
     $("article.about").removeClass("open");
   } else {
     $("article.contact").animate({left: -250});
     $("article.contact").removeClass("open");
     $("article.about").delay("600").animate({left: 0});
     $("article.about").addClass("open");
   } 
    return false;
  });
  
  // Contact
  $("a.contact").click(function() {
   if( $("article.contact").hasClass("open")){
     $("article.contact").animate({left: -250});
     $("article.contact").removeClass("open");
   } else {
     $("article.about").animate({left: -250});
     $("article.about").removeClass("open");
     $("article.contact").delay("600").animate({left: 0});
     $("article.contact").addClass("open");
   } 
    return false;
  });
  
  // Close
  $("a.close").click(function() {
   if( $(this).parent('article').hasClass("open")){
     $(this).parent('article').animate({left: -250});
     $(this).parent('article').removeClass("open");
   } 
    return false;
  });
  
  // Captions
  $("a.captions").click(function() {
   if( $("#slidecaption").hasClass("open")){
     $("#slidecaption").animate({bottom: -42});
     $("#slidecaption").removeClass("open");
   } else {

     $("#slidecaption").animate({bottom: 8});
     $("#slidecaption").addClass("open");
   } 
    return false;
  });


}); //eo: Document Ready