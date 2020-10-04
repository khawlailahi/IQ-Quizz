var questions = [{question:"Which number should come next in the pattern:"+"\n"+"37, 34, 31, 28...",
                  answer:"choice3",
                  choices : ["a.18","b.26","c.25","d.48"]},
                  {question:"Find the answer that best completes the analogy: "+"\n"+  "Book is to Reading as Fork is to:",
                  answer:"choice1",
                  choices : [ "a.Eating", "b.Drawing","c.Writing","d.Stirring"]},
                  {question:"Which number should replace the ?  in the pattern?"+"\n"+"2,7,12,17,?,27,32",
                  answer:"choice4",
                  choices : ["a.17","b.29","c.31","d.22"]},
                  {question:"One word in this list doesn't belong to the same group:"+"\n"+"Yen, Pound, Franc, Penny, Mark.",
                  answer:"choice3",
                  choices : ["a.Yen","b.Pound","c.Mark","d.Franc"]} ];


//filing questions

$("#q1").text(questions[0].question);
$("#q2").text(questions[1].question);
$("#q3").text(questions[2].question);
$("#q4").text(questions[3].question);
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


$("#start").click(function(){
      $("#questiondiv").css("display", "block");
       $("#finishdiv").css("display", "block");
 })

$("body").css("display", "none");
       $("#result").css("display", "block");



