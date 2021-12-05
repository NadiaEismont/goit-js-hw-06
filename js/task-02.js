const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulTag = document.createElement('ul');
const list = ingredients.map((ingredient) => {
  const liElements = document.createElement('li');
  liElements.textContent = ingredient;
  return liElements;
}
);
ulTag.append(...list);
document.body.appendChild(ulTag);
console.log(ulTag);


