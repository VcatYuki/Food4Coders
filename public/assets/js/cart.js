//Show the cart - onclick
// -> how to only show when we click on the cart? ask group


document.querySelector(".button-cart").onclick = showCart()

function showCart() {
    document.querySelector("#cart").classList.toggle("show")
    console.log("I'm working!")
}

/* const cButton = document.querySelector(".button-cart")
cButton.addEventListener("click", function(){
    document.querySelector("#cart").classList.toggle("show")
    console.log("I'm working!")
}) */


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
};

//Update cart

function updateCart(){
    showCartItems();
    //showSubtotal();
}

//Show/render Cart Items
function showCartItems(){
    cart.forEach(element => {
        
    });
};