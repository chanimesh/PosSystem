import { billItems } from '../../constants/htmlElements';
import appendCartItems from "./appendCartItems";
import shoppingCart from "./shoppingCart";
import appendHeaderToCart from "./appendHeaderToCart";

function populateCart() {

    while (billItems.hasChildNodes()) {
        billItems.removeChild(billItems.lastChild);
    }

    appendHeaderToCart();

    for (let data in shoppingCart){
      appendCartItems(data,shoppingCart[data].quantity);
    }

}
export default populateCart;
