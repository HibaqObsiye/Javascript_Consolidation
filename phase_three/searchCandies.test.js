const searchCandies = require('./searchCandies')

describe('searchCandies', () => {
    it('returns mars and maltesers when given the maximum price 10', () => {
        expect(searchCandies('Ma', 10)).toEqual(["Mars", "Maltesers"])
    })

    it('returns mars, exluding maltesers when the price is 2', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars'])
    })

    it('returns skittles and starburst when the price is 10 and the prefix is S', () => {
        expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst' ])
    })

    it('returns skittles when the price is 4', () => {
        expect(searchCandies('S', 4)).toEqual('Skittles', 'Skittles')
    })
    
   

})