/* Array de pizzas */

let pizzaList = [
    {
        name:"pizza01",
        description:"Pizza con champiñones, frankfurt, aceitunas negras y pimiento verde y rojo",
        img:"assets/img/pizzas/pizza1.png",
        id:0,
        quantity: 0,
    },
    {
        name:"pizza02",
        description:"Pizza con jamón y pimiento",
        img:"assets/img/pizzas/pizza2.png",
        id:1,
        quantity: 0,
    },
    {
        name:"pizza03",
        description:"Pizza de verduras y aceitunas negras",
        img:"assets/img/pizzas/pizza3.png",
        id:2,
        quantity: 0,
    }
]

/* Añadir las pizzas al HTML desde el Array */

/* if (pizzaList[i] === pizzaList.indexOf) */
let plates ="";
let id = 0;
function showMenuAll() {    
    for (let i = 0; i < pizzaList.length; i++) {
        plates += 
        `<div class="pizza${pizzaList[i].id}" data-number="${pizzaList[i].id}">    
            <div class="info">            
                <h4>${pizzaList[i].name}</h4>
                <h5>INFORMATION</H5>
                <p class="description">${pizzaList[i].description}</p>
                <p class="price"></p>
                <div class="serving">
                    <h5>SERVING</h5>
                    <div class="bserving">
                        <button class="right" onClick="reduce(this)">-</button>
                        <div class="quantity">${pizzaList[i].quantity}</div>
                        <button class="left" onClick="augmentar(this)">+</button>
                    </div>
                </div>            
                <img src="${pizzaList[i].img}">
            </div>
        </div>`
        console.log (pizzaList[i].name)
    }
    document.querySelector(".pizzas").innerHTML = plates;
}
/* showMenuAll(); */
/* console.log(plates) */
/* Listeners de las flechas */
document.querySelector(".arrowright").addEventListener("click", cambiarPizza);
document.querySelector(".arrowleft").addEventListener("click", cambiarPizza);

function cambiarPizza() {
    let boton = this.class; 
    if(boton == '.arrowright') {
        id --;
        if(id < 0) {
            id = pizzaList.length -1; 
        } 
    } else {
        id ++;
        if(id == pizzaList.length) {
            id = 0;
        } 
    }
    var pizzaAMostrar = pizzaList[id];
    document.querySelector(`.pizzas`).innerHTML = pizzaAMostrar
}


/* Lista de precios por tamaño y como insertarlo en el HTML con los botones*/

let sizeList = {
    small:8,
    medium:10,
    large:12
} 

let small = document.querySelector(".small") 
small.addEventListener('click', function (){
   document.querySelector(".price").innerHTML = sizeList.small + " €";
})

let medium =  document.querySelector(".medium")   
medium.addEventListener('click', function (){
    document.querySelector(".price").innerHTML = sizeList.medium + " €";
}) 

let large = document.querySelector(".large")
large.addEventListener('click', function (){
    document.querySelector(".price").innerHTML = sizeList.large + " €";
}) 

/* window.onload = function (){
    document.querySelector(".price").innerHTML = sizeList.small + " €";
 }; */

 