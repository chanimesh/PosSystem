import {getPercent, getRemaining} from "percentagecalcualtor";
import itemsCatalogue from '../itemsCatalogue';
import addItemToCart from "./addItemToCart";
import removeItemFromCart from "./removeItemFromCart";
import roundDecimal from "./utilities/roundDecimal";
import updateCart from "./updateCart";
import deleteItem from "./deleteItem";

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
    const cartItemIndex = document.createElement('span');
    cartItemIndex.setAttribute('class','cart-item-index');
    const cartItemIndexText = document.createTextNode(currentIndexValue.toString());
    cartItemIndex.appendChild(cartItemIndexText);

    const cartItemName = document.createElement('span');
    cartItemName.setAttribute('class','cart-item-name');
    const cartItemNameText = document.createTextNode(itemsCatalogue[itemId].name);
    cartItemName.appendChild(cartItemNameText);

    const cartItemQuantityDiv = document.createElement('div');
    cartItemQuantityDiv.setAttribute('class','cart-item-quantity');

    const cartItemQuantityPlus = document.createElement('button');
    cartItemQuantityPlus.setAttribute('id','plusitem-'+itemId);
    cartItemQuantityPlus.setAttribute('class','plus');
    const cartItemQuantityPlusText = document.createTextNode('+');
    cartItemQuantityPlus.appendChild(cartItemQuantityPlusText);
    cartItemQuantityPlus.addEventListener('click', addItemToCart);

    const cartItemQuantity = document.createElement('input');
    cartItemQuantity.setAttribute('class','cart-item-quantity');
    cartItemQuantity.setAttribute('data-value', itemId);
    cartItemQuantity.setAttribute('type','number');
    cartItemQuantity.setAttribute('step','1');
    cartItemQuantity.setAttribute('min','0');
    cartItemQuantity.setAttribute('value', quantity);
    cartItemQuantity.addEventListener('change', updateCart)

    const cartItemQuantityMinus = document.createElement('button');
    const cartItemQuantityMinusText = document.createTextNode('-');
    cartItemQuantityMinus.setAttribute('id','minusitem-'+itemId);
    cartItemQuantityMinus.setAttribute('class','minus');
    cartItemQuantityMinus.appendChild(cartItemQuantityMinusText);
    cartItemQuantityMinus.addEventListener('click', removeItemFromCart);

    cartItemQuantityDiv.appendChild(cartItemQuantityMinus);
    cartItemQuantityDiv.appendChild(cartItemQuantity);
    cartItemQuantityDiv.appendChild(cartItemQuantityPlus);

    const cartItemCost = document.createElement('span');
    cartItemCost.setAttribute('class','cart-item-cost');
    const cartItemCostText = document.createTextNode(Number(itemsCatalogue[itemId].price).toFixed(2));
    cartItemCost.appendChild(cartItemCostText);

    const cartItemDiscount = document.createElement('span');
    cartItemDiscount.setAttribute('class','cart-item-discount');
    const cartItemDiscountText = document.createTextNode(cartItemDiscountValue);
    cartItemDiscount.appendChild(cartItemDiscountText);


    const cartItemTotal = document.createElement('span');
    cartItemTotal.setAttribute('class','cart-item-total');
    const cartItemTotalText = document.createTextNode(cartItemCostValue.toString());
    cartItemTotal.appendChild(cartItemTotalText);

    const cartItemDelete = document.createElement('span');
    cartItemDelete.setAttribute('data-id',itemId);
    cartItemDelete.setAttribute('class', 'delete-item');
    cartItemDelete.addEventListener('click', deleteItem)

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
