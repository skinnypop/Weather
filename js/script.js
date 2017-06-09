const K_TO_C = 273.15;

var openWeatherAPIKey = 'a335b08666ef0c729343d9b3f6f37828';
var darkSkyKey = 'ef3db514e07e9876356020a725f24ee9';

var $desc = $('#description');
var icon;
var $sectionF = $('#sectionF');
var $tempF = $('#tempF');
var $degF = $('#degF');
var $sectionC = $('#sectionC');
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

// Degree change
$sectionC.hide();

$(document).ready(function(){
  $degF.click(function () {
    $sectionF.hide();
    $sectionC.show();
  });
  $degC.click( function () {
    $sectionC.hide();
    $sectionF.show();
  })
});







