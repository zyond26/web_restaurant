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

var swiper = new Swiper(".product-slider", {
      loop:true,
      spaceBetween: 20,
      autoplay:{
        delay: 7500,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

var swiper = new Swiper(".review-slider", {
      loop:true,
      spaceBetween: 20,
      autoplay:{
        delay: 7500,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    var swiper = new Swiper(".blog-slider", {
      loop:true,
      spaceBetween: 20,
      autoplay:{
        delay: 7500,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
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
