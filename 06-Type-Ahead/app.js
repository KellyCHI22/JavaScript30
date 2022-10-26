const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const search = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

let cities = [];
axios
    .get(endpoint)
    .then(function (response) {
        cities = response.data;
    })
    .catch(function (error) {
        console.log(error);
    });

let timer;
search.addEventListener('keyup', function (e) {
    clearTimeout(timer);
    timer = setTimeout(() => {
        e.preventDefault();
        let inputValue = search.value.toLowerCase();
        if (inputValue.length > 0) {
            suggestions.innerHTML = ``;
            getCity(cities, inputValue);
        }
    }, 1000);
});

function getCity(cities, input) {
    cities.forEach(city => {
        let { cityName, stateName, population } = formatData(city);
        if (cityName.includes(`${input}`) || stateName.includes(`${input}`)) {
            cityName = cityName.replace(input, `<span class="yellow">${input}</span>`);
            stateName = stateName.replace(input, `<span class="yellow">${input}</span>`);
            addCity(cityName, stateName, population);
            suggestions.innerHTML += html;
        }
    });
}

function formatData(city) {
    let cityName = city.city.toLowerCase();
    let stateName = city.state.toLowerCase();
    let population = parseInt(city.population).toLocaleString('en-US');
    return { cityName, stateName, population };
}

function addCity(cityName, stateName, population) {
    return html = `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${population}</span>
        </li>
    `;
}