import calculateTotalDiscount from './calculateTotalDiscount';

describe('calculateTotalDiscount ', () =>{
    it('calculates the total discount', () => {
        const shoppingCart = {
            '4': {quantity:5},
        };
        const itemsCatalogue = {
            '4':{
                price: 20,
                discount: 10
            },
        };
        const result = calculateTotalDiscount(itemsCatalogue, shoppingCart);
        expect(result).toBe(10);
    });

    it('calculates the total discount', () => {
        const shoppingCart = {
            '4': {quantity:5},
            '8': {quantity:10},
        };
        const itemsCatalogue = {
            '4':{
                price: 100,
                discount: 5
            },
            '8':{
                price: 5,
                discount: 10
            },

        };
        const result = calculateTotalDiscount(itemsCatalogue, shoppingCart);
        expect(result).toBe(30);

    });

    it('calculates the total discount', () => {
        const shoppingCart = {
            '4': {quantity:5},
            '8': {quantity:3},
        };
        const itemsCatalogue = {
            '4':{
                price: 22,
                discount: 12
            },
            '8':{
                price: 30,
                discount: 12
            },

        };
        const result = calculateTotalDiscount(itemsCatalogue, shoppingCart);
        expect(result).toBe(24);

    });
});
