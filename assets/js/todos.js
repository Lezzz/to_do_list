//check off specific todos by clicking
$("li").click(function() {
    $(this).toggleClass("completed");
});

//delete functionality and animation
$("span").click(function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    // stops bubbling up
    event.stopPropagation();
});

//creating todos
$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        //grab text
       var toDoText = $(this).val();
       //create new li, add to ul
       $("ul").append("<li>" + toDoText+ "</li>");
       toDoText = "";
       $("input").val("");
    }
});