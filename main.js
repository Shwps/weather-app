!async function(a){(await fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=1a1efe78f58985c6c650a37b9658fcd0")).json().then((function(a){console.log(a)}))}();