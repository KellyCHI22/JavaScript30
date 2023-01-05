const holes = document.querySelectorAll('.hole');
const startButton = document.querySelector('.start-btn');
const scoreBoard = document.querySelector('.score');
const scoreCount = document.querySelector('.score-count');
const timeLeft = document.querySelector('.time-left');
const moles = document.querySelectorAll('.mole');
let lastHole;
let lastMole;
let timeUp = false;
let countdown;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        console.log('Ah nah thats the same one bud');
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function startGame(duration) {
    scoreCount.textContent = 0;
    timeUp = false;
    score = 0;
    startButton.textContent = 'RESTART!';
    scoreBoard.classList.remove('final');
    peep();
    setTimeout(() => timeUp = true, duration * 1000);
    timer(duration);
}

function bonk(e) {
    if (!e.isTrusted || lastMole === this) return;
    score++;
    lastMole = this;
    this.parentNode.classList.remove('up');
    scoreCount.textContent = score;
}

// helper function for timer
function timer(seconds) {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            scoreBoard.classList.add('final');
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timeLeft.textContent = display;
}

moles.forEach(mole => mole.addEventListener('click', bonk));