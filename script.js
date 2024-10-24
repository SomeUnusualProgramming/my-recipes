fetch('recipes.json')
    .then(response => response.json())
    .then(data => {
        const breakfastRecipesContainer = document.getElementById('breakfast-recipes');
        data.forEach(recipe => {
            if (recipe.category === "Śniadanie") {
                const card = document.createElement('div');
                card.className = 'col-md-4';
                card.innerHTML = `
                    <div class="card mb-4">
                        <img src="${recipe.image}" class="recipe-image" alt="${recipe.title}">
                        <div class="card-body">
                            <h5 class="card-title">${recipe.title}</h5>
                            <p class="card-text">Kalorie: ${recipe.calories} | Białko: ${recipe.protein}g</p>
                            <a href="recipe.html?id=${recipe.title}" class="btn btn-primary">Zobacz przepis</a>
                        </div>
                    </div>
                `;
                breakfastRecipesContainer.appendChild(card);
            }
        });
    })
    .catch(error => console.error('Błąd podczas ładowania przepisów:', error));
