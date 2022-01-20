
const BASE_URL = "http://api.openweathermap.org/data/2.5";
let query = "weather?";
// let id = "524901";
// console.log(url);



function getWeatherData(location) {
  let cityName = location;
  let url  = BASE_URL + "/" + query + "q=" + cityName + "&appid=" + API_KEY;
  // let temperature = fetch(url, {mode: 'cors'})
  //                     .then((response) => response.json())
  //                     .then(data => {
  //                         currentWeather = processJSONData(data);
  //                         return currentWeather;
  //                     });
  // return temperature.then(x=>x);

  return fetch(url, {mode: 'cors'})
              .then((response) => response.json())
              .then(data => {
                  currentWeather = processJSONData(data);
                  return currentWeather;
              });
}

function processJSONData(data) {
  // console.log(data);
  let parcialData = {
    weather: data['weather'],
    main: data['main'],
    wind: data['wind'],
  }
  return parcialData;
}

getWeatherData("Buenos Aires")
    .then(result => console.log(result));
    // .then(result=>console.log(kelvinToCelsius(Number(result.temp))));
// console.log(getWeatherData("Buenos Aires"));

function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15);
}
