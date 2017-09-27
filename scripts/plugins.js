/* TURNING CHECKBOXES INTO TOGGLERS */
function convertInputToToggler(input) {
  var element = $("<div class='toggler'><div class='switch' /></div>");
  input.hide();
  input.before(element);
  if (input.prop("checked") == true){
    console.log("TRUE");
    element.addClass("checked");
  }
  element.on("tap click", function() {
    $(this).toggleClass("checked");
    $(this).next("input[type='checkbox']").click();
  })
}

$(document).ready(function() {
  $('input[type="checkbox"]').each(function() {
    convertInputToToggler($(this));
  });
  $('input[type="range"]').each(function() {
    convertRange($(this));
  });
});
/* END TOGGLERS*/

/* SPICING UP RANGE INPUT */
function convertRange(input) {
  input.before("<div class='rangeLabel' />");
  input.on("input", function() {
    var unit = $(this).attr("data-unit");
    var label = $(this).prev(".rangeLabel");
    label.remove();
    label = $("<div class='rangeLabel' />");
    $(this).before(label);
    switch ($(this).attr("data-representation")) {
      case "unit":
        var string = "";
        for (i = 0; i < $(this).val(); i++) {
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

/* FALLING FOOD */
var gravity = 25;
var Food = function(svg, x, y, angle, infinite = false) {
  var elem = $("<object type=\"image/svg+xml\" data=\"" + svg + "\" class=\"food\">FOOD!</object>");
  elem.css({
    'left': x + "px",
    'top': y + "px",
    'transform': 'rotate(' + angle + 'deg)'
  });
  if (infinite == true) {
    elem.addClass("infinite");
  }
  $('.foodFall').append(elem);

}
$(document).ready(function() {
  initFoodFall();
});
function initFoodFall(){
  if ($('.foodFall').length > 0) {
    infinite = false;
    if ($('.foodFall.infinite').length > 0) {
      infinite = true;
    }
    setTimeout(function() {
      if ($('.foodFall').length > 0) {
        var cheese = new Food("img/CheeseWheel.svg", getRandomX(), getRandomY(),  90, infinite);
        var cheese = new Food("img/Ciabatta.svg", getRandomX(), getRandomY(), 90, infinite);
        var cheese = new Food("img/Huevo.svg", getRandomX(), getRandomY(), 90, infinite);
        var cheese = new Food("img/RibEye.svg", getRandomX(), getRandomY(), 90, infinite);
        var cheese = new Food("img/Wieners.svg", getRandomX(), getRandomY(), 90, infinite);
        var cheese = new Food("img/FrenchBread.svg", getRandomX(), getRandomY(), 90, infinite);
      }
    }, 1000);
  }
}
function getRandomY(){
  return Math.floor(Math.random() * -450);
}
function getRandomX(){
  return Math.floor(Math.random() * $(window).width() - $(window).width() * 0.25);
}
/* END FALLING FOOD*/
