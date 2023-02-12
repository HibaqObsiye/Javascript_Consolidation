const apiKey = require('../weatherApi/api.js') 

class WeatherClient{

    fetchWeatherData(name){
        const city = name

        fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
        .then((response)=> response.json())
        .then((data)=> console.log(data))
    }

    compareWith(city1, city2){
        fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
        .then((response)=> response.json())
        .then((data)=> console.log(data.main.temp))

    }

}

module.exports = WeatherClient;