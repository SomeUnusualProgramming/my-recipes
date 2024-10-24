document.addEventListener("DOMContentLoaded", () => {
    const recipesContainer = document.getElementById("recipes");
    const searchInput = document.getElementById("search");

    // Funkcja do wczytywania przepisów z pliku JSON
    async function loadRecipes() {
        const response = await fetch("data/recipes.json");
        const recipes = await response.json();
        displayRecipes(recipes);
    }

    // Funkcja do wyświetlania przepisów
    function displayRecipes(recipes) {
        recipesContainer.innerHTML = "";
        recipes.forEach(recipe => {
            const recipeElement = document.createElement("div");
            recipeElement.className = "recipe";
            recipeElement.innerHTML = `
                <h2>${recipe.name}</h2>
                <p>Składniki: ${recipe.ingredients.join(", ")}</p>
                <p>Kalorie: ${recipe.calories}</p>
                <p>Białko: ${recipe.protein}g</p>
            `;
            recipesContainer.appendChild(recipeElement);
        });
    }

    // Funkcja do filtrowania przepisów
    searchInput.addEventListener("input", (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchValue))
        );
        displayRecipes(filteredRecipes);
    });

    loadRecipes();
});
