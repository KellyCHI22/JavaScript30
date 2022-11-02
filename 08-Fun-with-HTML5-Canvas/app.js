// base settings for a canvas
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 2;

// initial variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let fontSize = 60;

function draw(e) {

    if (!isDrawing) return; // stop the func from running when not mouse down

    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.font = `${fontSize}px sans-serif`;
    ctx.strokeText("Hello World", lastX, lastY);
    // need to update X and Y or it always start from the same place
    lastX = e.offsetX;
    lastY = e.offsetY;
    // or: [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue >= 360) {
        hue = 0;
    }

    if (fontSize >= 150 || fontSize <= 50) {
        direction = !direction;
    }

    if (direction) {
        fontSize++;
    } else {
        fontSize--;
    }

}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    // update X and Y when mousedown so it doesn't start from where we left off last time
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false); // when mouse is out of window, consider mouseup too
;;
