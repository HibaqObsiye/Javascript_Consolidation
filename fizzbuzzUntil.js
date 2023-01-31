const fizzBuzz = require('./fizzBuzz')

const fizzbuzzUntil = (number) => {
    for(i = 0; i <= number; i++){
        console.log(fizzBuzz(i));
    }
}
module.exports = fizzbuzzUntil;