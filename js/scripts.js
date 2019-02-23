$(document).ready(function(){
$("button#but0").click(function (){
  $(".ras").hide()

  $("#vaj").show()
  $("#jav").show()
  $(".modu").show();
})

$("button#but1").click(function marks(){
    $(".modu").hide()
    $(".dat").show();
  });

  $("button#but2").click(function marks(){
    $(".dat").hide()
    $(".arr").show();
  });

  $("button#but3").click(function marks(){
    $(".arr").hide()
    $(".ceil").show();
  });

  $("button#but4").click(function marks(){
    $(".ceil").hide()
    $(".var").show();
  });

  $("button#but5").click(function marks(){
    $(".var").hide()
    $("#results").show()
    $("#outcome").show()
    $("#img").show()
    $("#but6").show();
  });

  $("button#but5").click(function(event){
    event.preventDefault();
      var score=0;
      var quesOne = parseInt($("input[name='que1']:checked").val());
      var quesTwo = parseInt($("input[name='quest2']:checked").val());
      var quesThree = parseInt($("input[name='quest3']:checked").val());
      var quesFour = parseInt($("input[name='quest4']:checked").val());
      var quesFive = parseInt($("input[name='quest5']:checked").val());
      var total = (quesOne + quesTwo + quesThree + quesFour + quesFive);

      var percentage = (total/25)*100;
