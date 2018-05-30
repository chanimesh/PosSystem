import {getPercent} from "percentagecalcualtor";

function calculateTotalDiscount(itemsCatalogue, shoppingCart) {

    let totalDiscount = Object.keys(shoppingCart).reduce(
        (accumulator, currentValue) => {
            accumulator +=
                getPercent(
                    itemsCatalogue[currentValue].discount,
                    itemsCatalogue[currentValue].price * shoppingCart[currentValue].quantity
                );
            return accumulator;
        }
    , 0);
    return totalDiscount;

}


export default calculateTotalDiscount;
