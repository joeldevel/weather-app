
const BASE_URL = "http://api.openweathermap.org";
let query = "data/2.5/forecast?";
let id = "524901";
let url  = BASE_URL + "/" + query + "id=" + id + "&appid=" + API_KEY;

fetch(url, {mode: 'cors'})
  .then((response) => response.json())
  .then(data=>console.log(data));
