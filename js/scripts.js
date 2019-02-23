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

      if(percentage >= 80 ){
            document.getElementById("results").innerHTML="You got " + percentage + "%";
            document.getElementById("outcome").innerHTML="Excellent job! You are ready to be a coder!"
            document.getElementById("img").src="https://media1.tenor.com/images/f676ac7683d9d3c545ddea12ec05b60b/tenor.gif?itemid=4115420"
          }
          else if(percentage >= 50){
            document.getElementById("results").innerHTML="You got " + percentage + "%";
            document.getElementById("outcome").innerHTML="That was a great attempt."
            document.getElementById("img").src="https://media.tenor.com/images/937a27fddf2716840fce110c6e0a1414/tenor.gif"
          }
          else{
            document.getElementById("results").innerHTML="You got " + percentage + "%";
            document.getElementById("outcome").innerHTML="That was a poor attempt. You need to retake the test."
            document.getElementById("img").src="https://media.tenor.com/images/1a4f871c86ba1383170b2e187edb98a5/tenor.gif"
          }

      })
      $("#but6").click(function(){
        $("#results").hide()
        $("#outcome").hide()
        $("#but6").hide()
        $("#img").hide()
        $("#jav").hide()
        $("#vaj").hide()
        $(".ras").show();
      })

      });
