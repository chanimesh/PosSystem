import itemsCatalogue from './itemsCatalogue';
import addItemToHtml from './js/addItemToHtml';



for(let item in itemsCatalogue){
    addItemToHtml(itemsCatalogue[item],item);
}
