import shoppingCart from "./shoppingCart";
import discount from "../constants/discount";
import { billItems } from '../constants/htmlElements';
import calculateTotalDiscount from "./calculateTotalDiscount";
import itemsCatalogue from '../itemsCatalogue';


function appendTotalDiscount(){
    const totalDiscount = Number(
        calculateTotalDiscount(itemsCatalogue, shoppingCart))
        .toFixed(2);

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

export default appendTotalDiscount;
