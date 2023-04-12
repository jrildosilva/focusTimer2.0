const timerMinutes = document.querySelector('#minutes');
const timerSeconds = document.querySelector('#seconds');
const playButton = document.querySelector('#play');
const stopButton = document.querySelector('#stop');
const addButton = document.querySelector('#add');
const decreaseButton = document.querySelector('#decrease');
const cardsContainer = document.querySelector('#cards');
const forestButton = document.querySelector('.sound-floreta');
const rainButton = document.querySelector('.sound-rain');
const coffeeButton = document.querySelector('.sound-cafeteira');
const fireplaceButton = document.querySelector('.sound-lareira');
const forestSound = new Audio('./sound/Floresta.wav');
const rainSound = new Audio('./sound/Chuva.wav');
const coffeeSound = new Audio('./sound/Cafeteria.wav');
const fireplaceSound = new Audio('./sound/Lareira.wav');


let minutes = 25;
let seconds = 25


function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timerInterval);
      // Timer acabou
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  } 


  timerMinutes.textContent = minutes.toString().padStart(2, '0');
  timerSeconds.textContent = seconds.toString().padStart(2, '0');
}

function stopTimer() {
  clearInterval(timerInterval)
};
let timerInterval;

playButton.addEventListener('click', () => {
  timerInterval = setInterval(updateTimer, 1000);
});

  stopButton.addEventListener('click',stopTimer);

addButton.addEventListener('click', () => {
  minutes++;
  timerMinutes.textContent = minutes.toString().padStart(2, '0');
  if (minutes === 0) {
    if ( seconds === 0) {
      minutes = 5
    }
  }
});

decreaseButton.addEventListener('click', () => {
  minutes--;
  timerMinutes.textContent = minutes.toString().padStart(2, '0');
});

forestButton.addEventListener('click', () => {
  forestSound.play();
 
  const audio = document.querySelector('audio ')
  audio.play()
 
});

rainButton.addEventListener('click', () => {
  rainSound.play();
  const audio = document.querySelector('audio')
  audio.play()
 
});

coffeeButton.addEventListener('click', () => {
  coffeeSound.play();
  const audio = document.querySelector('audio')
  audio.play()
});

fireplaceButton.addEventListener('click', () => {
  fireplaceSound.play();
  const audio = document.querySelector('audio')
  audio.play()
 
});
