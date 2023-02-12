const express = require('express');
const Thermostat = require('./thermostat')
const app = express();
const port = 3000;

let thermostat = new Thermostat()
app.get('/temperature',(req, res) =>{
   
    res.send(JSON.stringify({ temperature: thermostat.getTemperature()})) //json.stringify is a key-value pair
})

app.post('/up', (req, res) =>{
 
    res.send(JSON.stringify({temperature:  thermostat.up()})) 
})

app.post('/down', (req, res) =>{
    res.send(JSON.stringify({temperature: thermostat.down()}))
})

app.delete('/temperature', (req, res)=>{
    res.send(JSON.stringify({temperature: thermostat.resetTempeature()}))
})

console.log(`Server listening on local host ${port} `)
app.listen(port)

