/* Array de pizzas */

let pizzaList = [
    {
        name:"Pizza Frankfurt",
        description:"Pizza con champiñones, frankfurt, aceitunas negras y pimiento verde y rojo",
        img:"assets/img/pizzas/pizza1.png",
        id:0,
        quantity: 1,
    },
    {
        name:"Pizza Serrana",
        description:"Pizza con jamón serrano y queso",
        img:"assets/img/pizzas/pizza2.png",
        id:1,
        quantity: 1,
    
    },
    {
        name:"Pizza Caprese",
        description:"Pizza de tomate, mozzarella y albahaca",
        img:"assets/img/pizzas/pizza3.png",
        id:2,
        quantity: 1,
    },
    {
        name:"pizza04",
        description:"Pizza de verduras y aceitunas negras",
        img:"assets/img/pizzas/pizza4.png",
        id:3,
        quantity: 1,
    }
]

let sizeList = {
    small:8,
    medium:10,
    large:12
} 

/* Añadir las pizzas al HTML desde el Array */

let plates ="";
let indexPizza = 0;
function showMenu() {         
        plates = 
        `<div class="pizza" data-number="${pizzaList[indexPizza].id}">    
            <div class="info">            
                <h4>${pizzaList[indexPizza].name}</h4>
                <div class="infodesc">
                    <h5>INFORMATION</H5>
                    <p class="description">${pizzaList[indexPizza].description}</p>
                </div>
                <h3>PRICE</h3>
                <p class="price"></p>
                <div class="serving">
                    <h5>SERVING</h5>
                    
                    <div class="bserving">
                        <button class="counter-minus">-</button>
                        <div class="counter-display">${pizzaList[indexPizza].quantity}</div>
                        <button class="counter-plus">+</button>
                    </div>

                      
                </div>            
                <img src="${pizzaList[indexPizza].img}">
            </div>
        </div>`
        
    document.querySelector(".pizzas").innerHTML = plates;
}
showMenu();
//->Create and add a funcion updateEventListeners//


/* Listeners de las flechas */

document.querySelector(".arrowright").addEventListener("click", sumPizza);
document.querySelector(".arrowleft").addEventListener("click", subtractPizza);

function subtractPizza() {    
        indexPizza --;
        if(indexPizza < 0) {
            indexPizza = pizzaList.length -1;   
        } 
        console.log(indexPizza)                  
        showMenu();
        updateDisplay();
        document.querySelector(".price").innerHTML = sizeList.small + " €/pizza";
    }

function sumPizza() {
        indexPizza ++;
        if(indexPizza == pizzaList.length) {
            indexPizza = 0;
        }        
        console.log(indexPizza)        
        showMenu();
        updateDisplay();
        document.querySelector(".price").innerHTML = sizeList.small + " €/pizza";
    }

/* Lista de precios por tamaño y como insertarlo en el HTML con los botones*/



let small = document.querySelector(".small") 
small.addEventListener('click', function (){
   document.querySelector(".price").innerHTML = sizeList.small+ " €/pizza";
})

let medium =  document.querySelector(".medium")   
medium.addEventListener('click', function (){
    document.querySelector(".price").innerHTML = sizeList.medium + " €/pizza";
}) 

let large = document.querySelector(".large")
large.addEventListener('click', function (){
    document.querySelector(".price").innerHTML = sizeList.large + " €/pizza";
}) 

window.onload = function (){
    document.querySelector(".price").innerHTML = sizeList.small+ " €/pizza";
 };

function sendCart() {
    showCart();

 }
