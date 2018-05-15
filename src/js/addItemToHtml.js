import imagePaths from '../constants/imagePaths';
import shopItems from '../constants/htmlElements';

function addItemToHtml(data, id) {

    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('id','item-'+ id);
    itemDiv.setAttribute('class', 'shop-item-' + id + ' shop-item');

    const itemImg = document.createElement('img');
    itemImg.setAttribute('class', 'shop-item-image');
    itemImg.setAttribute('src', imagePaths + '/' + data.imagePath);
    itemImg.setAttribute('alt', data.name);

    const itemSpan = document.createElement('span');
    itemSpan.setAttribute('class', 'shop-item-name');
    const itemText = document.createTextNode(data.name);

    itemSpan.appendChild(itemText);
    itemDiv.appendChild(itemImg);
    itemDiv.appendChild(itemSpan);
    shopItems.appendChild(itemDiv);
}

export default addItemToHtml;
