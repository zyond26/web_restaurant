const rootElement = document.documentElement;
const cartShop = document.querySelector(".cartShop");

const cardItems = document.querySelectorAll('.card-item');
const addToCart = document.querySelector('.btn-add-to-card');
const close = document.querySelector('.close');
const checkOut = document.querySelector('.checkOut');
const quantity = document.querySelector('.quantity');
const quantityElements = document.querySelectorAll('.quantity');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const listProduct = [];

// Set theme
const setTheme = (theme) => {
    rootElement.setAttribute('data-theme', theme);
}
setTheme('light');

// Toggle Navbar Flow
//! header
let searchForm = document.querySelector(".search-form");
document.querySelector('#find-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active')
    user.classList.remove('active')
    menu.classList.remove('active')
}

let shoppingCart = document.querySelector(".cartShop");

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active')
    user.classList.remove('active')
    menu.classList.remove('active')
}

let user = document.querySelector(".user");

document.querySelector('#login-btn').onclick = () => {
    user.classList.toggle('active');
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    menu.classList.remove('active')
}

let menu = document.querySelector(".navigate-bar");

document.querySelector("#menu-btn").onclick = () => {
    menu.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    user.classList.remove('active')
}

window.onscroll = () => {
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    user.classList.remove('active')
    menu.classList.remove('active')
}

//! Card Product
// Toggle children elements of a "selected element"
cardItems.forEach(function (cardItem) {
    cardItem.addEventListener('click', function (event) {
        var currentCardItem = event.currentTarget;
        var cardDetail = event.currentTarget.querySelector('.card-detail');
        var addToCart = event.currentTarget.querySelector('.btn-add-to-card');

        console.log(addToCart);
        console.log('Clicked detail ' + currentCardItem);        
        console.log('Clicked detail ' + cardDetail);
        
        console.log('Clicked card-detail:', cardDetail);
        
        cardDetail.classList.toggle('translate-origin');

        cardDetail.addEventListener('click', function () {
            window.location.href = "#";
        });
    });
});


//! Add to cart function
close.addEventListener("mousedown", () => {
    cartShop.classList.remove('active');
});

minus.addEventListener("mousedown", () => {
    // decrease item quantity and remove item if value < 1 
});

plus.addEventListener("mousedown", () => {
    // increase item quantity and price
});

const addDataToHTML = (event) => {  
    listProductHTML.innerHTMl = '';
    if(listProduct.length > 0){
        listProduct.forEach(product => {
            listProductHTML.innerHTML += `
            <div class="card-item">
                <div class="card-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="card-detail">
                    <div class="card-detail-content">
                        <h4>${product.name}</h4>
                        <p>${product.description}</p>
                        <div class="card-detail-footer">
                            <span class="price">${product.price}</span>
                            <button class="btn-add-to-card">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });
    }
};




/**
 * Initializes the application by fetching data from a JSON file and adding it to the listProduct array.
 */
const initApp = () => {
    // get data from json
    fetch('../products.json')
    .then(response => response.json())
    .then(data => {
        listProduct.push(...data); // Add fetched data to listProduct array
    });
}
initApp();
console.log('List Product: ', listProduct);


const quantitySpan = document.querySelector('.quan');
const minusButtons = document.querySelectorAll('.minus');
const plusButtons = document.querySelectorAll('.plus');


let num = 0;
minusButtons.forEach(function (minusButton) {
    minusButton.addEventListener('click', function (event) {
        const parentContainer = minusButton.parentElement;
        const quantitySpan = parentContainer.querySelector('.quan');
        if (quantitySpan) {
            if (num > 0) {
                num = num - 1;
                quantitySpan.innerHTML = num;
            }
        }
    });
});
plusButtons.forEach(function (plusButton) {
    plusButton.addEventListener('click', function (event) {
        const parentContainer = plusButton.parentElement;
        const quantitySpan = parentContainer.querySelector('.quan');
        if (quantitySpan) {
            num = num + 1;
            quantitySpan.innerHTML = num;
        }
    });
});
