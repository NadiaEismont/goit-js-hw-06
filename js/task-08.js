const refs = {
    form: document.querySelector('.login-form')
};

let formData;
function sendForm(event) {
    event.preventDefault();
    const mailLink = event.currentTarget.elements.email.value;
    const passwordLink = event.currentTarget.elements.password.value;

    if (mailLink === '' || passwordLink === '') {
        return alert('Please, fill the gaps.');
    }
    formData = { email: mailLink, password: passwordLink };
    console.log(formData);
    event.currentTarget.reset()
}

refs.form.addEventListener('submit', sendForm);

