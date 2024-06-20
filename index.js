let secHand = document.querySelector(".second-hand");
let minHand = document.querySelector(".min-hand");
let hrHand = document.querySelector(".hour-hand");

function set_date() {
  let currentTime = new Date();
  console.log(currentTime);

  let seconds = currentTime.getSeconds();
  let secHandDegree = (seconds / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secHandDegree}deg)`;

  let mins = currentTime.getMinutes();
  let minHandDegree = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minHandDegree}deg)`;

  let hrs = currentTime.getHours();
  let hrsHandDegree = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hrHand.style.transform = `rotate(${hrsHandDegree}deg)`;
}

setInterval(set_date, 1000);
