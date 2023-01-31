class ShoppingBasket{
    constructor(){
       this.prices = []
    }

    addItem(candy){
        this.prices.push(candy.getPrice())
        this.prices
    }


    getTotalPrice(){
        let sum = 0
        for(let i= 0;i < this.prices.length; i++){
            sum += this.prices[i]
        }
        return sum
    }

}

module.exports = ShoppingBasket