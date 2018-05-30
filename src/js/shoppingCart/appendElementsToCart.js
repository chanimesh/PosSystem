import appendTotal from "./total/appendTotal";
import appendSubtotal from "./subTotal/appendSubtotal";
import appendTotalDiscount from "./discount/appendTotalDiscount";
import populateCart from "./populateCart";
import appendRemark from "./remark/appendRemark";

function appendElementsToCart() {
    populateCart();
    appendRemark();
    appendSubtotal();
    appendTotalDiscount();
    appendTotal();
}

export default appendElementsToCart;
