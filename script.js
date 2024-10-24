function loadRecipes(category) {
    fetch('recipes.json')
        .then(response => response.json())
        .then(data => {
            const recipesContainer = document.getElementById('recipes');
            recipesContainer.innerHTML = ''; // Czyści poprzednie przepisy

            const recipes = data.przepisy.filter(recipe => recipe.kategoria === category);
            recipes.forEach(recipe => {
                const recipeCard = `
                    <div class="recipe-card">
                        <h2>${recipe.nazwa}</h2>
                        <img src="${recipe.zdjecie}" alt="${recipe.nazwa}">
                        <h5>Składniki:</h5>
                        <ul>
                            ${recipe.skladniki.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                        <p>Kaloryczność: ${recipe.kalorie} kcal</p>
                        <p>Zawartość białka: ${recipe.białko} g</p>
                    </div>
                `;
                recipesContainer.innerHTML += recipeCard; // Dodaje przepis do kontenera
            });
        })
        .catch(error => console.error('Błąd:', error));
}
