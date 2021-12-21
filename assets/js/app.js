let weather = {
    apiKey: "98b066c69f224b4a0cb8d665162106c4",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));

    },
    displayWeather: function (data) {
        const { name } = data;
        const { country } = data.sys;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name + ", " + country;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".speed").innerText = "Speed wind: " + speed + " Km/h"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".weather__input").value)
    }

}
function updateClock() {
    var now = new Date()
    var h = now.getHours(),
        m = now.getMinutes(),
        s = now.getSeconds()
    document.querySelector(".time").innerText = h + ":" + m + ":" + s
}
function initClock() {
    updateClock()
    window.setInterval("updateClock()", 1)
}
initClock()

document.querySelector(".search__button").addEventListener('click', function () {
    weather.search();
})

document.querySelector(".weather__input").addEventListener('keyup', function (event) {
    if (event.key == "Enter") {
        weather.search()
    }
})

weather.fetchWeather("tokyo");





