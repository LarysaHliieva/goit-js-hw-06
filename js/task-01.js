const listCategoriesEl = document.querySelector("#categories");

const ItemOfListCategoriesEl = listCategoriesEl.querySelectorAll("li.item")  
console.log(`Number of categories: ${ItemOfListCategoriesEl.length}`);

const getTitleAndQuantity = (item => {
    const titleEl = item.querySelector("h2");
    const title = titleEl.textContent;

    const liEl = item.querySelectorAll("li");
    const quantity = liEl.length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${quantity}`);
})


ItemOfListCategoriesEl.forEach(getTitleAndQuantity);
