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

// -> continue here!!!

//Empty Cart array
let cart = [];

//Access to the desired pizza
function getItem(id, list){
  let item =  list.find((e)=>e.id === id);
  console.log(item)
  return item 
}

//Add to Cart fuction
function addToCart(id) {
    //check if product already exists in the cart
    if (cart.some((e)=> e.id === id)){
        //adds to cart depending on how many times you press 'add to box', and shows in numberofunits
        changeNumberofUnits("plus", id) 
    }
    else {
      //const item = pizzaList.find((pizzaList) => pizzaList.id === id)
      /* Acdeder a quantity de item y cambiar su valor por el de cout (del contador de la main page) */
        const item = getItem(id, pizzaList);
        cart.push({
            ...item,
         /* name: item.name,
            description: item.descriptio,
            img: item.img,
            id:item.id, */
            numberOfUnits:count,
            size:globalSize,
        });
    }
    
    console.log(cart);

    updateCart();
}

//Update cart

function updateCart(){
    renderCartItems();
    renderSubtotal();
}

//Calculate and render subtotal
function renderSubtotal(){
    let totalPrice= 0, totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits; //price error <- 
        totalItems += item.numberOfUnits;
    });

    let devileryCost = 2.00;

    let total = devileryCost + totalPrice;

    subTotal.innerHTML = `Subtotal (${totalItems}) items: ${totalPrice}€ <p>Delivery cost: 2.00 €</p> Total: ${total} €`; //price error <-
}   

//Show/render Cart Items
function renderCartItems(){
    cartItems.innerHTML = ""; // clear cart item to not repeat
    cart.forEach((item)=> {
            cartItems.innerHTML += `
                <div class="cart-item">
                    <div class="item-info" >
                        <h4>${item.name}</h4>    
                        <img src="${item.img}">
                    </div>                
                    <div class="unit-price">
                        <small>${item.size}</small>
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

//Remove cart items

function removeItemFromCart (id){
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

