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


        console.log(cart);
    }
    
};