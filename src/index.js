import itemsCatalogue from './itemsCatalogue';
import addItemToHtml from './js/addItemToHtml';
import './styles/catalogueDisplay.scss';
import './styles/main.scss';
import addEventsToCatalogue from './js/addEventsToCatalogue';
import appendElementsToCart from "./js/appendElementsToCart";



for(let item in itemsCatalogue){
    addItemToHtml(itemsCatalogue[item],item);
}


addEventsToCatalogue();

appendElementsToCart();
