const refs = {
    input: document.querySelector('input#font-size-control'),
    span: document.querySelector('span#text')
}

function setFontSize() {
    refs.input.min = 10;
    refs.input.max = 30;
    refs.input.step = 0.1;
    refs.span.style.fontSize = `${refs.input.value}` + 'px';
}



refs.input.addEventListener('input', setFontSize);