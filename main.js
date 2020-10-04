//----> i'am working in a group study 
// we are redoing the exercices , i already did 
$(document).ready(function(){
	$("#main-header").text("TodoApp")

var remove = $("<button>remove</button>")
remove.attr("id", "remove-task")
$(".input-container").append(remove)

$("#add-Task").click(function(){
	var task = $("#input-Task").val()
	if(task === ""){
		alert("You must write something")
	} else {
	$("<li>" + task + "</li>").appendTo("#todolist").on("click", function toggle(){
		$(this).toggleClass("crossed")} )}
	$("#input-Task").val("");
})

$("#remove-task").click(function(){
	var check = ($("#todolist li").length)
	if( check === 0){
		alert("There is no task to remove")
	}else {
	$("#todolist li:last-child").remove()}
})

$("#main-header").click(function(){
	$("#main-header").css("color", "red")
})

$("<button>remove completed</button>").appendTo(".input-container").click(function(){
 $("#todolist li").each(function(i, li){
   if($(li).attr("class") === "crossed")
  	$(li).remove()
 })	
})

