const loadSingleUser = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaySingleUser(data.results[0]))
};
loadSingleUser();

const displaySingleUser = user => {
    console.log(user.name.first);
}

const loadMeals = searchText => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
};



//meal db
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle
}
const toggleSearchResult = displayStyle => {
    document.getElementById('meals').style.display = displayStyle
}
const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;

    //display spinner
    toggleSpinner('block');
    toggleSearchResult('none');
    loadMeals(searchText);
    document.getElementById('search-field').value = '';

}


const displayMeals = meals => {
    const container = document.getElementById('meals');
    container.textContent = '';
    meals?.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <p>${meal.strIngredient18 ? meal.strIngredient18 : ''}</p>
        <p>${meal.strIngredient17 ? meal.strIngredient17 : ''}</p>
        <h2>${meal.strArea}</h2>
        <img width="200px" src="${meal.strMealThumb}">
        <br>
        <button onclick="loadMealDetail('${meal.strMeal}')">Click me</button>
        `;
        container.appendChild(div);
    })
    toggleSpinner('none');
    toggleSearchResult('block');
}


const loadMealDetail = mealName => {
    console.log(mealName);
}