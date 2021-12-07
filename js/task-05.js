const refs = {
    inputEl: document.querySelector("#name-input"),
    outputEl: document.querySelector('#name-output')
}


function onSubmit(e) {
    if (refs.inputEl.value !== '') {
        refs.outputEl.textContent = e.currentTarget.value;
    }
    else refs.outputEl.textContent = "Anonymous"
}
console.log(onSubmit)

refs.inputEl.addEventListener('input', onSubmit);