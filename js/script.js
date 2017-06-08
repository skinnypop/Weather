const K_TO_C = 273.15;

var openWeatherAPIKey = 'a335b08666ef0c729343d9b3f6f37828';
var darkSkyKey = 'ef3db514e07e9876356020a725f24ee9';

var $desc = $('#description');
var icon;
var $tempF = $('#tempF');
var $degF = $('#degF');
var $tempC = $('#tempC');
var $degC = $('#degC');
var tempF;
var tempC;
var $city = $('#city');



function getWeather(lat,lon){
  $.ajax({
  url: 'https://crossorigin.me/https://api.darksky.net/forecast/' + darkSkyKey + '/' + lat + ',' + lon,
  datatype: 'jsonp'
    
    
  }).done(parseData);
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
        $city.text(data.city);
        console.log(data.city,data.latitude, data.longitude);
        getWeather(data.latitude, data.longitude);
      }
    });
}

function parseData(response){
    console.log(response);
    $desc.text(response.currently.summary);
    icon = response.currently.icon;
    tempF = response.currently.temperature.toFixed(1);
    tempC = ((tempF - 32) * 5 / 9).toFixed(1);
    $tempF.text(tempF);
    $degF.text(' \xB0' + 'F');
    $tempC.text(tempC);
    $degC.text(' \xB0' + 'C');
    console.log(icon);
}
getLocation();

$(document).ready(function(){
  $degF.click(function () {
    
    alert("span clicked");

  });
});





