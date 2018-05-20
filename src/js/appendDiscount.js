import calculateSubtotal from "./calculateSubtotal";
import shoppingCart from "./shoppingCart";
import discount from "../constants/discount";
import {getPercent, getRemaining} from "percentagecalcualtor";
import { billItems } from '../constants/htmlElements';


function appendDiscount(){
    const subtotal = calculateSubtotal(shoppingCart);
    const totalDiscount = getPercent(discount, subtotal);
    const total = getRemaining(discount, subtotal);

    const discountDiv = document.createElement('div');
    discountDiv.setAttribute('class','discount');

    const discountLabel = document.createElement('span');
    discountLabel.setAttribute('class','discount-label');
    const discountLabelText = document.createTextNode('Discount:');
    discountLabel.appendChild(discountLabelText);

    const discountText = document.createElement('span');
    discountText.setAttribute('class','discount-value');
    const discountTextValue = document.createTextNode(totalDiscount);
    discountText.appendChild(discountTextValue);

    discountDiv.appendChild(discountLabel);
    discountDiv.appendChild(discountText);

    billItems.appendChild(discountDiv);

}

export default appendDiscount;
