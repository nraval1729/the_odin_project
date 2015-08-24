$(document).ready(function() {
  for(i=1;i<=16;i++){
    for(j=1;j<=16;j++){
    $("#container").append('<div class="grid"></div>');
  }
    $("#container").append("<br/>");
}

$(".grid").on("mouseover", function() {
  $(this).css("background-color","blue");
});
$(".grid").on("mouseleave", function() {
  $(this).fadeOut(1000);
});
});
