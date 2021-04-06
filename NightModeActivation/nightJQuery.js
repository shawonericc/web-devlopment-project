$(function(){
  $("#but1").click(function(){
    $("html").toggleClass("nit");
    $("body").toggleClass("nit");
     });
  $("#but2").click(function(){
    $("#cont").toggleClass("fon");
     });
 $("#but3").click(function(){
    $("#header").html("My Boring Story 🙀");
    $("#header").css({"background-color":"black","color":"red"});
    $("#header").toggleClass("changeHead");
     });
});