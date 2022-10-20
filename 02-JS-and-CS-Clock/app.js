const secondPointer = document.querySelector('.second-hand');
const minutePointer = document.querySelector('.min-hand');
const hourPointer = document.querySelector('.hour-hand');

function setRotate(deg, pointer) {
    if (deg === 90) {
        pointer.style.transition = 'all 0s';
    } else {
        pointer.style.transition = 'all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)';
    }
    return `rotate(${deg}deg)`;
}

function getTime() {
    const currentTime = new Date();

    const second = currentTime.getSeconds();
    const minute = currentTime.getMinutes();
    const hour = currentTime.getHours();

    let secondDegree = (second / 60) * 360 + 90;
    let minuteDegree = (minute / 60) * 360 + (second / 60) * 6 + 90;
    let hourDegree = (hour / 12) * 360 + (minute / 60) * 30 + 90;

    secondPointer.style.transform = setRotate(secondDegree, secondPointer);
    minutePointer.style.transform = setRotate(minuteDegree, minutePointer);
    hourPointer.style.transform = setRotate(hourDegree, hourPointer);
}

setInterval(getTime, 1000)


