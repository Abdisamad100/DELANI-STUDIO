$(".image").click(function(){
    $(".hidden").toggle().slideToggle(1500);
});

//overlay 4
$("#work4")
  .mouseenter(function() {
    $("#overlay4").show("slow");
  })
  .mouseleave(function() {
    $("#overlay4").hide("slow");
  });

//overlay3
  $("#work3")
  .mouseenter(function() {
    $("#overlay3").show("slow");
  })
  .mouseleave(function() {
    $("#overlay3").hide("slow");
  });
//overlay2
  $("#work2")
  .mouseenter(function() {
    $("#overlay2").show("slow");
  })
  .mouseleave(function() {
    $("#overlay2").hide("slow");
  });
  //overlay5
  $("#work5")
  .mouseenter(function() {
    $("#overlay5").show("slow");
  })
  .mouseleave(function() {
    $("#overlay5").hide("slow");
  });
  //overlay6
  $("#work6")
  .mouseenter(function() {
    $("#overlay6").show("slow");
  })
  .mouseleave(function() {
    $("#overlay6").hide("slow");
  });
  //overlay7
  $("#work7")
  .mouseenter(function() {
    $("#overlay7").show("slow");
  })
  .mouseleave(function() {
    $("#overlay7").hide("slow");
  });
  //overlay8
  $("#work8")
  .mouseenter(function() {
    $("#overlay8").show("slow");
  })
  .mouseleave(function() {
    $("#overlay8").hide("slow");
  });
  //overlay1
  $("#work1")
  .mouseenter(function() {
    $("#overlay").show("slow");
  })
  .mouseleave(function() {
    $("#overlay").hide("slow");
  });



  //form validation
  $("form#formInput").submit(function(event){

        let name = $("input#name").val();
        let email = $("input#email").val();
        let subject = $("textarea#subject");

        if ($("input#name").val() && $("input#email").val()){
          alert (name + ", we have received your message. Thank you for reaching out to us.");
        }

        else {
          alert("Please enter your name and email!");
        };

        event.preventDefault();
      })
  
