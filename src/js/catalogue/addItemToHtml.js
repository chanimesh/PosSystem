import imagePaths from '../../constants/imagePaths';
import { shopItems } from '../../constants/htmlElements';

function addItemToHtml(data, id) {

    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('id','item-'+ id);
    itemDiv.setAttribute('class', 'shop-item-' + id + ' shop-item');

    const itemImgDiv = document.createElement('div');
    itemImgDiv.setAttribute('class', 'shop-item-image-div');

    const itemImg = document.createElement('img');
    itemImg.setAttribute('class', 'shop-item-image');
    itemImg.setAttribute('src', imagePaths + '/' + data.imagePath);
    itemImg.setAttribute('alt', data.name);
    itemImgDiv.appendChild(itemImg);

    const itemSpan = document.createElement('span');
    itemSpan.setAttribute('class', 'shop-item-name');
    const itemText = document.createTextNode(data.name);

    itemSpan.appendChild(itemText);
    itemDiv.appendChild(itemImgDiv);
    itemDiv.appendChild(itemSpan);
    shopItems.appendChild(itemDiv);
}

export default addItemToHtml;
