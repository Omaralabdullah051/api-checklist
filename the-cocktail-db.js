//handle spinner
const spinner = type => {
    document.getElementById('spinner').style.display = type;
};
//handle error
const error = type => {
    document.getElementById('error').innerText = type;
};
//handle text content
const textContent = () => {
    document.getElementById('cocktail-container').textContent = '';
    document.getElementById('cocktail-details').textContent = '';
};

//load Cocktail DB
const loadCocktail = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    spinner('block');
    if (inputField.value === '' || isNaN(inputField.value) !== true) {
        error('Please input a name of cocktail');
        spinner('none');
        textContent();
    }
    else {
        document.getElementById('error').innerText = '';
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => displayCocktail(data.drinks))
    }
    inputField.value = '';
};

//display cocktail Db
const displayCocktail = drinks => {
    const container = document.getElementById('cocktail-container');
    textContent();
    error('Please input a name of cocktail');
    spinner('none');
    drinks?.forEach(drink => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col fw-bolder">
            <div onclick="loadCocktailDetails('${drink.idDrink}')" class="card h-100">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${drink.strDrink}</h4>
                    <p class="card-text">${drink.strInstructions.slice(0, 20)}</p>
                </div>
            </div>
        </div>
        `;
        container.appendChild(div);
        error('');
        spinner('none');
    })
};

//load cocktail details
const loadCocktailDetails = cocktailId => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
        .then(res => res.json())
        .then(data => displayCocktailDetails(data.drinks[0]))
    spinner('block');
};

//display cocktail details
const displayCocktailDetails = drink => {
    const container = document.getElementById('cocktail-details');
    textContent();
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mb-3 w-50 mx-auto fw-bolder">
        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-title">${drink.strDrink}</h3>
            <p class="card-text">${drink.strInstructionsDE ? drink.strInstructionsDE : ''}.</p>
            <p class="card-text">${drink.strInstructions ? drink.strInstructions : ''}</p>
            <p class="card-text">${drink.strInstructionsIT ? drink.strInstructionsIT : ''}</p>
        </div>
    </div>
    `;
    container.appendChild(div);
    spinner('none');
};
