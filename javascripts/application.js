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


}); //eo: Document Ready