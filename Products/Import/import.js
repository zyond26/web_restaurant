const rootElement = document.documentElement;

setTheme = (theme) => {
    rootElement.setAttribute('data-theme', theme);
}
setTheme('light');

//! header
let searchForm = document.querySelector(".search-form");
document.querySelector('#find-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active')
    user.classList.remove('active')
    menu.classList.remove('active')
}

let shoppingCart = document.querySelector(".cartShop");

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active')
    user.classList.remove('active')
    menu.classList.remove('active')
}

let user = document.querySelector(".user");

document.querySelector('#login-btn').onclick = () =>{
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
//! End of Header

const btnright = document.querySelector(".btn.left");
const btnleft = document.querySelector(".btn.right");
const wave = document.querySelector(".wave");
const circle = document.querySelector(".circle");

let isEventActive = true; 
spinCircle = () => {
    if (isEventActive === true) {
        circle.classList.toggle("spin");
    }
    //? Set the flag to false to prevent rapid activation
    isEventActive = false;
    //? Use setTimeout to reset the flag after 1100 milliseconds (1.1 seconds)
    setTimeout(() => {
        isEventActive = true;
    }, 1150);
};

//! spin the cicle
btnright.addEventListener("mouseover", spinCircle);
btnleft.addEventListener("mouseover", spinCircle);


//! Toggle Wave Transition
btnright.addEventListener("mousedown", () => { 
    if (wave.classList.contains('right-wave')) {
        console.log("right");
    }
    else{
        wave.classList.add('left-wave');
        console.log(wave.classList);    
    }
    //? Connect Link to other HTML pages
    window.location.href = "../product.html";
});

btnleft.addEventListener("mousedown", () => {
    if (wave.classList.contains('left-wave')) {
        wave.classList.remove('left-wave');    
    }
    else{
        wave.classList.toggle('right-wave');
        console.log("right");
    }
    window.location.href = "..\\Domestic\\domestic.html";
});

//! Toggle children elements of a "selected element"
var cardItems = document.querySelectorAll('.card-item');
let addToCart = document.querySelector('.btn-add-to-card');

cardItems.forEach(function (cardItem) {
    cardItem.addEventListener('click', function (event) {
        //? get selected element datas (card)
        var currentCardItem = event.currentTarget;
        //? select its children element (card sub-element)
        var cardDetail = event.currentTarget.querySelector('.card-detail');
        var addToCart = event.currentTarget.querySelector('.btn-add-to-card');

        console.log(addToCart);
        console.log('Clicked detail ' + currentCardItem);        
        console.log('Clicked detail ' + cardDetail);
        
        console.log('Clicked card-detail:', cardDetail);
        
        cardDetail.classList.toggle('translate-origin');

        cardDetail.addEventListener('click', function () {
            window.location.href = "..\\ProductDetail\\productDetail.html";
        });

    });
});


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
