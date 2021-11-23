//Show the cart - onclick

let buttonCart = document.querySelector(".button-cart");
let showCart = document.querySelector(".cart");
 
function showCarrito(){
    console.log('hi')
    showCart.classList.toggle("active");
}
buttonCart.addEventListener('click', showCarrito);


//function showCart(){
//    
//}

//document.querySelector(".button-cart").addEventListener("click", showCart);


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

    //updateCart();
};

//Update cart

//function updateCart(){
    //showCartItems();
    //showSubtotal();
//}

//Show/render Cart Items
//function showCartItems(){
//    cart.forEach(element => {
        
//    });
//};