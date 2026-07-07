const resultsContainer = document.getElementById('results-container')
const modal = document.getElementById('modal')
const modalBody = document.getElementById('modal-body')


function showLoading() {

    resultsContainer.innerHTML = `
    
    <div class="loading">
    <div class="spinner"></div>
    <p>Loading recipes...</p>
    </div>
    
    `

}

function showError(message) {

    resultsContainer.innerHTML = `
    
    <div class="loading">
    <p>${message}</p>
    </div>
    
    `

}

function showNoResults() {

    showError('No Recipes Found')

}

function showRecipes(recipes) {

    resultsContainer.innerHTML = ''
    const grid = document.createElement('div')
    grid.className = 'results-grid'

    recipes.map(recipe => {
        const card = document.createElement('div')
        card.className = 'recipe-card'
        card.dataset.id = recipe.id
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" />
            <div class="recipe-card-body">
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <span> ${recipe.readyInMinutes} min</span>
                    <span> ${recipe.diets[0] || 'No diet info'}</span>
                </div>
            </div>
        `

        grid.appendChild(card)

    })

    resultsContainer.appendChild(grid)

}

function showRecipeDetail(recipe) {

    modalBody.innerHTML = `
    
    <img src="${recipe.image}" alt="${recipe.title}" />

    <h2>${recipe.title}</h2>

    <div class="recipe-meta">
        <span> ${recipe.readyInMinutes} min</span>
        <span>servings: ${recipe.servings}</span>
    </div>

    <h3>Ingredients:</h3>
    <ul>

    ${recipe.extendedIngredients.map(ing => `<li>${ing.original}</li>`).join('')}

    </ul>

    <h3>Instructions</h3>
    <p>${recipe.instructions}</p>

    `
    modal.classList.remove('hidden')

}

function closeModal() {
  modal.classList.add('hidden')
  modalBody.innerHTML = ''
}

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal()
})