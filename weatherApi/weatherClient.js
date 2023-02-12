const apiKey = require('../weatherApi/api.js') 

class WeatherClient{

    fetchWeatherData(name){
        const city = name

        fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
        .then((response)=> response.json())
        .then((data)=> console.log(data))
    }

}

module.exports = WeatherClient;