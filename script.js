function addRecipe() {
    const name = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('recipe-ingredients').value;

    if (name.trim() === '' || ingredients.trim() === '') {
        alert('Please enter recipe name and ingredients.');
        return;
    }

    const recipeList = document.getElementById('recipe-list');
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Ingredients:</strong> ${ingredients}</p>
    `;
    recipeList.appendChild(recipeDiv);

    // Clear input fields after adding recipe
    document.getElementById('recipe-name').value = '';
    document.getElementById('recipe-ingredients').value = '';
}
