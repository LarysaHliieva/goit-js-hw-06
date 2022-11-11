const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIgredientsEl = document.querySelector("#ingredients");

const makeIgredientCard = (item => {
  const liIgredientEl = document.createElement("li");
  liIgredientEl.textContent = item;
  liIgredientEl.classList.add("item");
  return liIgredientEl;
})

const elements = ingredients.map(makeIgredientCard);

listIgredientsEl.append(...elements);



