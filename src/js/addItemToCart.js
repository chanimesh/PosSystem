import shoppingCart from './shoppingCart';
import populateCart from "./populateCart";

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
}

export default addItemToCart;