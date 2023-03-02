import * as Utils from "./utils.js";
import * as Api from "./apiCommuncations.js";
import WindIcon from "./assets/images/wind.png";
import SunsetIcon from "./assets/images/sunset.png";
import HumidityIcon from "./assets/images/humidity.png";
import { DateTime } from "luxon";

let windInfo = document.getElementById("wind-info");
let tempElement = document.querySelector(".temp-value");
let placeElement = document.querySelector(".place");
let humidityInfo = document.getElementById("humidity-info");
let sunsetInfo = document.getElementById("sunset-info");

function displayWeather(weatherObj) {
  tempElement.textContent = Utils.convertor(weatherObj.main.temp);
  placeElement.textContent = weatherObj.name;
  Utils.currentDateAndTime(weatherObj);
  windInfo.textContent = Math.round(weatherObj.wind.speed) + " m/s";
  humidityInfo.textContent = weatherObj.main.humidity + "%";

  let time = new Date(weatherObj.sys.sunset * 1000);
  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();

  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }

  sunsetInfo.textContent = hours + ":" + minutes;
}

function loadPage() {
  const cities = [
    "stockholm",
    "madrid",
    "rio de janeiro",
    "paris",
    "bejing",
    "new York",
    "sydney",
    "tokyo",
    "edinburgh",
    "mumbai",
  ];
  const windIcon = document.querySelector(".wind-icon");
  windIcon.src = WindIcon;
  const sunsetIcon = document.querySelector(".sunset-icon");
  sunsetIcon.src = SunsetIcon;
  const humidityIcon = document.querySelector(".humidity-icon");
  humidityIcon.src = HumidityIcon;

  const location = cities[Utils.getRandomInt(9)];
  const weather = Api.retreiveWeather(location);
  weather.then(function (resp) {
    displayWeather(resp);
  });

  Api.retreiveBackgroundPhoto(location);
}

export { displayWeather, loadPage };
