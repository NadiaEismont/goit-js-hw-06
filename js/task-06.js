const refs = {
    input: document.querySelector('input')
}
refs.input.addEventListener('blur', onBlurEvent);

function onBlurEvent() {
    if (refs.input.value.length < 6) {
        console.log('Please enter 6 symbols');
        refs.input.classList.add("invalid");
        refs.input.classList.remove("valid");
    }
    else {
        refs.input.classList.add("valid");
        refs.input.classList.remove("invalid")
    }
}