//Loading Screen
$(document).ready(function(){

  var loadingMessage = ["Loading...", "Adding pepperoni's...", "Checking prices...", "taking a small potty break...", "Browsing YouTube...", "Getting distracted..."];
  setInterval(function(){
    var random = Math.floor(Math.random() * (loadingMessage.length-1));
    var message = loadingMessage[random];
    console.log(random);
    console.log(message);
    $('#loading-message').fadeOut("slow", function(){
      $(this).text(message).fadeIn("slow");
    });
  }, 4000);
});
