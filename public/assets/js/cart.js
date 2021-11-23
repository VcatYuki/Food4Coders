//Show the cart - onclick
let buttonCart = document.querySelector(".button-cart");
let showCart = document.querySelector(".cart");
 
function showCarrito(){
    console.log('hi')
    showCart.classList.toggle("active");
}
buttonCart.addEventListener('click', showCarrito);


//Selecting the shopping cart from HTML
const cartItems = document.querySelector(".cart-items");

// -> continue here!!!

//Cart array
let cart = [];

//Add to Cart
function addToCart(id) {
    //check if product already exists in the cart
    if (cart.some((item) => item.id === id)){
        alert("Pizza already in the box")
    }
    else {
        const item = pizzaList.find((pizzaList) => pizzaList.id === id)

        cart.push({
            ...item, 
            numberOfUnits:1,
        });
    }
    
    console.log(cart);

    updateCart();
}

//Update cart

function updateCart(){
    renderCartItems();
    //renderSubtotal();
}

//Show/render Cart Items
function renderCartItems(){
    cartItems.innerHTML = ""; // clear cart item to not repeat
    cart.forEach((item)=> {
            cartItems.innerHTML += `
                <div class="cart-item">
                    <div class="item-info">
                        <h4>${item.name}</h4>    
                        <img src="${item.img}">
                    </div>
                </div>

                <div class="cart-counter">
                        <button class="btn minus" onclick="changeNumberofUnits('minus', ${item.id})> - </button>
                        <div class="number">${item.numberOfUnits}</div>
                        <button class="btn plus" onclick="changeNumberofUnits('plus', ${item.id})> + </button>
                </div>  
            `
    });
}

//buttons or 'onclick' is not working!!! need to fix that 

//change number of units 

function changeNumberofUnits (action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;

        if (item.id === id){
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            } else if (action === "plus") {
                numberOfUnits++;
            }
        }

        return{
            ...item,
            numberOfUnits,
        };

    });

    updateCart();
}