import shoppingCart from './shoppingCart';
import populateCart from "./populateCart";
import appendSubtotal from "./appendSubtotal";
import appendDiscount from "./appendDiscount";
import appendTotal from "./appendTotal";

function addItemToCart(e) {
    let itemIdToAdd;
    if(e.target.classList.contains('shop-item-image') ||  e.target.classList.contains('shop-item-name') ){
        itemIdToAdd = e.target.parentElement.id.split('-')[1];

    }
    else{
        itemIdToAdd = e.target.id.split('-')[1];

    }

    if(!shoppingCart[itemIdToAdd]){
        shoppingCart[itemIdToAdd] = {quantity:0};
    }
    shoppingCart[itemIdToAdd].quantity += 1;

    populateCart();
    appendSubtotal();
    appendDiscount();
    appendTotal();

}

export default addItemToCart;
