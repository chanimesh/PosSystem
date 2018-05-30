import itemsCatalogue from './itemsCatalogue';
import addItemToHtml from './js/catalogue/addItemToHtml';
import './js/catalogue/catalogueDisplay.scss';
import './styles/main.scss';
import addEventsToCatalogue from './js/catalogue/addEventsToCatalogue';
import appendElementsToCart from "./js/shoppingCart/appendElementsToCart";



for(let item in itemsCatalogue){
    addItemToHtml(itemsCatalogue[item],item);
}


addEventsToCatalogue();

appendElementsToCart();
