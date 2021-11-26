// -> Problems: <- 
//1. The price that goes on subtotal is 'staticly' set on the pizzaList array and not related with sizes
//2. We don't have animations for pizza rotation
//3. It's showing the same pizza in all 3 positions (ipad mode)


//Show the cart - onclick
let buttonCart = document.querySelector(".button-cart");
let showCart = document.querySelector(".cart");
let subTotal = document.querySelector(".subtotal");

 
function showCarrito(){
    showCart.classList.toggle("active");
}
buttonCart.addEventListener('click', showCarrito);

//Selecting the shopping cart from HTML
const cartItems = document.querySelector(".cart-items");

//Empty Cart array
let cart = JSON.parse(localStorage.getItem("CART")) || []; //or empty array
updateCart();

//Access to the desired pizza
function getItem(id, list){
  let item =  list.find((e)=>e.id === id);
  return item 
}

//Add to Cart fuction

function addToCart(id) {
    if (cart.some((e)=> e.id === id)){
        changeNumberofUnits("plus", id); 
    }
    else {
        const item = getItem(id, pizzaList);

        cart.push({
            ...item,
            numberOfUnits:count,
            size:globalSize
        });
   
    //localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    console.log(cart);
    updateCart();
}

//Update cart

function updateCart(){
    renderCartItems();
    renderSubtotal();

    //save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart));
}

//Calculate and render subtotal

function renderSubtotal(){
    let totalPrice= 0, totalItems = 0;

    cart.forEach((item) => {
        totalPrice += parseInt(item.size) * item.numberOfUnits; //price error <- 
        totalItems += item.numberOfUnits;
    });

    let devileryCost = 2.00;

    let total = devileryCost + totalPrice;

    subTotal.innerHTML = `Subtotal (${totalItems}) items: ${totalPrice}€ <p>Delivery cost: 2.00 €</p> Total: ${total} €`; //price error <-
}   

//Show/render Cart Items

function renderCartItems(){
    //let pizzaCart = JSON.parse(localStorage.getItem("cart"));
    cartItems.innerHTML = ""; // clear cart item to not repeat
    cart.forEach((item)=> {
            cartItems.innerHTML += `
                <div class="cart-item">
                    <div class="item-info" onclick="removeItemFromCart(${item.id})">
                        <h4>${item.name}</h4>    
                        <img src="${item.img}">
                    </div>                
                    <div class="unit-price">
                        <small>${item.size}/pizza</small>
                    </div>
                    <div class="units">
                            <button class="btn minus" onclick="changeNumberofUnits('minus', ${item.id})"> - </button>
                            <div class="number">${item.numberOfUnits}</div>
                            <button class="btn plus" onclick="changeNumberofUnits('plus', ${item.id})"> + </button>
                    </div>  
                </div>
            `
    });
}

//Remove items from cart

function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}



//Change number of units inside the cart

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






//Add to Cart fuction w/ coments to understand better
/* function addToCart(id) {
    //check if product already exists in the cart
    if (cart.some((e)=> e.id === id)){
        alert("Pizza already in the box");

        //clicking 'add to box' will do the same as clicking on the plus button inside the cart
        changeNumberofUnits("plus", id) 

    }
    else {
      const item = pizzaList.find((pizzaList) => pizzaList.id === id)
      /* Acdeder a quantity de item y cambiar su valor por el de cout (del contador de la main page) */
        /* const item = getItem(id, pizzaList);
        cart.push({
            ...item,
         /* name: item.name,
            description: item.descriptio,
            img: item.img,
            id:item.id, */
            //numberOfUnits:count,
            //size:globalSize,
        /* });
    }
    
    console.log(cart);

    updateCart();
} */ 

