async function searchRecipes(query, diet = '') {

    try {

        const dietParam = diet ? `&diet=${diet}` : ''
        const url = `${CONFIG.BASE_URL}/recipes/complexSearch?query=${query}${dietParam}&number=12&addRecipeInformation=true&apiKey=${CONFIG.API_KEY}`

        const response = await fetch(url)

        const data = await response.json()

        console.log(data.results)

        return data.results
    } catch (error) {
        console.error('Error fetching recipes:', error)
        throw error
    }

}

async function getRecipeById(id) {

    try {

        const url = `${CONFIG.BASE_URL}/recipes/${id}/information?&apiKey=${CONFIG.API_KEY}`
        
        const response = await fetch(url)

        const data = await response.json()

        console.log(data)

        return data

    } catch (error){

        console.error('Error fetching recipes detail:', error)
        throw error

    }
    
}

