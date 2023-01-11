const fizzBuzz = require('../fizzBuzz')
describe('fizzBuzz', () => {
    it('returns fizzbuzz if divisible by 2 and 3', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz')
    })

    it('returns fizz if only divisible by 3', () =>{
        expect(fizzBuzz(6)).toBe('buzz')
    })

    it('returns buzz if only divisible by 5', () =>{
        expect(fizzBuzz(5)).toBe('fizz')
    })
})