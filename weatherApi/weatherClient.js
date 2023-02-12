const apiKey = require('../weatherApi/api.js') 

class WeatherClient{

    fetchWeatherData(name){
        const city = name

        fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
        .then((response)=> response.json())
        .then((data)=> console.log(data))
    }

    compareWith(city1, city2){
        const temp = []
         
        const request1 = fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city1}&appid=${apiKey}`)
                        .then((response)=> response.json())
                        .then((data)=> temp.push(data.main.temp))
        const request2 =    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city2}&appid=${apiKey}`)
                          .then((response)=> response.json())
                          .then((data)=> temp.push(data.main.temp))
        
        if(temp[0] > temp[1]){
            return `${city1} is warmer with temp of ${temp[0]}`
        }
        else{
            return `${city2} is warmer with temp of ${temp[1]}`
        }

    }
}

module.exports = WeatherClient;