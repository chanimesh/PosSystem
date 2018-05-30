import calculateSubtotal from './calculateSubtotal'

describe('calculateSubtotal  ', () => {
    it('calculates total in the cart', function () {
        const shoppingCart = {
            '4': {
                quantity: 10,
            }
        };
        const result = calculateSubtotal(shoppingCart);
        expect(result).toEqual(340)
    });
    it(' throws "Cart Item not found in catalogue" ', function () {
        const shoppingCart = {
            '22': {
                quantity: 10,
            }
        };
        const result = () => {calculateSubtotal(shoppingCart)};
        expect(result).toThrow('Cart Item not found in catalogue');
    });
    it('error', function () {
        const shoppingCart = {
            4: {
                quantity: "dhdhd",
            }
        };
        const result = () => calculateSubtotal(shoppingCart);
        expect(result).toThrow('Cart Items quantity is not valid');
    });
    it('error2', function () {
        const shoppingCart = {
            4: {
                dsfs: 20,
            }
        };
        const result = () =>{ calculateSubtotal(shoppingCart) };
        expect(result).toThrow('Cart Item does not have quantity');
    });
});
