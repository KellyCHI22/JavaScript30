# 28 - Video Speed Controller
## :eyes: Introduction

![](./screenshot_1.jpg)

### Main goal

- The user can control the video speed by hovering over the speed bar.


### Demo: 👉 [Click me]() 

## :pushpin: Solution
### Example solution

```javascript
const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + '×';
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);
```
## :pencil2: Takeaways

### 1. Calculate the position of the mouse relative to the speed bar and update the height accordingly

Same as what we did the previous day, we can get the Y coordinate of the mouse relative to the speed bar by using `e.pageY` and `this.offserTop`. (Here `this` is referring to the `speed` container.)
 
Then, we can update the height of the inner speed bar based on the percentage we get by dividing the Y coordinate of the mouse by the height of the `speed` container.
```javascript
function handleMove(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const height = Math.round(percent * 100) + '%';
    bar.style.height = height;
}
```
### 2. Update the playbackRate accordingly too
We can set whatever minimum and maximum value we want for the speed bar, but note that we need to add the minimum value back for the playbackRate. Plus, we can update the text on the speed bar so that the user can easily see the current speed of the video.
```js
function handleMove(e) {
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const playbackRate = percent * (max - min) + min;
    bar.textContent = playbackRate.toFixed(2) + '×';
    video.playbackRate = playbackRate;
}
``` 
### 3. Quick note on `toFixed()`
The JavaScript `Number.toFixed( )` method is used to format a number using fixed-point notation. Below are some examples from MDN:
```js
const numObj = 12345.6789;

numObj.toFixed(); // '12346'; rounding, no fractional part
numObj.toFixed(1); // '12345.7'; it rounds up
numObj.toFixed(6); // '12345.678900'; additional zeros
```

## :book: References
* [Number.prototype.toFixed() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)