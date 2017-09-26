var Restaurant = function(json){
  this.location = json.geometry.location;
  this.name = json.name;
  this.photo = json.photos[0].photo_reference;
  this.place_id = json.place_id;
  this.rating = json.rating;
  this.address = json.vicinity;
  this.price = json.price_level;
}
