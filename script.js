const recipesData = {
    sniadanie: [
        { id: 1, title: 'Jajecznica', img: 'https://images.pexels.com/photos/4056884/pexels-photo-4056884.jpeg', description: 'Szybka jajecznica z pomidorami.', calories: 250 },
        { id: 2, title: 'Owsianka', img: 'https://images.pexels.com/photos/4056884/pexels-photo-4056884.jpeg', description: 'Zdrowa owsianka z owocami.', calories: 300 },
        { id: 3, title: 'Kanapki z awokado', img: 'https://images.pexels.com/photos/3683046/pexels-photo-3683046.jpeg', description: 'Pyszne kanapki z awokado i pomidorem.', calories: 350 },
        { id: 4, title: 'Smoothie bowl', img: 'https://images.pexels.com/photos/1640779/pexels-photo-1640779.jpeg', description: 'Kolorowa miska smoothie z owocami.', calories: 400 },
        { id: 5, title: 'Naleśniki', img: 'https://images.pexels.com/photos/4056880/pexels-photo-4056880.jpeg', description: 'Cienkie naleśniki z dżemem.', calories: 500 },
        { id: 6, title: 'Tosty francuskie', img: 'https://images.pexels.com/photos/5937943/pexels-photo-5937943.jpeg', description: 'Pyszne tosty francuskie z owocami.', calories: 450 },
        { id: 7, title: 'Płatki śniadaniowe', img: 'https://images.pexels.com/photos/4056885/pexels-photo-4056885.jpeg', description: 'Płatki z mlekiem i owocami.', calories: 250 },
        { id: 8, title: 'Jajka na twardo', img: 'https://images.pexels.com/photos/756004/pexels-photo-756004.jpeg', description: 'Jajka na twardo z majonezem.', calories: 200 },
        { id: 9, title: 'Granola', img: 'https://images.pexels.com/photos/4056886/pexels-photo-4056886.jpeg', description: 'Domowa granola z orzechami.', calories: 300 },
        { id: 10, title: 'Muffiny', img: 'https://images.pexels.com/photos/4056882/pexels-photo-4056882.jpeg', description: 'Muffiny z borówkami.', calories: 350 },
    ],
};

const renderRecipes = (category) => {
    const container = document.getElementById(`${category}-recipes`);
    const recipes = recipesData[category];

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'col-md-4 mb-4';
        recipeCard.innerHTML = `
            <div class="card">
                <img src="${recipe.img}" class="card-img-top recipe-image" alt="${recipe.title}">
                <div class="card-body">
                    <h5 class="card-title">${recipe.title}</h5>
                    <p class="card-text">${recipe.description}. Kalorie: ${recipe.calories}</p>
                </div>
            </div>
        `;
        container.appendChild(recipeCard);
    });
};

// Renderuj przepisy na śniadanie
renderRecipes('sniadanie');
