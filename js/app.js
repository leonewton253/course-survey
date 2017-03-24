$(document).ready(function() {
  $("#intronext").click(function() {
    $("#intro").hide();
    $("#intro2").show();
  });
});





















// $(document).ready(function() {
//   $(".intro").click(function() {
//     $(".intro2").toggle();
//     $(".intro").toggle();
//   });
//
//   $("button#goodbye").click(function() {
//     $("ul").prepend("<li>Goodbye!</li>");
//   });
//
//   $("button#stop").click(function() {
//     $("ul").prepend("<li>Stop copying me!</li>");
//   });
// });


// $("form#triangle").submit(function(event) {
//   event.preventDefault();

  // var side1 = parseInt($("#line1").val());
  // var side2 = parseInt($("#line2").val());
  // var side3 = parseInt($("#line3").val());



//  if ((side1 === side2) && (side2 === side3) && (side1 === side3)) {
//    $('.shape').hide();
//    $(".equil").show();
//  } else if ((side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1)) {
//    $('.shape').hide();
//    alert("NOT A TRIANGLE!!!!");
//  } else if (((side1 !== side2) && (side1 === side3)) || ((side2 !== side3) && (side2 === side1)) || ((side3 !== side1) && (side3 === side2))) {
//    $('.shape').hide();
//    $(".isos").show();
//  } else {
//    $('.shape').hide();
//    $(".scal").show();
//  }
