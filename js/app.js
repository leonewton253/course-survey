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
    var total=0;
    $("input[type=radio]:checked").each(function(){
        total+= parseInt($(this).attr("value"));
    });

    alert(total);


      $("#story").show();

      event.preventDefault();
    });

});
