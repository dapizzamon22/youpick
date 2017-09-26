$(document).ready(function(){
  $('body').on("click tap", "input[type='button']#settings-button", function(){
    $("#settings").addClass("expanded");
  });
  $('body').on("click tap", "#settings .minimize", function(){
    $('#settings').toggleClass("expanded");
  });
});
