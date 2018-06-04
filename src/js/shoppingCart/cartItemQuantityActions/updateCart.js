import shoppingCart from '../shoppingCart';
import appendElementsToCart from "../appendElementsToCart";
import itemsCatalogue from "../../../itemsCatalogue";

function updateCart(e) {

    const  itemId = e.target.dataset.value;
    if (itemsCatalogue[itemIdToAdd].availableStock >= parseFloat(e.target.value)) {
        shoppingCart[itemId].quantity = parseFloat(e.target.value);
    }
    else{
        console.log("sold-out");
    }


    appendElementsToCart();

}

export default updateCart;
