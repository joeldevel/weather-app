
const BASE_URL = "http://api.openweathermap.org/data/2.5";
let query = "weather?";
// let id = "524901";
// console.log(url);



function getWeatherData(location) {
  let cityName = location;
  let url  = BASE_URL + "/" + query + "q=" + cityName + "&appid=" + API_KEY;
  fetch(url, {mode: 'cors'})
  .then((response) => response.json())
  .then(data => console.log(data));
}

getWeatherData("Buenos Aires");
