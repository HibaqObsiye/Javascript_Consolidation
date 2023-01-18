const Thermostat = require('../lib/thermostat')

describe("Thermostat", () =>{
    it("starts with an intitial temperature of 20", () => {
        const thermostat = new Thermostat() 

        expect(thermostat.getTemperature()).toEqual(20)
    })


})