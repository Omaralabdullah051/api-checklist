//handle spinner
const spinner = type => {
    document.getElementById('spinner').style.display = type;
}
//handle error
const error = text => {
    document.getElementById('error').innerText = text;
}
//handle text content 
const textContent = () => {
    document.getElementById('meal-container').textContent = '';
    document.getElementById('meal-details').textContent = ''
}




//load meal 
const loadMeal = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    if (isNaN(inputField.value !== true) || inputField.value === '') {
        error('Please input a meal name');
        spinner('none');
        textContent();
    }
    else {
        spinner('block');
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => displayMeal(data.meals))
    }
    inputField.value = '';
}
//display meal
const displayMeal = meals => {
    const container = document.getElementById('meal-container');
    textContent();
    spinner('none');
    error('Please input a meal name');
    meals?.forEach(meal => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col mb-3 ">
            <div onclick="loadMealDetails('${meal.idMeal}')" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    </div>
                </div>
        </div>
       `;
        container.appendChild(div);
        error('');
    })
}

//load meal details 
const loadMealDetails = mealId => {
    textContent();
    spinner('block');
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

//display meal details 
const displayMealDetails = meal => {
    const container = document.getElementById('meal-details');
    textContent();
    error('');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-50 mx-auto">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">See video</a>
        </div>
    </div>    
    `;
    container.appendChild(div);
    spinner('none');

}
