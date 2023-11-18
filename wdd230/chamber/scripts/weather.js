// verify website temps match weather api results "https://openweathermap.org/city/4699066"

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=29.77&lon=-95.37&appid=f4c205e2a1d611099e8b56e44ffb3ee2&units=imperial";

async function apiFetch() {
    const response = await fetch(url);
    const data = await response.json();

    displayResults(data);
}

function displayResults(data) {
    currentTemp.textContent = `${data.main.temp} °F`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    captionDesc.textContent = data.weather[0].description;
}

apiFetch();

async function getThreeDayForecast() {
    const url =
    // url different with 'weather' switched to 'forecast'
    "https://api.openweathermap.org/data/2.5/forecast?lat=29.77&lon=-95.37&appid=f4c205e2a1d611099e8b56e44ffb3ee2&units=imperial";
    const response = await fetch(url);
    const forecastData = await response.json();
    displayForecast(forecastData);
}

getThreeDayForecast();

function displayForecast(forecastData) {
    console.log(forecastData);
    const forecastDiv = document.querySelector("#three-day-forecast");

    forecastData.list.forEach((threeHour, i) => {
        if ([9, 18, 36].includes(i)) {
        const dayContainer = document.createElement("div");
        dayContainer.classList.add("day-container");

        const p = document.createElement("p");
        p.textContent = `${threeHour.main.temp} °F`;
        dayContainer.appendChild(p);

        forecastDiv.appendChild(dayContainer);
    }
  });
}