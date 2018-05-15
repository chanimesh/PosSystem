import itemsCatalogue from './itemsCatalogue';
import addItemToHtml from './js/addItemToHtml';
import './styles/catalogueDisplay.scss';



for(let item in itemsCatalogue){
    addItemToHtml(itemsCatalogue[item],item);
}
