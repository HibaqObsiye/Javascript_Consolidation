const apiKey = require('../weatherApi/api.js') 

class WeatherClient{

    fetchWeatherData(name){
        const city = name

        fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
        .then((response)=> response.json())
        .then((data)=> console.log(data))
    }

    compareWith(city1, city2){
        let temp1, temp2;

        return fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city1}&appid=${apiKey}`)
          .then((response) => response.json())
          .then((data) => {
            temp1 = data.main.temp;
            return fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city2}&appid=${apiKey}`);
          })
          .then((response) => response.json())
          .then((data) => {
            temp2 = data.main.temp;
            if (temp1 > temp2) {
              return `${city1} is warmer with a temperature of ${temp1}`;
            } else {
              return `${city2} is warmer with a temperature of ${temp2}`;
            }
          }
        )
        .then((result) => console.log(result)) //why does it need this line
        ;
        
    }
}

module.exports = WeatherClient;