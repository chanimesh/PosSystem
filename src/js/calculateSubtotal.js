import itemsCatalogue from '../itemsCatalogue';

function calculateSubtotal(shoppingCart) {
    let subTotal = 0;
    for (let data in shoppingCart) {

        if (!itemsCatalogue.hasOwnProperty(data)) {
            throw ('Cart Item not found in catalogue');
        }
        else if(!shoppingCart[data].hasOwnProperty('quantity')) {
            throw ('Cart Item does not have quantity');
        }
        else if(typeof(shoppingCart[data].quantity) !== 'number' ){
            throw ('Cart Items quantity is not valid');
        }

        subTotal += itemsCatalogue[data].price * shoppingCart[data].quantity;

    }
    return subTotal;
}

export default calculateSubtotal;
