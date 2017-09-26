var Restaurant = function(json){
  this.location = json.geometry.location;
  this.name = json.name;
  this.photo = json.photos[0].photo_reference;
  this.place_id = json.place_id;
  this.rating = json.rating;
  this.address = json.vicinity;
  this.price = json.price_level;
}

var Tournament = function(listofrestaurants){
  this.restaurants = listofrestaurants;
  this.getRestaurants = function(){
    return restaurants;
  }
}

var Settings = function(){
  this.maxPrice;
  var that = this;
  this.numRestaurants;
  this.animations;
  this.sound;
  this.load = function(){
    that = JSON.parse(localStorage.getItem("settings"));
  }
  this.save = function(){
    localStorage.setItem("settings", JSON.stringify(that));
  }
}
