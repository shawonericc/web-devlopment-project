alert(" ToDo List version 1.0.0.1 ☺ please thumbs up & any type of suggestion will be  appreciated!!!");


$(document).ready(function(){
   $("#but").click(function(){
     var txt= $("input").val();
     if(txt!=="")
     var data= $("<li></li>").text(txt);
    
    $(data).append('<button class="but2">X</button>');
    //carefull quotation marks! single & double
    //you've to set class cause id wont let you remove all button elements
    
    $("#ol").append(data);
    $("input").val("");
    $(".but2").click(function(){
     $(this).parent().remove();
     
      });
    })
})