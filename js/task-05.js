const refs = {
    inputEl: document.querySelector("#name-input"),
    outputEl: document.querySelector('#name-output')
}


function onSubmit() {
    if (refs.inputEl.value !== '') {
        refs.outputEl.textContent = refs.inputEl.value;
    }
    else refs.outputEl.textContent = "Anonymous"
}
console.log(onSubmit)

refs.inputEl.addEventListener('input', onSubmit);