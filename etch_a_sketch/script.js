  function init1() {
    var size=prompt("Enter grid size");
    var width=($("#container").width()-250)/size;
    var height=($("#container").height()-250)/size;
    var margin=50/size;
      for(i=1;i<=size;i++){
        for(j=1;j<=size;j++){
            $('<div class="grid"/div>').css({
              "width": width, "height":height, "margin": margin
            }).appendTo("#container");
          }
        $("#container").append("<br/>");
  }


    $(".grid").hover(function(){
      $(this).css({transition : 'background-color .001s ease-in-out',
                    'background-color':'yellow'});
    }, function() {
      $(this).css({transition : 'background-color .3s ease-in-out',
                    'background-color':'black'});
    });
}

function init2() {
  var size=prompt("Enter grid size");
  var width=($("#container").width()-250)/size;
  var height=($("#container").height()-250)/size;
  var margin=50/size;
    for(i=1;i<=size;i++){
      for(j=1;j<=size;j++){
          $('<div class="grid"/div>').css({
            "width": width, "height":height, "margin": margin
          }).appendTo("#container");
        }
      $("#container").append("<br/>");
}

  $('.grid').on("mouseover", function() {
    $(this).css({transition: 'background-color .3s ease-in-out',
                  'background-color': 'yellow'});
  });
}

  function clearGrid() {
    $("#container").empty();
  }
