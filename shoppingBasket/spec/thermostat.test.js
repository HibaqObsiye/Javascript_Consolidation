const Thermostat = require('../lib/thermostat')

describe("Thermostat", () =>{
    it("starts with an intitial temperature of 20", () => {
        const thermostat = new Thermostat() 

        expect(thermostat.getTemperature()).toEqual(20)
    })

    it("can increase the temperature by 1", () => {
        const thermostat = new Thermostat()
        thermostat.up()

        expect(thermostat.getTemperature()).toEqual(21)
    })

    it("can decrease the temperature by 1", () => {
        const thermostat = new Thermostat()
        thermostat.down()

        expect(thermostat.getTemperature()).toEqual(19)
    })

    it("powerSavingMode is on by default ", () => {
        const thermostat = new Thermostat()
        thermostat.setPowerSavingMode(true)

        expect(thermostat.setPowerSavingMode).toEqual(true)
    })

})