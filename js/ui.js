const resultsContainer = document.getElementById('results-container')

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