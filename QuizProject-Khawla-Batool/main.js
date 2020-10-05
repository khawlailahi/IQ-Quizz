
var questions = [{question:"1.Which number should come next in the pattern:"+"\n"+"37, 34, 31, 28...",
                  answer:"choice3",
                  choices : ["a.18","b.26","c.25","d.48"]},
                  {question:"2.Find the answer that best completes the analogy: "+"\n"+  "Book is to Reading as Fork is to:",
                  answer:"choice1",
                  choices : [ "a.Eating", "b.Drawing","c.Writing","d.Stirring"]},
                  {question:"3.Which number should replace the ?  in the pattern?"+"\n"+"2,7,12,17,?,27,32",
                  answer:"choice4",
                  choices : ["a.17","b.29","c.31","d.22"]},
                  {question:"4.One word in this list doesn't belong to the same group:"+"\n"+"Yen, Pound, Franc, Penny, Mark.",
                  answer:"choice3",
                  choices : ["a.Yen","b.Pound","c.Mark","d.Franc"]},
                  {question:"5.Which drawing comes next in the serie:"+"\n",
                  answer:"choice3",
                  choices : ["a. A","b. B","c. C","d. D"]}
                  ];



//filing questions

$("#q1").text(questions[0].question);
$("#q2").text(questions[1].question);
$("#q3").text(questions[2].question);
$("#q4").text(questions[3].question);
$("#q5").text(questions[4].question );

// filling the choices 

//first Q choices
$("#l1").text((questions[0].choices)[0]);
$("#l2").text((questions[0].choices)[1]);
$("#l3").text((questions[0].choices)[2]);
$("#l4").text((questions[0].choices)[3]);

//second Q choices
$("#l5").text((questions[1].choices)[0]);
$("#l6").text((questions[1].choices)[1]);
$("#l7").text((questions[1].choices)[2]);
$("#l8").text((questions[1].choices)[3]);

//third Q choices
$("#l9").text((questions[2].choices)[0]);
$("#l10").text((questions[2].choices)[1]);
$("#l11").text((questions[2].choices)[2]);
$("#l12").text((questions[2].choices)[3]);

//fourth Q choices
$("#l13").text((questions[3].choices)[0]);
$("#l14").text((questions[3].choices)[1]);
$("#l15").text((questions[3].choices)[2]);
$("#l16").text((questions[3].choices)[3]);

//fifth Q choices
$("#l17").text((questions[4].choices)[0]);
$("#l18").text((questions[4].choices)[1]);
$("#l19").text((questions[4].choices)[2]);
$("#l20").text((questions[4].choices)[3]);

//hide the question until the user clicks on start
$("#start").click(function(){

      $("#questiondiv").css("display", "block");
       $("#finishdiv").css("display", "block");
       $("#startdiv").css("display", "none");
       $("#q").css("display","block")
       $("body").css("background-image","url(bg1.png)")
 })


// counting the result 

$("#finish").click(function count(){
      var count=0;


      if ($("#form1 :checked").val() === questions[0].answer)
            count++;
      if ($("#form2 :checked").val() === questions[1].answer)
            count++;
      if($("#form3 :checked").val() === questions[2].answer)
            count++;
      if($("#form4 :checked").val() === questions[3].answer)
            count++;

       $("#questiondiv").css("display", "none");
       $("#startdiv").css("display", "none");
       $("#finishdiv").css("display", "none");
       $("#result").css("display", "block");

      var average= (count/4)*100 ;
     

      if(average===100 || average>=90)
      {
            $('#result').text("Congratulation!!! You are very smart: "+"\n"+"Your score is: "+average);
            $('#cong').css("display", "block");
           
            
      }

      else if(average>=70 && average<90)
      {
            $('#result').text("Congratulation!!! You are smart: "+"\n"+"Your score is: "+average);
            $('#cong').css("display", "block");
      
            
             
      }

       else if(average>=40 &&average<70){
            
            $('#result').text("Congratulation!!! You have an average IQ: "+"\n"+"Your score is: "+average);
            $('#cong').css("display", "block");
            
       }

       else{
            $('#result').text("I am sorry, Your IQ is below average"+"\n"+"Your score is: "+average+"\n"+"Click in the this image if you need more practice: ");
            $('a').css("display", "block");


       } 


      //storing the choices of the user
      var choice1 =$("#form1 :checked").val();
      var choice2 =$("#form2 :checked").val();
      var choice3 =$("#form3 :checked").val();
      var choice4 =$("#form4 :checked").val();
      var choice5 =$("#form5 :checked").val();

      //if one of the question is not answered send alert
      if(!choice1 || !choice2|| !choice3|| !choice4|| !choice5)
            alert('You must answer all the questions !');

      else { if (choice1 === questions[0].answer){
                  count++;
                   $("#form1 .chosen").css("color", "lightgreen");
              }
            if (choice2 === questions[1].answer){
                  count++;
            $("#form2 .chosen").css("color", "lightgreen");
              }

            if(choice3 === questions[2].answer){
                  count++;
            $("#form3 .chosen").css("color", "lightgreen");
              }

            if(choice4 === questions[3].answer){
                  count++;
            $("#form4 .chosen").css("color", "lightgreen");
              }

            if(choice5 === questions[4].answer){
                  count++;
                  $("#form5 .chosen").css("color", "lightgreen");
            }
            //hide th Qs div and display the next elements
             $("#questiondiv").css("display", "none");
             $("#startdiv").css("display", "none");
             $("#finishdiv").css("display", "none");
             $("#result").css("display", "block");
             $("img").css("display","none")
             $("#review").css("display", "block");

             //counting the IQ
            var average= (count/5)*100 ;

            //sound
            var audio = document.getElementById("sound1");
            function playAudio() { 
                audio.play(); 
            } 


            if(average===100 || average>=90){
                  $('#result').text("congratulation!!! You are very smart. "+"\n"+ "Your IQ is : " + average +"% .");
                  $('#cong').css("display", "block");
                  playAudio();
            }

            else if(average>=70 && average<90){
                  $('#result').text("Congratulation!!! You are smart."+"\n"+ "Your IQ is : " + average +" % .");
                  $('#cong').css("display", "block");
                   playAudio();
            }

             else if(average>=40 &&average<70){
                  
                  $('#result').text("Congratulation!!!"+"\n"+" You have an average IQ : " + average + '% .'+ "\n" + "click in the link below if you need more practice." );
                  $('#average').css("display", "block");
                  $('a').css("display", "inline");
                  audio.play();
             }

             else{
                  $('#result').text("Sorry ,Your IQ is below average :" + average + "% ." + "\n" + "click in the link below if you need more practice.");
                  $('a').css("display", "inline");
                  $("#dog").css("display", "inline");
             } 

             //saving the choices in the chosen <p> to display in the review
             $("#form1 .chosen").text("Your answer : "+($("#form1 label[for="+choice1+"]").text()));
             $("#form2 .chosen").text("Your answer : "+($("#form2 label[for="+choice2+"]").text()));
             $("#form3 .chosen").text("Your answer : "+($("#form3 label[for="+choice3+"]").text()));
             $("#form4 .chosen").text("Your answer : "+($("#form4 label[for="+choice4+"]").text()));
             $("#form5 .chosen").text("Your answer : "+($("#form5 label[for="+choice5+"]").text()));
      }
 });
 

 //the review funct : chosen answers + correct answers           
$("#review").click(function(){
      $("good-luck1").css("display", "none");
      $("good-luck2").css("display", "none");
      $("#questiondiv").css("display", "block");
      $("#q").css("display", "block");
      $("#form1 .chosen").css("display", "block");
      $("#form2 .chosen").css("display", "block");
      $("#form3 .chosen").css("display", "block");
      $("#form4 .chosen").css("display", "block");
      $("#form5 .chosen").css("display", "block");
      $("input").css("display", "none");
      $(".correct").css("display", "block");
      $("#review").css("display", "none");
})