import "./style.css";
import * as DomManipulation from "./domManipulation.js";
import * as Api from "./apiCommuncations.js";

DomManipulation.loadPage();

const searchForm = document.querySelector(".search-container");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector(".search-input").value;
  Api.retreiveBackgroundPhoto(input);
  Api.retreiveWeather(input).then(function (resp) {
    DomManipulation.displayWeather(resp);
  });
});
