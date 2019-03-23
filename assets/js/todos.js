//check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//delete functionality and animation
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  // stops bubbling up
  event.stopPropagation();
});

//creating todos
$("input[type = 'text']").on("keypress", function(event) {
  if (event.which === 13) {
    //grab text
    var toDoText = $(this).val();
    $(this).val("");
    //create new li, add to ul
    $("ul").append(
      "<li><span><i class='far fa-trash-alt'></i></span> " + toDoText + "</li>"
    );
  }
});

$(".fa-eye-slash").on("click", function() {
  $("input[type='text'").fadeToggle();
});
