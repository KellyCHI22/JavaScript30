let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const audio = document.querySelector('audio');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);
  progressBar.style.width = `0px`;

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    const timePassed = seconds - secondsLeft;

    // check if we should stop it!
    if (secondsLeft < 0) {
      audio.play();
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
    progressBar.style.width = `${500 * (timePassed / seconds)}px`;
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  if (isNaN(mins)) return this.reset();
  timer(mins * 60);
  this.reset();
});
