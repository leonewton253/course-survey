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
        if (score < 10) {
          alert("We suggest you look into the Ruby on Rails or CSS/Design tracks!");
        } else if (score > 300) {
          alert("We suggest you look into the Csharp and DotNet tracks!");
        } else {
          alert("We suggest you check out the Android track!");
        }
    });



// "Hide survey questions and show results message as a paragraph"


  // $("#results").click(function(){
  //   var score=0;
  //   $("input[type=radio]:checked").each(function(){
  //       score+= parseInt($(this).attr("value"));
  //       if (score < 20) {
  //         $(".survey").hide();
  //         $("#ruby").show();
  //       } else if (score > 300) {
  //         $(".survey").hide();
  //         $("#csharp").show();
  //       } else {
  //         $(".survey").hide();
  //         $("#android").show();
  //       }
  //   });




      event.preventDefault();
    });

});
