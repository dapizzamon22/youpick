var loadingInterval;
var developmentkey = "AIzaSyCPmbCGNsLcVogJBfLN8XUM3ndmTiO5tC8";
//Loading Screen
$(window).on("load", function() {
  $('#fragment-holder').load("fragments/enter-location.html", function() {
    $(this).find("#get-location-form").on("submit", function(e) {
      e.preventDefault();
      var locationInput = $(this).find("#location").serialize();
      console.log("Location input: ", locationInput);
      var reverseGeocodingURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + locationInput + "&key=" + developmentkey;
      $.get(reverseGeocodingURL, function(location) {
        console.log(location);
        if (location.results.length > 0) {
          localStorage.setItem("location", JSON.stringify(location.results[0]));
          localStorage.setItem("coords", JSON.stringify(location.results[0].geometry.location));
          lat = JSON.parse(localStorage.getItem("coords")).lat;
          lng = JSON.parse(localStorage.getItem("coords")).lng;
          radiusInMeters = loadSettings().radius * 1609.34;
          maxPrice = loadSettings().maxprice;
          var restaurants = [];
          $.get("scripts/php/get-locations.php", {
            lat: lat,
            lng: lng,
            radius: 20000,
            maxPrice: maxPrice
          }, function(restaurants) {
            console.log(restaurants);
            restaurants = JSON.parse(restaurants);
            setRestaurantList(restaurants);
            clearInterval(loadingInterval);
            $('#fragment-holder').load("fragments/battle.html", function() {
              loadBattles();
            });
          });

        }
      });

      //Start loading screen
      $('#fragment-holder').load("fragments/loading.html", function() {
        initFoodFall();
        var loadingMessage = ["Loading...", "Adding pepperoni's...", "Checking prices...", "taking a small potty break...", "Browsing YouTube...", "Getting distracted..."];
        loadingInterval = setInterval(function() {
          var random = Math.floor(Math.random() * (loadingMessage.length - 1));
          var message = loadingMessage[random];
          $('#loading-message').fadeOut("slow", function() {
            $(this).text(message).fadeIn("slow");
          });
        }, 4000);
      })
    });
  });
});


function getRestaurantList() {
  return JSON.parse(localStorage.getItem("restaurants"));
}

function setRestaurantList(newList) {
  localStorage.setItem("restaurants", JSON.stringify(newList));
}
