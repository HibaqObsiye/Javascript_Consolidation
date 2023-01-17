const ShoppingBasket = require('../lib/shoppingBasket')
const Candy = require('../lib/candy')

describe('ShoppingBasket', () =>{
    it('returns the price of the candy', () =>{
        const candy = new Candy('Mars', 4.99)
        const basket = new ShoppingBasket()
        
        expect(basket.getTotalPrice()).toEqual(0)
    })
})