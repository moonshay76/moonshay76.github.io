//Use Underground Weather site to populate the town pages with data

var weatherGreenville = new XMLHttpRequest();

weatherGreenville.open('GET', 'https://api.wunderground.com/api/1f7ee438ba530e58/conditions/q/MI/Greenville.json', true);

weatherGreenville.send();

weatherGreenville.onload = function () {

    var weatherInfo = JSON.parse(weatherGreenville.responseText);
    console.log(weatherInfo);
    
    var str = document.getElementById('imageIcon').src = weatherInfo.current_observation.icon_url;
    var res = str.replace("http://icons.wxug.com/i/c/k/nt_clear.gif", "https://icons.wxug.com/i/c/k/nt_clear.gif");
    document.getElementById("imageIcon").src = res;

    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.city;

    document.getElementById('precipitate').innerHTML = weatherInfo.current_observation.precip_1hr_in;

    document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;

    document.getElementById('forcast').innerHTML = weatherInfo.current_observation.weather;

    document.getElementById('winDir').innerHTML = weatherInfo.current_observation.wind_dir;

    document.getElementById('windOutput').innerHTML = weatherInfo.current_observation.windchill_string;



} //end of onload


// Current Conditions for Franklin



var currentW = new XMLHttpRequest();

currentW.open('GET', 'https://api.wunderground.com/api/1f7ee438ba530e58/forecast/q/MI/Greenville.json', true);
currentW.send();

currentW.onload = function () {

    var weatherI = JSON.parse(currentW.responseText);
    console.log(weatherI);

    document.getElementById('weatherCurrent').innerHTML = weatherI.forecast.txt_forecast.forecastday["0"].fcttext;
    
    document.getElementById('lowTemp').innerHTML = weatherI.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    
    document.getElementById('highTemp').innerHTML = weatherI.forecast.simpleforecast.forecastday["0"].high.fahrenheit;

}
