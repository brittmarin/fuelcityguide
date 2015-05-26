var main = function () {
  "use strict";
  
  $('.hotspots').on('click', function(){
  	$('.hotspotspage').removeClass("hidden");
  	$('.homepage').addClass("hidden");
  	$('.guidepage').addClass("hidden");
  	$('.eventpage').addClass("hidden");
  })

  $('.home').on('click', function(){
  	$('.homepage').removeClass("hidden");
  	$('.hotspotspage').addClass("hidden");
  	$('.guidepage').addClass("hidden");
  	$('.eventpage').addClass("hidden");
  })

  $('.guide').on('click', function(){
  	$('.guidepage').removeClass("hidden");
  	$('.hotspotspage').addClass("hidden");
  	$('.homepage').addClass("hidden");
  	$('.eventpage').addClass("hidden");
  })

  $('.events').on('click', function(){
  	$('.eventpage').removeClass("hidden");
  	$('.hotspotspage').addClass("hidden");
  	$('.homepage').addClass("hidden");
  	$('.guidepage').addClass("hidden");
  })


}

$("document").ready(main);