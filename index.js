
const BASE_URL = "http://api.openweathermap.org/data/2.5";
let query = "weather?";
// let id = "524901";
// console.log(url);



function getWeatherData(location) {
  let cityName = location;
  let url  = BASE_URL + "/" + query + "q=" + cityName + "&appid=" + API_KEY;
  fetch(url, {mode: 'cors'})
  .then((response) => response.json())
  .then(data => {
    // console.log(data)
    currentWeather = processJSONData(data);
    console.log(currentWeather);
  });
}

function processJSONData(data) {
  weather = {
    "temp": data.main.temp
  };

  return weather;
}

getWeatherData("Buenos Aires");
