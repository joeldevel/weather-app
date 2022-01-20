
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
    name: data['name'],
    weather: data['weather'],
    main: data['main'],
    wind: data['wind'],
  }
  return parcialData;
}

// getWeatherData("Buenos Aires")
//     .then(result => console.log(result));


function iconURL(id) {
    return `http://openweathermap.org/img/wn/${id}@2x.png`;
}

function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15);
}

/*****************************************************************************
//                        get user input
******************************************************************************/

const city = document.querySelector('#user-input');
const form = document.querySelector('#form');
const cardTitle = document.querySelector('#city-name');
const cityTemperature = document.querySelector('#city-temperature');
const weatherIcon = document.querySelector('#weather-icon');
// console.log(weatherIcon);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log("sending info");
    if(city.value !== "") {
        // console.log("yea, somthing to read");
        getWeatherData("Buenos Aires")
            .then(result => {
              // console.log(result);
              cardTitle.textContent = result.name;
              cityTemperature.textContent = result.main.temp;
              weatherIcon.src = iconURL(result.weather[0].icon);
        });
    }
})
// console.log(city)
