const brand = document.getElementById('brand');
const cart = document.getElementById('cart');
const electronics = document.getElementById('electronics');
const jewelry = document.getElementById('jewelry');
const men = document.getElementById('men');
const women = document.getElementById('women');
const display = document.getElementById('display');

const URL = 'https://fakestoreapi.com';
const catPath = '/products/category';

const fakeStore = async(endpoint) => {
    if (endpoint != '/') {
        let fetchStore = await fetch(URL + endpoint)
        .then(res => res.json())
        .then(json => console.log(json))
    } else {
        let fetchStore = await fetch(URL + endpoint)
        .then(res => console.log(res))
    }
}

// fakeStore('/products');

electronics.addEventListener('click', fakeStore(catPath + '/electronics'));
jewelry.addEventListener('click', fakeStore(catPath + '/jewelery'));
men.addEventListener('click', fakeStore(catPath + `/men's clothing`));
women.addEventListener('click', fakeStore(catPath + `/women's clothing`));