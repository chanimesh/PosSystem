import itemsCatalogue from './itemsCatalogue';
import addItemToHtml from './js/addItemToHtml';
import './styles/catalogueDisplay.scss';
import populateCart from './js/populateCart';
import './styles/main.scss';
import addEventsToCatalogue from './js/addEventsToCatalogue';
import appendSubtotal from "./js/appendSubtotal";
import appendDiscount from "./js/appendDiscount";



for(let item in itemsCatalogue){
    addItemToHtml(itemsCatalogue[item],item);
}

populateCart();

addEventsToCatalogue();

appendSubtotal();

appendDiscount();
