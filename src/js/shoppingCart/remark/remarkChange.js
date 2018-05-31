function remarkChange(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST','http://animesh.ch/');
    xhr.send(e.target.value);
}

export default remarkChange;
