const challenges = [
    {
        id: 1,
        title: 'JS Drum Kit',
        desc: 'When a user presses a certain key, an audio will be played accordingly.',
        image: './assets/image_1.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/01-JavaScript-Drum-Kit/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/01-JavaScript-Drum-Kit',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/01-JavaScript-Drum-Kit/README.md'
    },
    {
        id: 2,
        title: 'CSS + JS Clock',
        desc: 'Pointers should rotate according to the current time, yeah, just like a real clock.',
        image: './assets/image_2.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/02-JS-and-CS-Clock/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/02-JS-and-CS-Clock',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/02-JS-and-CS-Clock/README.md'
    },
    {
        id: 3,
        title: 'CSS Variables',
        desc: 'When a user drags or picks an option, the CSS variables should update accordingly.',
        image: './assets/image_3.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/03-CSS-Variables/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/03-CSS-Variables',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/03-CSS-Variables/README.md'
    },
    {
        id: 4,
        title: 'Array Cardio 1',
        desc: 'Strengthen your JavaScript skills by using those array methods!',
        image: './assets/image_4.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/04-Array-Cardio-Day-1/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/04-Array-Cardio-Day-1',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/04-Array-Cardio-Day-1/README.md'
    },
    {
        id: 5,
        title: 'Flex Panel Gallery',
        desc: 'When a user clicks on an image, the image will expand and some text will appear.',
        image: './assets/image_5.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/05-Flex-Panel-Gallery/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/05-Flex-Panel-Gallery',
        note: 'https://github.com/KellyCHI22/JavaScript30/tree/main/05-Flex-Panel-Gallery/README.md'
    },
    {
        id: 6,
        title: 'Ajax Type Ahead',
        desc: 'When a user type in a certain word, a list of cities or states that contain the word wil be displayed. Plus, the key word will be highlighted with yellow background.',
        image: './assets/image_6.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/06-Type-Ahead/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/06-Type-Ahead',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/06-Type-Ahead/README.md'
    },
    {
        id: 7,
        title: 'Array Cardio 2',
        desc: 'Strengthen your JavaScript skills by using those array methods!',
        image: './assets/image_7.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/07-Array-Cardio-Day-2/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/07-Array-Cardio-Day-2',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/07-Array-Cardio-Day-2/README.md'
    },
    {
        id: 8,
        title: 'HTML5 Canvas',
        desc: 'Pointers should rotate according to the current time, yeah, just like a real clock.',
        image: './assets/image_8.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/08-Fun-with-HTML5-Canvas/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/08-Fun-with-HTML5-Canvas',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/08-Fun-with-HTML5-Canvas/README.md'
    },
    {
        id: 9,
        title: 'Dev Tools Domination',
        desc: 'Master Dev Tools to make your developer life a bit easier!',
        image: './assets/image_9.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/09-Dev-Tools-Domination/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/09-Dev-Tools-Domination',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/09-Dev-Tools-Domination/README.md'
    },
    {
        id: 10,
        title: 'Multiple Checkboxes',
        desc: 'When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, all the checkboxes inbetween those two checkboxes should be checked.',
        image: './assets/image_10.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/10-Hold-Shift-and-Check-Checkboxes/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/10-Hold-Shift-and-Check-Checkboxes',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/10-Hold-Shift-and-Check-Checkboxes/README.md'
    },
    {
        id: 11,
        title: 'HTML5 Video Player',
        desc: 'Customized HTML5 video player, with sliders for volume and speed, as well as fast forward and rewind buttons.',
        image: './assets/image_11.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/11-Custom-Video-Player/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/11-Custom-Video-Player',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/11-Custom-Video-Player/README.md'
    },
    {
        id: 12,
        title: 'Key Detection',
        desc: 'When a user enters the secret code, there will be a surprise!',
        image: './assets/image_12.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/12-Key-Sequence-Detection/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/12-Key-Sequence-Detection',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/12-Key-Sequence-Detection/README.md'
    },
    {
        id: 13,
        title: 'Slide in on Scroll',
        desc: 'The images will only appear when the user scrolls down/up the page. (Simple lazing loading!)',
        image: './assets/image_13.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/13-Slide-in-on-Scroll/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/13-Slide-in-on-Scroll',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/13-Slide-in-on-Scroll/README.md'
    },
    {
        id: 14,
        title: 'Reference VS Copy',
        desc: 'Learning different ways to copy an array or an object, as well as the difference between shallow copy and deep copy.',
        image: './assets/image_14.jpg',
        demo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/14-JavaScript-References-VS-Copying',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/14-JavaScript-References-VS-Copying',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/14-JavaScript-References-VS-Copying/README.md'
    },
    {
        id: 15,
        title: 'LocalStorage',
        desc: 'The user can add items to the list and check it when its done. When the user refreshes the page, the checked status wont disappear.',
        image: './assets/image_15.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/15-LocalStorage-and-Event-Delegation/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/15-LocalStorage-and-Event-Delegation',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/15-LocalStorage-and-Event-Delegation/README.md'
    },
    {
        id: 16,
        title: 'Mouse Move Shadow',
        desc: 'The text shadows move as the user moves his mouse.',
        image: './assets/image_16.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/16-Mouse-Move-Shadow/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/16-Mouse-Move-Shadow',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/16-Mouse-Move-Shadow/README.md'
    },
    {
        id: 17,
        title: 'Sort Without Articles',
        desc: 'Sort the bands names while neglecting articles like a, an or the',
        image: './assets/image_17.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/17-Sort-Without-Articles/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/17-Sort-Without-Articles',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/17-Sort-Without-Articles/README.md'
    },
    {
        id: 18,
        title: 'Adding with Reduce',
        desc: 'Count the total run time of a list of videos by using the reduce() method',
        image: './assets/image_18.jpg',
        demo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/18-Adding-Up-Times-with-Reduce',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/18-Adding-Up-Times-with-Reduce',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/18-Adding-Up-Times-with-Reduce/README.md'
    },
    {
        id: 19,
        title: 'Unreal Webcam Fun',
        desc: 'Put super cool filters on your streaming video using webcam and canvas.',
        image: './assets/image_19.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/19-Webcam-Fun/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/19-Webcam-Fun',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/19-Webcam-Fun/README.md'
    },
    {
        id: 20,
        title: 'Speech Recognition',
        desc: 'No need for external libraries or tools for speech recognition! (However this native api is currently only supported in Chrome and it doesnt work offline)',
        image: './assets/image_20.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/20-Speech-Recognition/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/20-Speech-Recognition',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/20-Speech-Recognition/README.md'
    },
    {
        id: 21,
        title: 'Geolocation Compass',
        desc: 'Understand the basic usage of the Geolocation API',
        image: './assets/image_21.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/21-Geolocation/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/21-Geolocation',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/21-Geolocation/README.md'
    },
    {
        id: 22,
        title: 'Follow Along Links',
        desc: 'When the user hovers over a link, the link will be highlighted by a div which changes its size and position accordingly.',
        image: './assets/image_22.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/22-Follow-Along-Link-Highlighter/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/22-Follow-Along-Link-Highlighter',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/22-Follow-Along-Link-Highlighter/README.md'
    },
    {
        id: 23,
        title: 'Speech Synthesis',
        desc: 'Let the computer read your text in different voices.',
        image: './assets/image_23.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/23-Speech-Synthesis/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/23-Speech-Synthesis',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/23-Speech-Synthesis/README.md'
    },
    {
        id: 24,
        title: 'Sticky Nav',
        desc: 'As the user scrolls down, the navbar will stick on the top of the page.',
        image: './assets/image_24.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/24-Sticky-Nav/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/24-Sticky-Nav',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/24-Sticky-Nav/README.md'
    },
    {
        id: 25,
        title: 'Event Propagation',
        desc: 'Understand basic ideas of JavaScript event propagation, capturing and bubbling.',
        image: './assets/image_25.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/25-Event-Propagation/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/25-Event-Propagation',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/25-Event-Propagation/README.md'
    },
    {
        id: 26,
        title: 'Follow Along Dropdown',
        desc: 'When the user hovers over the links on the navbar, dropdown menus will appear. And the dropdowns will seem to be resizing themselves as the pointer moves to another link.',
        image: './assets/image_26.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/26-Stripe-Follow-Along-Nav/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/26-Stripe-Follow-Along-Nav',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/26-Stripe-Follow-Along-Nav/README.md'
    },
    {
        id: 27,
        title: 'Click and Drag',
        desc: 'Create horizontal slide effect when the mouse is hold and dragged.',
        image: './assets/image_27.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/27-Click-and-Drag/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/27-Click-and-Drag',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/27-Click-and-Drag/README.md'
    },
    {
        id: 28,
        title: 'Speed Controller',
        desc: 'When a user presses a certain key, an audio will be played accordingly.',
        image: './assets/image_28.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/28-Video-Speed-Controller/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/28-Video-Speed-Controller',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/28-Video-Speed-Controller/README.md'
    },
    {
        id: 29,
        title: 'Countdown Timer',
        desc: 'A very simple countdown timer with various options. The user can customize the time too.',
        image: './assets/image_29.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/29-Countdown-Timer/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/29-Countdown-Timer',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/29-Countdown-Timer/README.md'
    },
    {
        id: 30,
        title: 'Whack a Mole',
        desc: 'A simple whack a mole game. Click the moles to get as many points as you can before the time runs out!',
        image: './assets/image_30.jpg',
        demo: 'https://kellychi22.github.io/JavaScript30/30-Whack-A-Mole/',
        repo: 'https://github.com/KellyCHI22/JavaScript30/tree/main/30-Whack-A-Mole',
        note: 'https://github.com/KellyCHI22/JavaScript30/blob/main/30-Whack-A-Mole/README.md'
    },
];

const challengeList = document.getElementById('challenges');

function generateChallenges() {
    challengeList.innerHTML = ``;
    challenges.forEach(challenge => {
        challengeList.innerHTML += `
            <div class="challenge">
                <div class="challenge__title">#<span class="challenge__id">${challenge.id}</span>${challenge.title.toUpperCase()}</div>
                <img class="challenge__img" src="${challenge.image}" alt="">
                <div class="challenge__links">
                    <a class="challenge__link demo__link" href="${challenge.demo}" target="_blank"><i class="fa-regular fa-eye"></i>demo</a>
                    <a class="challenge__link repo__link" href="${challenge.repo}" target="_blank"><i class="fa-brands fa-github"></i>repo</a>
                    <a class="challenge__link note__link" href="${challenge.note}" target="_blank"><i class="fa-solid fa-pencil"></i>note</a>
                </div>
            </div>
        `;
    });
}

generateChallenges();