

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

// ARROW FUNCTIONALITY 

const arrowObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('arrow visible');
        entry.target.querySelector('.loop').classList.add('loop-play');
        entry.target.querySelector('.arrow-head').classList.add('arrow-head-play');
      } else {
          //entry.target.querySelector('.inner-wrap').classList.remove('show')
      }
  });
}, {
  threshold: 0.7,  
});

const arrowElement = document.querySelector('.arrow-animation');

arrowObserver.observe(arrowElement);

//SCREEN FUNCTION

const screenObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('screens visible');
      entry.target.querySelectorAll('.screen').forEach((el) => {
        el.classList.add('show');
      }
      )
    }
  })
}, {
  threshold: 0.7
});

const screenElements = document.querySelector('.screens-wrap')

screenObserver.observe(screenElements);
