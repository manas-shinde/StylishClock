let secHand = document.querySelector(".second-hand");
let minsHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");
let digitalClock = document.querySelector(".digital-clock");
let dateDisplay = document.querySelector(".date-display");

function setDate() {
  const currentTime = new Date();

  const seconds = currentTime.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = currentTime.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = currentTime.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  digitalClock.textContent = currentTime.toLocaleTimeString();
  dateDisplay.textContent = currentTime.toDateString();
}

setInterval(setDate, 1000);
