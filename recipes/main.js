import recipes from "./recipes.mjs";

function randomRecipe(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

function tagsTemplate(tags) {
    let html = '';
    tags.forEach(tag => {
        html += `<li>${tag}</li>`;
    });
    return html;
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            html += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else {
            html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    html += '</span>';
    return html;
}

function recipeTemplate(recipe) {
  return `
    <div class="recipe__img">
        <img src="${recipe.image}" alt="${recipe.name}">
    </div>
    <div class="recipe__details">
        <ul class="recipe__tags">
            ${tagsTemplate(recipe.tags)}
        </ul>
        <h2>${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
        <p class="recipe__description">${recipe.description}</p>
    </div>
  `;
}

function renderRecipe(recipeList) {
  const recipeContainer = document.querySelector(".recipe__container");
const html = recipeList.map(recipeTemplate).join('');
recipeContainer.innerHTML = html;
}

function init() {
  const recipe = randomRecipe(recipes);
  renderRecipe([recipe]);
}
init();


function searchHandler() {
    event.preventDefault();
    const searchInput = document.querySelector(".search__input");
    const searchValue = searchInput.value.toLowerCase();
    const searchResult = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(searchValue) || recipe.tags.find((item) => item.toLocaleLowerCase().includes(searchValue)) || recipe.recipeIngredient.find((item) => item.toLocaleLowerCase().includes(searchValue));
    });
    renderRecipe(searchResult);
    }

document.querySelector(".search__button").addEventListener("click", searchHandler);