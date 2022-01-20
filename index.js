
const BASE_URL = "http://api.openweathermap.org/data/2.5";
let query = "weather?";

function getWeatherData(location) {
  let cityName = location;
  let url  = BASE_URL + "/" + query + "q=" + cityName + "&appid=" + API_KEY;
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

/*****************************************************************************
//                        get user input
******************************************************************************/

const city = document.querySelector('#user-input');
const form = document.querySelector('#form');
const cardTitle = document.querySelector('#city-name');
const cityTemperature = document.querySelector('#city-temperature');
const weatherIcon = document.querySelector('#weather-icon');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(city.value !== "") {
        getWeatherData(formatCity(city.value))
            .then(result => {
              cardTitle.textContent = result.name;
              cityTemperature.textContent = result.main.temp;
              weatherIcon.src = iconURL(result.weather[0].icon);
        });
    }
})

/*****************************************************************************
//                        utility functions
******************************************************************************/

function iconURL(id) {
    return `http://openweathermap.org/img/wn/${id}@2x.png`;
}

function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15);
}

function capitalize(str) {
    if(!str) { return str; }
    return str[0].toUpperCase() + str.substr(1);
}

function formatCity(city) {
    let components = city.split(' ');
    components = components.map(c => capitalize(c));
    let formattedCity = components.join(' ').trim();
    return formattedCity;
}
