import itemsCatalogue from '../itemsCatalogue';
import addItemToCart from "./addItemToCart";
import removeItemFromCart from "./removeItemFromCart";

function appendCartItems(itemId, quantity) {

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
    const cartItemQuantityPlusText = document.createTextNode('+');
    cartItemQuantityPlus.appendChild(cartItemQuantityPlusText);
    cartItemQuantityPlus.addEventListener('click', addItemToCart);

    const cartItemQuantity = document.createElement('span');
    cartItemQuantity.setAttribute('class','cart-item-quantity');
    const cartItemQuantityText = document.createTextNode((quantity).toString());
    cartItemQuantity.appendChild(cartItemQuantityText);

    const cartItemQuantityMinus = document.createElement('button');
    const cartItemQuantityMinusText = document.createTextNode('-');
    cartItemQuantityMinus.setAttribute('id','plusitem-'+itemId);
    cartItemQuantityMinus.appendChild(cartItemQuantityMinusText);
    cartItemQuantityMinus.addEventListener('click', removeItemFromCart);

    cartItemQuantityDiv.appendChild(cartItemQuantityMinus);
    cartItemQuantityDiv.appendChild(cartItemQuantity);
    cartItemQuantityDiv.appendChild(cartItemQuantityPlus);

    const cartItemCost = document.createElement('span');
    cartItemCost.setAttribute('class','cart-item-cost');
    const cartItemCostText = document.createTextNode((itemsCatalogue[itemId].price).toString());
    cartItemCost.appendChild(cartItemCostText);


    const cartItemTotal = document.createElement('span');
    cartItemTotal.setAttribute('class','cart-item-total');
    const cartItemTotalText = document.createTextNode((itemsCatalogue[itemId].price * quantity).toString());
    cartItemTotal.appendChild(cartItemTotalText);

    cartItem.appendChild(cartItemIndex);
    cartItem.appendChild(cartItemName);
    cartItem.appendChild(cartItemQuantityDiv);
    cartItem.appendChild(cartItemCost);
    cartItem.appendChild(cartItemTotal);
    document.getElementById('cart-items-list').appendChild(cartItem);

}


export default appendCartItems;
