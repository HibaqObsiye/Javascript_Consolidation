const Candy = require('../lib/candy')

describe('Class', () =>{
    it("returns the price of the candy", () => {
        candy = new Candy('Mars', 4.99)
        expect(candy.getPrice()).toEqual(4.99)
    })

    it("returns the name of the candy", () => {
        candy = new Candy('Mars', 4.99)
        expect(candy.getName()).toEqual('Mars')
    })
})