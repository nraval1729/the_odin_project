sliderInt=1;
sliderNext=2;
count=$("#slider>img").size();
$(document).ready(function() {
  $("#slider>img#1").fadeIn();
  sliderStart();
});

function sliderStart() {
  loop=setInterval(function(){
    if(sliderNext>count){
        sliderNext=1;
        sliderInt=1;
    }
    $("#slider>img").fadeOut();
    $("#slider>img#"+sliderNext).fadeIn();
    sliderInt=sliderNext;
    sliderNext=sliderNext+1;
  },2000);
}

function prev() {
    newSlide=sliderInt-1;
    showSlide(newSlide);
}

function next() {
    newSlide=sliderInt+1;
    showSlide(newSlide);
}

function stopLoop(){
  window.clearInterval(loop);
}

function showSlide(id) {
  stopLoop();
  count=$("#slider>img").size();

    if(id>count){
      id=1;
    }
    else if(id<1){
      id=count;
    }

    $("#slider>img").fadeOut();
    $("#slider>img#"+id).fadeIn();
    sliderInt=id;
    sliderNext=id+1;
    sliderStart();
}

$("#slider>img").hover(function(){
    $(".wrapper").find("p").remove();
    stopLoop();
    $(".wrapper").append("<p>Slider stopped</p>")
}, function() {
    $(".wrapper").find("p").remove();
    sliderStart();
    $(".wrapper").append("<p>Slider started</p>")

});