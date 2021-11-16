/* Array de pizzas */

let pizzaList = [
    {
        name:"pizza01",
        description:"Pizza con champiñones, frankfurt, aceitunas negras y pimiento verde y rojo",
        img:"assets/img/pizzas/pizza1.png",
        id:0,
        quantity: 1,
    },
    {
        name:"pizza02",
        description:"Pizza con jamón y pimiento",
        img:"assets/img/pizzas/pizza2.png",
        id:1,
        quantity: 1,
    },
    {
        name:"pizza03",
        description:"Pizza de verduras y aceitunas negras",
        img:"assets/img/pizzas/pizza3.png",
        id:2,
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
    for (let i = 0; i < pizzaList.length; i++) { 
        plates = 
        `<div class="pizza" data-number="${pizzaList[indexPizza].id}">    
            <div class="info">            
                <h4>${pizzaList[indexPizza].name}</h4>
                <div class="infodesc">
                    <h5>INFORMATION</H5>
                    <p class="description">${pizzaList[indexPizza].description}</p>
                </div>
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
        
    }
    document.querySelector(".pizzas").innerHTML = plates;
}
showMenu();
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

 