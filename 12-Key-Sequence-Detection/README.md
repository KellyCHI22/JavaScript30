# 12 - Key Sequence Detection
## :eyes: Introduction

![](./screenshot_1.jpg)

### Main goals

- When a user enters the secret code, there will be a surprise!

### Demo: 👉 [Click me](https://kellychi22.github.io/JavaScript30/12-Key-Sequence-Detection/) 

## :pushpin: Solution

### My solution
Same as the example solution, just with a different secret code.

```javascript
const pressed = [];
const secretCode = 'kellychi';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').toLowerCase().includes(secretCode)) {
      console.log('DING DING!');
      cornify_add();
  }
  console.log(pressed);
});
```

## :pencil2: Takeaways

### 1. How to keep the array at the same length all the time

Since we track the keys that the user presses and push them to an array, the length of the array will keep growing. In order to limit the length of the array and then verify it, we have to cut the array once it's getting too long.

```javascript
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
```

The first parameter of `Array.splice()` indicates the starting index of the element (or elements) you want to remove. The second parameter indicates the number of elements in the array to be removed. (The third parameter and the rest are the elements to add to the array, but in this case we don't need it)

So, the first parameter here is `-secretCode.length - 1`, which is equal to `-9`. As we all know, if the index of an element is a negative number, the counting is backward. 

The second parameter here is `pressed.length - secretCode.length`. Our secret code length is fixed to `8` here, but we need to look closer at the `presses.length`.

When the user enters the 9th key, there will be 9 elements in the `pressed` array. And the `pressed.length` is `9`. Then, the second parameter `pressed.length - secretCode.length` will be `9-8` which equals `1`.

Thus, the entire thing (`pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)`) will become `pressed.splice(-9, 1)`, which literally means **deleting the first element of the array**.

In this way, once there are over 8 elements in the array, the 9th one will be deleted right away, which results in keeping the array in the same length all the time.


### 2. Add `toLowerCase()` to make both cases work
Another small thing to modify in the example solution is that it doesn't verify upper cased secret code. For example if you press `'K' 'E' 'L' 'L' 'Y' 'C' 'H' 'I'`, the surprise won't appear.

To solve this I simply added `toLowerCase()` to make both cases work.

```javascript
if (pressed.join('').toLowerCase().includes(secretCode)) {
    console.log('DING DING!');
    cornify_add();
}
```

## :book: References

* [Cornify: Unicorns & Rainbows On-Demand](https://www.cornify.com/)