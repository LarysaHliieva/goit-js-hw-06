const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIgredientsEl = document.querySelector("#ingredients");

const createLiIgredients = (item => {
  const liIgredientsEl = document.createElement("li");
  liIgredientsEl.textContent = item;
  liIgredientsEl.classList.add("item");
  return liIgredientsEl;
})

const listIgredients = ingredients.map(createLiIgredients);

listIgredientsEl.append(...listIgredients);



