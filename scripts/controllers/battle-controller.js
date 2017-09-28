var round = 0;
function loadBattles(){
  round++;
  var restaurants = getRestaurantList();

  //Shuffle
  shuffleList(restaurants);

  var maxRestaurants = loadSettings().numrestaurants;
  if (restaurants.length > maxRestaurants){
    restaurants = restaurants.slice(0, maxRestaurants);
  }


  console.log("Restaurants: ", restaurants);
  if (restaurants.length == 1){
    displayWinner(restaurants[0]);
  }

  while (restaurants.length >= 2){
    initBattle(restaurants.pop(), restaurants.pop());
  }

  setRestaurantList(restaurants);


}
/* initBattle

*/
function initBattle(restaurant1, restaurant2){
  console.log("initBattle: ", restaurant1, restaurant2);
  var battle = $('.battle.prototype').clone();
  battle.removeClass("prototype");
  $('#battle-field').append(battle);
  battle.find(".round-number").text(round);
  battle.find("#restaurant-a").load("fragments/restaurant.html", function(){
    loadRestaurant(restaurant1, $(this));
  });
  battle.find("#restaurant-b").load("fragments/restaurant.html", function(){
    loadRestaurant(restaurant2, $(this));
  });

}

/* KILL BATTLE */
function killBattle(battleElem){
  var nextBattle = battleElem.next(".battle");
  battleElem.fadeOut("slow", function(){
    $(this).remove();
  });
  if (nextBattle.length == 0){
    loadBattles();
  } else{
    triggerAnimations(nextBattle);
  }

}

function loadRestaurant(restaurant, elem){
  elem.find("#name").text(restaurant.name);
  elem.find(".restaurant-tile").attr("data-restaurant", JSON.stringify(restaurant));
  elem.find("input[type='button']").on("tap click", function(){
    var restaurant = JSON.parse($(this).closest(".restaurant-tile").attr("data-restaurant"));
    var list = getRestaurantList();
    list.push(restaurant);
    setRestaurantList(list);
    killBattle($(this).closest(".battle"));
  });
}


function shuffleList(list){
    var j, x, i;
    for (i = list.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = list[i - 1];
        list[i - 1] = list[j];
        list[j] = x;
    }}

function displayWinner(restuarant){
  $('#fragment-holder').load("fragments/winner.html", function(){
    $('#name').text(restuarant.name);
  });
}
