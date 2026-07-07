const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const filterBtns = document.querySelectorAll('.filter-btn')
const closeModalBtn = document.getElementById('close-modal')

let currentDiet = ''

async function handleSearch() {
  const query = searchInput.value.trim()
  
    if (!query) return

    showLoading()

    try {
        const recipes = await searchRecipes(query, currentDiet)

        if (recipes.length === 0) {
            showNoResults()
            return
        }

        showRecipes(recipes)

    } catch(error) {
        showError('Whoops... Something went wrong, try again')
    }

}

searchBtn.addEventListener('click', handleSearch)

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') handleSearch()
})

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    currentDiet = btn.dataset.diet
    handleSearch()
  })
})

resultsContainer.addEventListener('click', async (event) => {
  const card = event.target.closest('.recipe-card')
  if (!card) return

  const recipeID = card.dataset.id

  showLoading()

  try {
    const recipe = await getRecipeById(recipeID)
    showRecipeDetail(recipe)
  
  } catch (error) {
    showError('Could not load recipe details')
  }

})

closeModalBtn.addEventListener('click', closeModal)

