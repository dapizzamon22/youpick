$(document).ready(function() {
  $('body').on("click tap", "input[type='button']#settings-button", function() {
    $("#settings").addClass("expanded");
  });
  $('body').on("click tap", "#settings .minimize", function() {
    $('#settings').toggleClass("expanded");
  });
  $('#start-tournament').on("click", function() {
    window.location.href = "tournament";
  });

  var settings = loadSettings();
  if (settings.animations) {
    $("#animations").attr("checked", true);
  } else {
    $("#animations").attr("checked", false);
  }
  if (settings.sounds) {
    $("#sounds").attr("checked", true);
  } else {
    $("#sounds").attr("checked", false);
  }
  $("#numRestaurants").val(settings.numrestaurants);
  $("#radius").val(settings.radius);
  $("#minprice").val(settings.minprice);
  $("#maxPrice").val(settings.maxprice);
  $("input").on("change", function() {
    var settings = loadSettings();
    settings.animations = $("#animations").is(":checked");
    settings.sounds = $("#sounds").is(":checked");
    settings.radius = $("#radius").val();
    settings.minprice = $("#minprice").val();
    settings.maxprice = $("#maxPrice").val();
    settings.numrestaurants = $("#numRestaurants").val();
    saveSettings(settings);
  });
  $("#home").on("tap click", function() {
    switchFragment("home");
  });

});
