const K_TO_C = 273.15;

var openWeatherAPIKey = 'a335b08666ef0c729343d9b3f6f37828';

var $desc = $('#description');
var icon;
var $tempC = $('#temp');
var $city = $('#city');
var $icon = $('#icon');


function getWeather(lat,lon){
  $.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=' + openWeatherAPIKey,
  success: function(response){
    console.log(response.weather);
    $desc.text(response.weather[0].description);
    icon = response.weather[0].icon;
    $tempC.text((response.main.temp - K_TO_C).toFixed(1) + ' \xB0' + 'C');
    console.log(icon);
    $city.text(response.name);
    getIcon(response.weather[0].description);
    }
  });
}

function getIcon(desc){
  $.getJSON('icon.json', function(iconData){
    console.log("JSON: " + iconData[desc]);
    let x = document.createElement("IMG");
    x.setAttribute("src", iconData[desc]);
    x.setAttribute("width", "128");
    x.setAttribute("height", "128");
    x.setAttribute("alt", desc);
    $icon.append(x);
    });
}


// Get user location
function getLocation(){
  $.ajax({
      url: 'http://ip-api.com/json',
      success: function(data){
        console.log(data.city,data.lat, data.lon);
        getWeather(data.lat, data.lon);
      }
    });
}

getLocation();



