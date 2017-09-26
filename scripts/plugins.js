/* TURNING CHECKBOXES INTO TOGGLERS */
function convertInputToToggler(input){
  var element = $("<div class='toggler'><div class='switch' /></div>");
  input.hide();
  input.before(element);
  element.on("tap click", function(){
    $(this).toggleClass("checked");
    $(this).next("input[type='checkbox']").click();
  })
}

$(document).ready(function(){
  $('input[type="checkbox"]').each(function(){
    convertInputToToggler($(this));
  });
});
