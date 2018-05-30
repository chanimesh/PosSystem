import shoppingCart from "../shoppingCart";
import appendElementsToCart from "../appendElementsToCart";

function deleteItem(e) {
    const  itemId = e.target.dataset.id;

    delete(shoppingCart[itemId]);

    appendElementsToCart();

}

export default deleteItem;
