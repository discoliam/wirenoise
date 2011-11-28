// -------------- APPLICATION.JS --------------
// Aplication wide javascript

// -------------- JQUERY START --------------
$(document).ready(function () {
  
  //Load Start
   $('.images').load('collection1.html');
  
  // MENU
  
  // Collection 1
  $(".collection-1").click(function() {
    $('#supersized').empty();
    $('.images').load('collection1.html');
    return false;
  });
  
  // Collection 2
  $(".collection-2").click(function() {
    $('#supersized').empty();
    $('.images').load('collection2.html');
    return false;
  });


  // Collection 3
  $(".collection-3").click(function() {
    $('#supersized').empty();
    $('.images').load('collection3.html');
    return false;
  });

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