var questions = [{question:"Which number should come next in the pattern?"+"/n"+"37, 34, 31, 28"
                  answer:"c.25"
                  choices : ["a.18","b.26","c.25","d.48"]},
                  {question:"Find the answer that best completes the analogy:"+"/n"+"Book is to Reading as Fork is to:"
                  answer:"a.eating"
                  choices : [ "a.eating", "b.drawing","c.writing","d.stirring"]},
                  {question:"Which number should replace the ?  in the pattern?"+"/n"+"2,7,12,17,?,27,32"
                  answer:"d.22"
                  choices : ["a.17","b.29","c.31","d.22"]},
                  {question:"One word in this list doesn't belong to the same group:"+"/n"+"Yen, Pound, Franc, Penny, Mark."
                  answer:"c.Mark"
                  choices : ["a.Yen","b.Pound","c.Mark","d.Franc"]} ];


function fillQuestion(){

	$("form1").text(questions[0].question);
for (var i = 0; i < questions.length;i++){
	$("form1").text(questions[i].question);
}

	
}