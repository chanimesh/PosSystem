import { catalogueItems } from '../../constants/htmlElements';
import addItemToCart from '../shoppingCart/cartItemQuantityActions/addItemToCart';

function addEventsToCatalogue() {
    for (let data of catalogueItems) {
        data.addEventListener("click", (e) => {
            addItemToCart(e)
        });
    }

}

export default addEventsToCatalogue;
