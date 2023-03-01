import "./style.css";
import WindIcon from "./assets/images/wind.png";
import SunsetIcon from "./assets/images/sunset.png";
import HumidityIcon from "./assets/images/humidity.png";
import * as utils from "./utils.js";

let location = "athens";
let weather = retreiveWeather(location);
weather.then(function (resp) {
  displayWeather(resp);
});

let windIcon = document.querySelector(".wind-icon");
windIcon.src = WindIcon;
let sunsetIcon = document.querySelector(".sunset-icon");
sunsetIcon.src = SunsetIcon;
let humidityIcon = document.querySelector(".humidity-icon");
humidityIcon.src = HumidityIcon;

let windInfo = document.getElementById("wind-info");
let tempElement = document.querySelector(".temp");
let placeElement = document.querySelector(".place");
let humidityInfo = document.getElementById("humidity-info");
let sunsetInfo = document.getElementById("sunset-info");
let searchForm = document.querySelector(".search-container");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector(".search-input").value;
  console.log(input);
  location = input;
  retreiveBackgroundPhoto(location);
  retreiveWeather(location).then(function (resp) {
    displayWeather(resp);
  });
});

async function retreiveWeather(location) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1a1efe78f58985c6c650a37b9658fcd0`
  );
  let resp = await response.json();
  return resp;
}

async function retreiveBackgroundPhoto(location) {
  let url = `https://api.unsplash.com/search/photos?page=1&query=${location}&per_page=20&orientation=landscape&client_id=iOsuZCLmG8Lt_8vftPxYyzcKiHct_cTr4VYx9iKzAa4`;
  let response = await fetch(url);
  let obj = await response.json();
  console.log(obj);
  document.body.style.backgroundImage = `url(${obj.results[0].urls.full})`;
}
retreiveBackgroundPhoto(location);

function displayWeather(weatherObj) {
  console.log(weatherObj);
  tempElement.textContent = utils.convertor(weatherObj.main.temp);
  placeElement.textContent = weatherObj.name;
  utils.currentDateAndTime();
  windInfo.textContent = weatherObj.wind.speed;
  humidityInfo.textContent = weatherObj.main.humidity + "%";
  let time = new Date(weatherObj.sys.sunset * 1000);
  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();

  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }

  sunsetInfo.textContent = hours + ":" + minutes;
}
