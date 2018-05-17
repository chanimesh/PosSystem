import shoppingCart from './shoppingCart';
import populateCart from "./populateCart";
import appendSubtotal from "./appendSubtotal";
import appendDiscount from "./appendDiscount";
import appendTotal from "./appendTotal";

function removeItemFromCart(e) {

       const  itemIdToAdd = e.target.id.split('-')[1];

    if(!shoppingCart[itemIdToAdd]){
        shoppingCart[itemIdToAdd] = {quantity:0};
    }
    if (shoppingCart[itemIdToAdd].quantity!=0)
      shoppingCart[itemIdToAdd].quantity -= 1;

    populateCart();
    appendSubtotal()
    appendDiscount();
    appendTotal();

}

export default removeItemFromCart;
