retreiveWeather("Stockholm");


async function retreiveWeather(location) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1a1efe78f58985c6c650a37b9658fcd0`
  );
  response.json().then(function (resp) {
    console.log(resp);
  });
}
