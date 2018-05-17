import calculateSubtotal from "./calculateSubtotal";
import shoppingCart from "./shoppingCart";
import discount from "../constants/discount";
import {getPercent, getRemaining} from "percentagecalcualtor";
import { billItems } from '../constants/htmlElements';


function appendTotal(){
    const subtotal = calculateSubtotal(shoppingCart);
    const total = getRemaining(discount, subtotal);

    const totalDiv = document.createElement('div');
    totalDiv.setAttribute('class','total');

    const totalLabel = document.createElement('span');
    totalLabel.setAttribute('class','total-label');
    const totalLabelText = document.createTextNode('Total:');
    totalLabel.appendChild(totalLabelText);

    const totalText = document.createElement('span');
    totalText.setAttribute('class','total-value');
    const totalLabelTextValue = document.createTextNode(total);
    totalText.appendChild(totalLabelTextValue);

    totalDiv.appendChild(totalLabel);
    totalDiv.appendChild(totalText);

    billItems.appendChild(totalDiv);

}

export default appendTotal;
