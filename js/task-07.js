const refs = {
    input: document.querySelector('input#font-size-control'),
    span: document.querySelector('span#text')
}

function setFontSize() {
    refs.span.style.fontSize = refs.input.value + 'px';
}



refs.input.addEventListener('input', setFontSize);