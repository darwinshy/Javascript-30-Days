const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const displayTime = document.querySelector('.display-time');

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutees = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutees / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;

  displayTime.textContent = now.toLocaleTimeString();
  secondHand.style.transform = `rotate(${secondsDegrees}deg) translate(0, -50%)`;
  minsHand.style.transform = `rotate(${minutesDegrees}deg) translate(0, -50%)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg) translate(0, -50%)`;
};

setInterval(setDate, 1000);
