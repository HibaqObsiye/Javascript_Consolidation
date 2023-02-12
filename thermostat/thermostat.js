class Thermostat{
    constructor(){
        this.temperature = 20
        this.powerMode = true
    }

    getTemperature(){
       return this.temperature
    }

    up(){
        if(this.powerMode){
          this.temperature = Math.min(this.temperature + 1, 25)
        }
        else{
            this.temperature = Math.min(this.temperature + 1, 32)
        }
    }

    down(){
        return this.temperature -= 1
    }

    setPowerSavingMode(value){
       return this.powerMode = value
    }

}
module.exports = Thermostat