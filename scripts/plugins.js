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
  $('input[type="range"]').each(function(){
    convertRange($(this));
  });
});
/* END TOGGLERS*/

/* SPICING UP RANGE INPUT */
function convertRange(input){
  input.before("<div class='rangeLabel' />");
  input.on("input", function(){
    var unit = $(this).attr("data-unit");
    var label = $(this).prev(".rangeLabel");
    label.remove();
    label = $("<div class='rangeLabel' />");
    $(this).before(label);
    switch($(this).attr("data-representation")){
      case "unit":
      var string = "";
      for (i = 0; i < $(this).val(); i++){
        string += unit;
      }
      label.text(string);
      break;
      default:
      case "number":
        var string = $(this).val() + unit;
        label.text(string);
      break;

    }
  });
  input.trigger("input");
}
/* END RANGE INPUT */
