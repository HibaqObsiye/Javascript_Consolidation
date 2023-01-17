const ShoppingBasket = require('../lib/shoppingBasket')
const Candy = require('../lib/candy')

describe('ShoppingBasket', () =>{
    it('returns the price of the candy', () =>{
        const basket = new ShoppingBasket()
        
        expect(basket.getTotalPrice()).toEqual(0)
    })

    it('adds candy items and returns total price', () => {
        const candy = new Candy('Mars', 4.99)
        const basket = new ShoppingBasket()
        basket.addItem(candy)
        
        expect(basket.getTotalPrice()).toEqual(4.99)
    })

})