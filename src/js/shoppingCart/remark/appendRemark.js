import {billItems} from "../../../constants/htmlElements";
import remarkChange from './remarkChange';
import remark from "./remarkData";

function appendRemark() {
    if(!document.getElementById('remark')) {

        const remarkDiv = document.createElement('div');
        remarkDiv.setAttribute('class', 'remark');
        remarkDiv.setAttribute('id', 'remark');

        const remarkLabel = document.createElement('span');
        remarkLabel.setAttribute('class', 'remark-label');
        const remarkLabelText = document.createTextNode('Remark:');
        remarkLabel.appendChild(remarkLabelText);


        const remarkInput = document.createElement('input');
        remarkInput.setAttribute('class', 'remark-value');
        remarkInput.setAttribute('id', 'remark-value');
        remarkInput.setAttribute('value', remark);
        remarkInput.addEventListener('change', remarkChange);

        remarkDiv.appendChild(remarkLabel);
        remarkDiv.appendChild(remarkInput);

        billItems.appendChild(remarkDiv);
    }

}

export default appendRemark;
