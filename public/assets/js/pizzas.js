/* Array de pizzas */

let pizzaList = [
    {
        name:"Pizza Frankfurt",
        description:"Pizza con champiñones, frankfurt, aceitunas negras y pimiento verde y rojo",
        img:"assets/img/pizzas/pizza1.png",
        id:0,
        price: 9
    },
    {
        name:"Pizza Serrana",
        description:"Pizza con jamón serrano y queso",
        img:"assets/img/pizzas/pizza2.png",
        id:1,
        price: 9
    
    },
    {
        name:"Pizza Caprese",
        description:"Pizza de tomate, mozzarella y albahaca",
        img:"assets/img/pizzas/pizza3.png",
        id:2,
        price: 9
    },
    {
        name:"pizza04",
        description:"Pizza de verduras y aceitunas negras",
        img:"assets/img/pizzas/pizza4.png",
        id:3,
        price: 9
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
                
                <div class="boxPizzas">
                    
                </div>
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
        showPizzas()
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
        showPizzas()
        updateDisplay();
        document.querySelector(".price").innerHTML = sizeList.small + " €/pizza";
    }


    let imgPizzas = ""
    function showPizzas () {
        imgPizzas= ` <img class="pleft" src="${pizzaList[indexPizza].img}" >            
                    <img class="pcenter" src="${pizzaList[indexPizza].img}">
                    <img class="pright" src="${pizzaList[indexPizza].img}">`
                    document.querySelector('.boxPizzas').innerHTML = imgPizzas;
    }
    showPizzas();
    


/* Lista de precios por tamaño y como insertarlo en el HTML con los botones*/


let globalSize = sizeList.small+ " €/pizza";
document.querySelector(".price").innerHTML = globalSize;

let small = document.querySelector(".small") 
small.addEventListener('click', function (){
    globalSize = sizeList.small+ " €/pizza";
   document.querySelector(".price").innerHTML = globalSize;
   
})

let medium =  document.querySelector(".medium")   
medium.addEventListener('click', function (){
    globalSize = sizeList.medium+ " €/pizza";
    document.querySelector(".price").innerHTML = globalSize;
}) 

let large = document.querySelector(".large")
large.addEventListener('click', function (){
    globalSize = sizeList.large+ " €/pizza";
    document.querySelector(".price").innerHTML = globalSize;
    
}) 
function sendCart() {
    showCart();

 }
