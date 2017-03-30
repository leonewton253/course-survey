
// "Hides first paragraph and then shows 2nd intro paragraph when next is clicked"

$(document).ready(function() {
  $("#intronext").click(function() {
    $("#intro").hide();
    $("#intro2").show();
  });

  $("#startsurvey").click(function() {
    $("#intro2").hide();
    $(".survey").show();
  });




  $("#results").click(function(event) {
    var score=0;
    $("input[type=radio]:checked").each(function(){
        score+= parseInt($(this).attr("value"));
        if (score < 10) {
          $("#ruby").show();
        } else if (score > 300) {
          $("#csharp").show();
        } else {
          $("#android").show();
        }
    });
      event.preventDefault();
    });

});
