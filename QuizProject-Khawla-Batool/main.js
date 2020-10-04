var questions = [{question:"Which number should come next in the pattern:"+"\n"+"37, 34, 31, 28...",
                  answer:"choice3",
                  choices : ["a.18","b.26","c.25","d.48"]},
                  {question:"Find the answer that best completes the analogy: "+"\n"+  "Book is to Reading as Fork is to:",
                  answer:"choice1",
                  choices : [ "a.eating", "b.drawing","c.writing","d.stirring"]},
                  {question:"Which number should replace the ?  in the pattern?"+"\n"+"2,7,12,17,?,27,32",
                  answer:"choice4",
                  choices : ["a.17","b.29","c.31","d.22"]},
                  {question:"One word in this list doesn't belong to the same group:"+"\n"+"Yen, Pound, Franc, Penny, Mark.",
                  answer:"choice3",
                  choices : ["a.Yen","b.Pound","c.Mark","d.Franc"]} ];



// function fillQuestion(){

// 	$("form1").text(questions[0].question);
//       for (var i = 0; i < questions.length;i++){
// 	$("questiondiv").text(questions[i].question);
// }

	
// }

//filing questions

$("#q1").text(questions[0].question);
$("#q2").text(questions[1].question);
$("#q3").text(questions[2].question);
$("#q4").text(questions[3].question);
 

// filling the answers 
















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
            console.log(average);
            $('#result').text("congratulation!!! You are very smart");
      }

      else if(average>=70 && average<90)
      {
            console.log(average);
            $('#result').text("congratulation!!! You are smart");
      }

       else if(average>=40 &&average<70){
            console.log(average);
            $('#result').text("congratulation!!! You have an average IQ");
       }

       else{
            console.log(average);
            $('#result').text("I am sorry ,Your Iq is below average "+"\n"+
               "click in the this link if you need more practice");
            $('a').css("display", "block");


       } 
 });
            

//  
