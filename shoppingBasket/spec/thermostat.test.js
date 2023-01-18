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

    it("powerSavingMode is on if selected ", () => {
        const thermostat = new Thermostat()
        thermostat.setPowerSavingMode(true)

        expect(thermostat.setPowerSavingMode(true)).toEqual(true)
    })

    it("returns falls if powerSavingMode is turned off", () => {
        const thermostat = new Thermostat()
        thermostat.setPowerSavingMode(false)

        expect(thermostat.setPowerSavingMode(false)).toEqual(false)
    })

    it("only allow temperature to increase by 5 if powermode is true", () => {
        const thermostat = new Thermostat()
        thermostat.setPowerSavingMode(true)
        for(i = 21; i <= 25; i++){
            thermostat.up();
            expect(thermostat.getTemperature()).toBe(i);
        }
        thermostat.up();
        expect(thermostat.getTemperature()).toEqual(25)
    })

    it("allows temperature to increase above 26 if powermode is off", () => {
        const thermostat = new Thermostat()
        thermostat.setPowerSavingMode(false)
        for(i = 21; i <= 25; i++){
            thermostat.up();
            expect(thermostat.getTemperature()).toBe(i);
        }
        thermostat.up();
        expect(thermostat.getTemperature()).toEqual(26)

    })

})