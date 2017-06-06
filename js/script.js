const K_TO_C = 273.15;

var openWeatherAPIKey = 'a335b08666ef0c729343d9b3f6f37828';
var darkSkyKey = 'ef3db514e07e9876356020a725f24ee9';

var $desc = $('#description');
var icon;
var $tempC = $('#temp');
var $city = $('#city');



function getWeather(lat,lon){
  $.ajax({
  url: 'https://api.darksky.net/forecast/' + darkSkyKey + '/' + lat + ',' + lon,
  success: function(response){
    console.log('success');
    //$desc.text(response.weather[0].description);
    //icon = response.weather[0].icon;
    //$tempC.text((response.main.temp - K_TO_C).toFixed(1) + ' \xB0' + 'C');
    //console.log(icon);
    //$city.text(response.name);
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
      url: 'https://ipapi.co/json/',
      success: function(data){
        console.log(data.city,data.latitude, data.longitude);
        getWeather(data.latitude, data.longitude);
      }
    });
}

getLocation();



