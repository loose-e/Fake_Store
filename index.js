const brand = document.getElementById('brand');
const cart = document.getElementById('cart');
const electronics = document.getElementById('electronics');
const jewelry = document.getElementById('jewelry');
const men = document.getElementById('men');
const women = document.getElementById('women');
const display = document.getElementById('display');

const URL = 'https://fakestoreapi.com';
const catPath = '/products/category';

fakeStore = async(endpoint) => {
    if (endpoint !== '/') {
        let fetchStore = await fetch(URL + endpoint)
        .then(res => res.json())
        .then(json => displayCards(json));
    } else {
        let fetchStore = await fetch(URL + endpoint)
        .then(res => console.log(res))
    }
}


/* 
1. create element with document.createElement('*');
2. change the properties of the created element
3. place the element into the webpage
*/

displayCards = (apiData) => {
    console.log(apiData)

    let currentCards = [...apiData];
    console.log(currentCards);

    for (card in currentCards) {
        // let cardId = card.id;
        // let cardTitle = card.title;
        // let cardPrice = card.price;
        // let cardDescription = card.description;
        // let cardCategory = card.category;
        // let cardImage = card.image;

        /* 
        * Structure
        card
            image
            title
            accordionItem
                accordionHeader
                    accordionButton
                desc
            accordionItem
                accordionHeader
                    accordionButton
                price
                
         */
        console.log(card);

        let cardElement = document.createElement('div');
        cardElement.className = 'accordion';

        let image = document.createElement('img');
        image.src = card.image;

        let title = document.createElement('h2');
        title.innerText = card.title;

        let accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';

        let accordionHeader = document.createElement('h4');
        accordionHeader.className = 'accordion-header';

        let accordionButton = document.createElement('button');
        accordionButton.className = 'accordion-button';
        accordionButton.type = 'button';

        let price = document.createElement('h4');
        price.innerText = card.price;
        
        display.appendChild(cardElement);
        cardElement.appendChild(image);
        cardElement.appendChild(title);
        cardElement.appendChild(accordionItem);
        accordionItem.appendChild(accordionHeader);
        accordionHeader.appendChild(accordionButton);
    };


    
}

// fakeStore('/products');

electronics.addEventListener('click', function() {
    fakeStore(catPath + '/electronics');
});
jewelry.addEventListener('click', function() {
    fakeStore(catPath + '/jewelery');
});
men.addEventListener('click', function() {
    fakeStore(catPath + `/men's clothing`);
});
women.addEventListener('click', function() {
    fakeStore(catPath + `/women's clothing`);
});

