import * as Utils from "./utils.js";

async function retreiveWeather(location) {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1a1efe78f58985c6c650a37b9658fcd0`
    );
    let resp = await response.json();
    console.log(resp)
    return resp;
  }
  
  async function retreiveBackgroundPhoto(location) {
    let url = `https://api.unsplash.com/search/photos?page=1&query=${location}&per_page=20&orientation=landscape&client_id=iOsuZCLmG8Lt_8vftPxYyzcKiHct_cTr4VYx9iKzAa4`;
    let response = await fetch(url);
    let obj = await response.json();
    document.body.style.backgroundImage = `url(${obj.results[Utils.getRandomInt(5)].urls.full})`;
  }

  export {retreiveBackgroundPhoto, retreiveWeather}