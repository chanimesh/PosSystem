import shoppingCart from '../shoppingCart';
import appendElementsToCart from "../appendElementsToCart";

function addItemToCart(e) {
    let itemIdToAdd;
    if(e.target.classList.contains('shop-item-image-div') ||  e.target.classList.contains('shop-item-name') ){
        itemIdToAdd = e.target.parentElement.id.split('-')[1];

    }
    else if(e.target.classList.contains('shop-item-image')){
        itemIdToAdd = e.target.parentElement.parentElement.id.split('-')[1];
    }
    else{
        itemIdToAdd = e.target.id.split('-')[1];

    }

    if(!shoppingCart[itemIdToAdd]){
        shoppingCart[itemIdToAdd] = {quantity:0};
    }
    shoppingCart[itemIdToAdd].quantity += 1;

    appendElementsToCart();

}

export default addItemToCart;
