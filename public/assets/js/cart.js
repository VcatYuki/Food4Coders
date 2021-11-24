//Show the cart - onclick
let buttonCart = document.querySelector(".button-cart");
let showCart = document.querySelector(".cart");
 
function showCarrito(){
    showCart.classList.toggle("active");
}
buttonCart.addEventListener('click', showCarrito);

//Selecting the shopping cart from HTML
const cartItems = document.querySelector(".cart-items");

// -> continue here!!!

//Empty Cart array
let cart = [];

function getItem(id, list){
  let item =  list.find((e)=>e.id === id);
  console.log(item)
  return item 
}

//Add to Cart fuction
function addToCart(id) {
    //let valido = (e)=>{e.id === id}
    //check if product already exists in the cart
    if (cart.some((e)=> e.id === id)){
        //alert("Pizza already in the box");

        //clicking 'add to box' will do the same as clicking on the plus button inside the cart
        changeNumberofUnits("plus", id) 

    }
    else {
      //const item = pizzaList.find((pizzaList) => pizzaList.id === id)
        const item = getItem(id, pizzaList);
        cart.push({
            ...item,
         /*    name: item.name,
            description: item.descriptio,
            img: item.img,
            id:item.id,
            quantity:1, */
            numberOfUnits:1,
            size:`M`
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
                
                    <div class="unit-price">
                        <small>€</small>${item.price}
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