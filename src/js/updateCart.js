import shoppingCart from './shoppingCart';
import populateCart from "./populateCart";
import appendSubtotal from "./appendSubtotal";
import appendTotalDiscount from "./appendTotalDiscount";
import appendTotal from "./appendTotal";

function updateCart(e) {

    const  itemId = e.target.dataset.value;

    shoppingCart[itemId].quantity = parseFloat(e.target.value);

    populateCart();
    appendSubtotal()
    appendTotalDiscount();
    appendTotal();

}

export default updateCart;
