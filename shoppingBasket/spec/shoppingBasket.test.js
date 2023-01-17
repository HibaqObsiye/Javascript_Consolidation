const ShoppingBasket = require('../lib/shoppingBasket')
const Candy = require('../lib/candy')

describe('ShoppingBasket', () =>{
    it('returns the price of the candy', () =>{
        const basket = new ShoppingBasket()
        
        expect(basket.getTotalPrice()).toEqual(0)
    })

    it('adds 1 candy item and returns total price', () => {
        const candy = new Candy('Mars', 4.99)
        const basket = new ShoppingBasket()
        basket.addItem(candy)
        
        expect(basket.getTotalPrice()).toEqual(4.99)
    })
    it('adds multiple candy items and returns a total price', ()=>{
        const candy = new Candy('Mars', 4.99)
        const candy2 = new Candy('Aero', 5)
        const basket = new ShoppingBasket()
        
        basket.addItem(candy)
        basket.addItem(candy2)

        expect(basket.getTotalPrice()).toEqual(9.99)
    })

})