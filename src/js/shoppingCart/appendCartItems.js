import {getPercent, getRemaining} from "percentagecalcualtor";
import itemsCatalogue from '../../itemsCatalogue';
import addItemToCart from "./cartItemQuantityActions/addItemToCart";
import removeItemFromCart from "./cartItemQuantityActions/removeItemFromCart";
import roundDecimal from "../utilities/roundDecimal";
import updateCart from "./cartItemQuantityActions/updateCart";
import deleteItem from "./cartItemQuantityActions/deleteItem";
import {createElement} from "../utilities/htmlGeneration";

function appendCartItems(itemId, quantity) {

    const cartItemDiscountValue = Number(
        roundDecimal(
        getPercent(itemsCatalogue[itemId].price * quantity, itemsCatalogue[itemId].discount)))
        .toFixed(2);
    const cartItemCostValue = Number(
        roundDecimal(
        getRemaining(itemsCatalogue[itemId].discount, itemsCatalogue[itemId].price * quantity)))
        .toFixed(2);

    const cartItem = document.createElement('li');
    cartItem.setAttribute('class','cart-item');
    cartItem.setAttribute('id','cart-item-'+itemId);

    let currentIndex = document.getElementsByClassName('cart-item-index');
    let currentIndexValue = 1;
    if(currentIndex.length){
        currentIndexValue = parseInt(currentIndex[currentIndex.length - 1].innerHTML) + 1;
    }

    const cartItemIndex = createElement('span', {class: 'cart-item-index'}, currentIndexValue);

    const cartItemName = createElement('span', {class: 'cart-item-name'}, itemsCatalogue[itemId].name);

    const cartItemQuantityDiv = createElement('div', {class: 'cart-item-quantity'});

    const cartItemQuantityPlus = createElement('button',
        {id: 'plusitem-'+itemId, class: 'plus'},
        '+',
        {click: addItemToCart} );

    const cartItemQuantity = createElement('input',
        {class: 'cart-item-quantity', ['data-value']: itemId, type:'number', step:'1', min: '0', value: quantity},
        undefined,
        {change: updateCart} );

    const cartItemQuantityMinus = createElement('button',
        {id: 'minusitem-'+itemId, class: 'minus'},
        '-',
        {click: removeItemFromCart} );

    cartItemQuantityDiv.appendChild(cartItemQuantityMinus);
    cartItemQuantityDiv.appendChild(cartItemQuantity);
    cartItemQuantityDiv.appendChild(cartItemQuantityPlus);

    const cartItemCost = createElement('span', {class: 'cart-item-cost'}, Number(itemsCatalogue[itemId].price).toFixed(2));

    const cartItemDiscount = createElement('span', {class: 'cart-item-discount'}, cartItemDiscountValue);

    const cartItemTotal = createElement('span', {class: 'cart-item-total'}, cartItemCostValue);

    const cartItemDelete = createElement('span',
        {class: 'delete-item', ['data-id']: itemId},
        undefined,
        {click: deleteItem});

    cartItem.appendChild(cartItemIndex);
    cartItem.appendChild(cartItemName);
    cartItem.appendChild(cartItemQuantityDiv);
    cartItem.appendChild(cartItemCost);
    cartItem.appendChild(cartItemDiscount);

    cartItem.appendChild(cartItemTotal);
    cartItem.appendChild(cartItemDelete);
    document.getElementById('cart-items-list').appendChild(cartItem);

}


export default appendCartItems;
