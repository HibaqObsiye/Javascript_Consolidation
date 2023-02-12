const express = require('express');
const Thermostat = require('./thermostat')
const app = express();
const port = 3000;

app.get('/temperature',(req, res) =>{
    const thermostat = new Thermostat()
    res.send(JSON.stringify({ temperature: thermostat.getTemperature()})) //json.stringify is a key-value pair
})

console.log(`Server listening on local host ${port} `)
app.listen(port)

