function loadSettings() {
  if (localStorage.getItem("settings") != null) {
    console.log("settings defined!");
    var settings = JSON.parse(localStorage.getItem("settings"));
    console.log("settings: ", settings);
    return settings;
  } else {
    console.log("settings not defined!");
    var settings = {
      radius: 15,
      minprice: 0,
      maxprice: 4,
      numrestaurants: 16,
      animations: true,
      sounds: true
    };
    saveSettings(settings);
    return settings;
  }

}

function saveSettings(settings) {
  localStorage.setItem("settings", JSON.stringify(settings));
}
