function createElement(elementType, attributes, elementValue, eventListeners) {
    const element = document.createElement(elementType);
    Object.entries(attributes).forEach(function (attribute) {
        element.setAttribute(attribute[0], attribute[1]);
    });
    if (typeof elementValue !== 'undefined') {
        const elementText = document.createTextNode(elementValue.toString());
        element.appendChild(elementText);
    }
    if (typeof eventListeners !== 'undefined') {
        Object.entries(eventListeners).forEach(function (eventListener) {
            element.addEventListener(eventListener[0], eventListener[1]);
        });
    }
    return element;
}

export {
    createElement,
};
