# 13 - Slide in on Scroll
## :eyes: Introduction

![](./screenshot_1.jpg)

### Main goals

- The images will only appear when the user scrolls down/up the page. (Simple lazing loading!) 

### Demo: 👉 [Click me]() 

## :pushpin: Solution
### My solution
My solution is entirely different from the example, first is because there's a much easier approach available now, second is that the layout is too outdated and far from realistic webpages.  

My solution mainly comes from [this video](https://www.youtube.com/watch?v=T33NN_pPeNI&t=14s) from Fireship, which uses the **Intersection Observer API** (supported in all major browsers nowadays) to achieve lazy-loading.
#### CSS
```css
.slide-in {
    opacity: 0;
    transition: all .5s;
}

.slide-in.from-left {
    transform: translateX(-30%) scale(0.95);
}

.slide-in.from-right {
    transform: translateX(30%) scale(0.95);
}

.slide-in.active {
    opacity: 1;
    transform: translateX(0%) scale(1);
}
```

#### JavaScript
```javascript
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
});

const slideInImages = document.querySelectorAll('.slide-in');
slideInImages.forEach(image => observer.observe(image));
```
### Example solution
* The demo for example solution is here 👉 [Click me]() 
  
Compared to the solution using the Intersection Observer API, this approach requires more math (thus is more complicated, haha). But there are still a few things to learn from.

```javascript
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
    sliderImages.forEach(sliderImage => {
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
    } else {
        sliderImage.classList.remove('active');
    }
    });
}

window.addEventListener('scroll', debounce(checkSlide));
```

## :pencil2: Takeaways


## :book: References

* [Intersection Observer API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)