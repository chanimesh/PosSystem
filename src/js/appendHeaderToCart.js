import { billItems } from '../constants/htmlElements';
import '../styles/cartDisplay.scss';

function appendHeaderToCart() {
    if (!document.getElementById('cart-items-list')) {
        const cartItemList = document.createElement('ul');
        cartItemList.setAttribute('class', 'cart-items-list');
        cartItemList.setAttribute('id', 'cart-items-list');


        const cartItemHeader = document.createElement('div');
        cartItemHeader.setAttribute('class','cart-item-header');
        cartItemHeader.setAttribute('id','cart-item-header');

        const cartItemNameHeader = document.createElement('span');
        cartItemNameHeader.setAttribute('class','cart-item-name-header');
        const cartItemNameTextHeader = document.createTextNode('Name');
        cartItemNameHeader.appendChild(cartItemNameTextHeader);

        const cartItemQuantityHeader = document.createElement('span');
        cartItemQuantityHeader.setAttribute('class','cart-item-quantity-header');
        const cartItemQuantityTextHeader = document.createTextNode('Quantity ');
        cartItemQuantityHeader.appendChild(cartItemQuantityTextHeader);

        const cartItemCostHeader = document.createElement('span');
        cartItemCostHeader.setAttribute('class','cart-item-cost-header');
        const cartItemCostTextHeader = document.createTextNode('Price');
        cartItemCostHeader.appendChild(cartItemCostTextHeader);

        const cartItemTotalHeader = document.createElement('span');
        cartItemTotalHeader.setAttribute('class','cart-item-total-header');
        const cartItemTotalTextHeader = document.createTextNode('Total');
        cartItemTotalHeader.appendChild(cartItemTotalTextHeader);

        cartItemHeader.appendChild(cartItemNameHeader);
        cartItemHeader.appendChild(cartItemQuantityHeader);
        cartItemHeader.appendChild(cartItemCostHeader);
        cartItemHeader.appendChild(cartItemTotalHeader);

        billItems.appendChild(cartItemHeader);
        billItems.appendChild(cartItemList);
    }
}

export default appendHeaderToCart;
