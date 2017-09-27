function loadBattles(){
  var restaurants = getRestaurantList();
  console.log("Restaurants: ", restaurants);
  if (restaurants.length == 1){
    displayWinner(restaurants[0]);
  }
//Shuffle
  shuffleList(restaurants);
  while (restaurants.length >= 2){
    initBattle(restaurants.pop(), restaurants.pop());
  }



}
/* initBattle

*/
function initBattle(restaurant1, restaurant2){
  console.log("initBattle: ", restaurant1, restaurant2);
  var battle = $('.battle.prototype').clone();
  battle.removeClass("prototype");
  $('#battle-field').append(battle);
  battle.find("#restaurant-a").load("fragments/restaurant.html", function(){
    loadRestaurant(restaurant1, $(this));
  });
  battle.find("#restaurant-b").load("fragments/restaurant.html", function(){
    loadRestaurant(restaurant2, $(this));
  });

}

function loadRestaurant(restaurant, elem){
  elem.find("#name").text(restaurant.name);
}


function shuffleList(list){
    var j, x, i;
    for (i = list.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = list[i - 1];
        list[i - 1] = list[j];
        list[j] = x;
    }}
