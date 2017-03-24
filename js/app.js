$(document).ready(function() {
  $("#intronext").click(function() {
    $("#intro").hide();
    $("#intro2").show();
  });

  $("#startsurvey").click(function() {
    $("#intro2").hide();
    $(".survey").show();
  });


  $("#results").click(function(){
    var score=0;
    $("input[type=radio]:checked").each(function(){
        score+= parseInt($(this).attr("value"));
    });

    alert(score);


      $("#story").show();

      event.preventDefault();
    });

});
