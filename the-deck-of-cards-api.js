//handler spinner
const spinner = type => {
    document.getElementById('spinner').style.display = type;
}
//handle error
const error = text => {
    document.getElementById('error').innerText = text;
}
//handle text content
const textContent = () => {
    document.getElementById('cards-container').textContent = '';
    document.getElementById('card-detail').textContent = '';
}

//load cards
const loadCards = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    if (inputField.value === '' || isNaN(inputField.value)) {
        error('Please enter a number');
        spinner('none');
        textContent();
    }
    else if (inputField.value < 0) {
        error('Please enter a valid number');
        spinner('none');
        textContent();
    }
    else if (inputField.value > 51) {
        error('The maximum card is 51');
        spinner('none');
        textContent();
    }
    else {
        spinner('block');
        error('');
        fetch(`https://www.deckofcardsapi.com/api/deck/new/draw/?count=${searchText}`)
            .then(res => res.json())
            .then(data => displayCards(data.cards))
    }
    inputField.value = '';
};

//display cards
const displayCards = cards => {
    const container = document.getElementById('cards-container');
    textContent();
    cards?.forEach(card => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
            <div onclick="loadCardDetails('${card.code}')" class="card h-100 mb-3">
                <img src="${card.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${card.suit}</h5>
                    <p class="card-text">${card.value}</p>
                </div>
            </div>
        </div>
        `;
        container.appendChild(div);
        spinner('none');
    })
}

// load card details 
const loadCardDetails = cardCode => {
    spinner('block');
    error('');
    fetch('https://www.deckofcardsapi.com/api/deck/new/draw/?count=52')
        .then(res => res.json())
        .then(data => displayCardDetails(data.cards, cardCode))
}

//display card details
const displayCardDetails = (cards, cardCode) => {
    const singleCard = cards.find(card => card.code === cardCode);
    const container = document.getElementById('card-detail');
    textContent();
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-50 mx-auto">
    <img src="${singleCard.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${singleCard.suit}</h5>
                <p class="card-text">${singleCard.value}</p>
    </div>            
    `;
    container.appendChild(div);
    spinner('none');
}