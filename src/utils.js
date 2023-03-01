
function convertor(value) {
    let kelvinDiff = 273.15;
    let tempC = Math.round(value - kelvinDiff);
    return tempC;
  }

  function time(value) {
   return Date.UTC(value);
  }

function currentDateAndTime () {
  let dateInfo = document.querySelector(".date")
  const dateObj = new Date();
  let hours = (dateObj.getHours() < 10) ? "0" + dateObj.getHours() : dateObj.getHours();
  let minutes = (dateObj.getMinutes() < 10) ? "0" + dateObj.getMinutes() : dateObj.getMinutes();
  let seconds = (dateObj.getSeconds() < 10) ? "0" + dateObj.getSeconds() : dateObj.getSeconds();
  dateInfo.textContent = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()} - ${hours}:${minutes}:${seconds}`
  let t = setTimeout(function(){ currentDateAndTime()}, 1000)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}




export {convertor, currentDateAndTime, getRandomInt}