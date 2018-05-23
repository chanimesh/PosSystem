import appendTotal from "./appendTotal";
import appendSubtotal from "./appendSubtotal";
import appendTotalDiscount from "./appendTotalDiscount";
import populateCart from "./populateCart";
import appendRemark from "./appendRemark";

function appendElementsToCart() {
    populateCart();
    appendRemark()
    appendSubtotal();
    appendTotalDiscount();
    appendTotal();
}

export default appendElementsToCart;
