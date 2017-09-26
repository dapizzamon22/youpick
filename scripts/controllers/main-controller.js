$(document).ready(function(){
  $('body').on("click tap", "input[type='button']#settings-button", function(){
    $("#settings").addClass("expanded");
  })
});
