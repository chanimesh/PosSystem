import { billItems } from '../constants/htmlElements';
import  calculateSubtotal from './calculateSubtotal';
import shoppingCart from "./shoppingCart";

function appendSubtotal(){
    let subTotal = calculateSubtotal(shoppingCart);

    if(!document.getElementById('sub-total')) {

        const subTotalSpan = document.createElement('span');
        subTotalSpan.setAttribute('class', 'sub-total');
        subTotalSpan.setAttribute('id', 'sub-total');

        const subTotalLabel = document.createElement('span');
        subTotalLabel.setAttribute('class', 'sub-total-label');
        const subTotalLabelText = document.createTextNode('Subtotal:');
        subTotalLabel.appendChild(subTotalLabelText);


        const subTotalText = document.createElement('span');
        subTotalText.setAttribute('class', 'sub-total-value');
        subTotalText.setAttribute('id', 'sub-total-value');
        const subTotalTextData = document.createTextNode(subTotal.toString());
        subTotalText.appendChild(subTotalTextData);

        subTotalSpan.appendChild(subTotalLabel);
        subTotalSpan.appendChild(subTotalText);

        billItems.appendChild(subTotalSpan);
    }
    else{
        document.getElementById('sub-total-value').innerHTML = subTotal.toString();
    }
}


export default appendSubtotal;
