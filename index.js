
const BASE_URL = "http://api.openweathermap.org/data/2.5";
let query = "weather?";
let cityName = "London";
let id = "524901";
let url  = BASE_URL + "/" + query + "q=" + cityName + "&appid=" + API_KEY;
console.log(url);
fetch(url, {mode: 'cors'})
  .then((response) => response.json())
  .then(data=>console.log(data));
