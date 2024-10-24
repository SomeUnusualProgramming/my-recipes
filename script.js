document.addEventListener("DOMContentLoaded", function() {
    // Funkcja do ładowania przepisów
    function loadRecipes(mealType) {
        fetch('recipes.json')
            .then(response => response.json())
            .then(data => {
                const recipeContainer = document.getElementById(mealType + '-recipes');
                recipeContainer.innerHTML = ''; // Czyścimy kontener przed dodaniem nowych przepisów

                // Sprawdź, czy dane dla danego typu posiłku istnieją
                if (data[mealType]) {
                    data[mealType].forEach(recipe => {
                        const recipeCard = document.createElement('div');
                        recipeCard.classList.add('col-lg-4', 'col-md-6', 'mb-4');

                        recipeCard.innerHTML = `
                            <div class="card">
                                <img src="${recipe.image}" class="recipe-image" alt="${recipe.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${recipe.name}</h5>
                                    <p class="card-text">${recipe.description}</p>
                                </div>
                            </div>
                        `;
                        recipeContainer.appendChild(recipeCard);
                    });
                } else {
                    recipeContainer.innerHTML = '<p>Brak przepisów dla tego typu posiłku.</p>'; // Komunikat, gdy brak przepisów
                }
            })
            .catch(error => console.error('Error fetching recipes:', error));
    }

    // Funkcja do pokazywania wybranej kategorii
    function showCategory(category) {
        // Ukryj wszystkie sekcje przepisów
        const sections = document.querySelectorAll('.category-section');
        sections.forEach(section => section.style.display = 'none');

        // Pokaż wybraną sekcję
        const selectedSection = document.getElementById(`${category}-section`);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }

    // Domyślnie pokaż sekcję śniadania i ładuj przepisy po załadowaniu strony
    showCategory('sniadanie');
    loadRecipes('breakfast'); // Zmodyfikowane na zgodność z JSON

    // Dodaj event listener do linków w nagłówku
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Zatrzymaj domyślne działanie linku
            const mealType = this.getAttribute('href').substring(1); // Pobierz nazwę typu posiłku z linku
            
            // Przypisanie poprawnych nazw typów posiłków
            const mealMap = {
                "sniadanie": "breakfast",
                "drugie-sniadanie": "secondBreakfast",
                "obiad": "lunch",
                "podwieczorek": "afternoonSnack",
                "kolacja": "dinner"
            };
            
            const mappedMealType = mealMap[mealType];
            showCategory(mealType); // Pokaż wybraną sekcję
            loadRecipes(mappedMealType); // Ładuj przepisy dla wybranego typu
            window.location.hash = mealType; // Ustaw hash w URL
        });
    });
});
