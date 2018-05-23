import shoppingCart from './shoppingCart';
import appendElementsToCart from "./appendElementsToCart";

function updateCart(e) {

    const  itemId = e.target.dataset.value;

    shoppingCart[itemId].quantity = parseFloat(e.target.value);

    appendElementsToCart();

}

export default updateCart;
