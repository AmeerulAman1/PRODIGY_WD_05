const weatherData = {
    "New York": {
        temperature: 22,
        conditions: "Partly Cloudy",
        humidity: 60,
        windSpeed: 5
    },
    "London": {
        temperature: 18,
        conditions: "Rainy",
        humidity: 75,
        windSpeed: 10
    },
    "Tokyo": {
        temperature: 26,
        conditions: "Sunny",
        humidity: 50,
        windSpeed: 3
    },
    "Sydney": {
        temperature: 20,
        conditions: "Windy",
        humidity: 65,
        windSpeed: 8
    }
};

const weatherResult = document.getElementById('weather-result');
const cityNameElement = document.getElementById('city-name');
const temperatureElement = document.getElementById('temperature');
const conditionsElement = document.getElementById('conditions');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');

document.getElementById('get-weather').addEventListener('click', () => {
    const location = document.getElementById('location-input').value.trim();

    if (location && weatherData[location]) {
        displayWeatherData(location);
    } else {
        alert('Weather data not available for this location.');
    }
});

function displayWeatherData(location) {
    const data = weatherData[location];

    cityNameElement.textContent = `Weather in ${location}`;
    temperatureElement.textContent = `Temperature: ${data.temperature}°C`;
    conditionsElement.textContent = `Conditions: ${data.conditions}`;
    humidityElement.textContent = `Humidity: ${data.humidity}%`;
    windSpeedElement.textContent = `Wind Speed: ${data.windSpeed} m/s`;

    weatherResult.style.display = 'block';
}
