

// CLOCK FUNCTIONALITY
const clockHand = document.querySelector(".clock-hand");

const figure = document.querySelector(".figures");

let rotation = 0;
const rotationIncrement = 6;
let number = 300;
let numberIncrement = 5;

function makeClockHand() {
  rotation += rotationIncrement;
  clockHand.style.transform = `rotate(${rotation}deg)`;

  number += numberIncrement;
  figure.textContent = number;
}

setInterval(makeClockHand, 1000);
