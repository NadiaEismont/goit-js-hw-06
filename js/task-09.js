const refs = {
  button: document.querySelector('button'),
  span: document.querySelector('.color')
}

function onChangeColorBtnClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.span.textContent = color;
  console.log(refs.span);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


refs.button.addEventListener('click', onChangeColorBtnClick);