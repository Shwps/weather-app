

function convertor(value) {
  const kelvinDiff = 273.15;
  const tempC = Math.round(value - kelvinDiff);
  return tempC;
}

function currentDateAndTime() {
  const dateInfo = document.querySelector(".date");
  const dateObj = new Date();
  const hours =
    dateObj.getHours() < 10 ? "0" + dateObj.getHours() : dateObj.getHours();
  const minutes =
    dateObj.getMinutes() < 10
      ? "0" + dateObj.getMinutes()
      : dateObj.getMinutes();
  const seconds =
    dateObj.getSeconds() < 10
      ? "0" + dateObj.getSeconds()
      : dateObj.getSeconds();
  dateInfo.textContent = `${dateObj.getDate()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getFullYear()} - ${hours}:${minutes}:${seconds}`;
  setTimeout(function () {
    currentDateAndTime();
  }, 1000);
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export { convertor, currentDateAndTime, getRandomInt };
