const refs = {
  button: document.querySelector('button'),
  span: document.querySelector('.color')
}

function onChangeColorBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.button.addEventListener('click', onChangeColorBtnClick);