const refs = {
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  input: document.querySelector('input'),
  container: document.querySelector('#boxes')
}
let elementSize = 20;

refs.buttonCreate.addEventListener('click', onCreateElement);
refs.buttonDestroy.addEventListener('click', destroyBoxes);

function onCreateElement(evt) {
  const currentValue = Number(refs.input.value);
  const fragment = document.createDocumentFragment();
  console.log(currentValue);
  refs.container.innerHTML = '';
  elementSize = 20;
  for (let i = 0; i < currentValue; i += 1) {
    const div = createBoxes();
    fragment.append(div);
    refs.container.append(fragment);
    refs.input.value = '';
  };
}

function createBoxes() {
  const box = document.createElement('div');
  elementSize += 10
  box.style.width = elementSize + 'px';
  box.style.height = elementSize + 'px';
  box.style.background = getRandomHexColor();
  return box;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function destroyBoxes() {
  refs.container.innerHTML = '';
  elementSize = 20;
}


