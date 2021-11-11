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
function showMenu() {
    let plates ="";
    for (let i = 0; i < pizzaList.length; i++) {
        plates += 
        `<div data-number="${pizzaList[i].id}">    
            <div class="info">            
                <h4>${pizzaList[i].name}</h4>
                <p>${pizzaList[i].description}</p>
                <p class="price">8 €</p>
                <div class="serving">
                    <h2>SERVING</h2>
                    <div class="bserving">
                        <button class="sleft" onClick="reduce(this)">-</button>
                        <div class="quantity">${pizzaList[i].quantity}</div>
                        <button class="rleft" onClick="augmentar(this)">+</button>
                    </div>
                </div>            
                <img src="${pizzaList[i].img}">
                <button class="addCart"><img class="cart" src="assets/img/icons/whitepizzabox_icon.png" alt="Shopping Cart">Add to Box</button>
            </div>
        </div>`
    }
    document.querySelector(".pizzas").innerHTML = plates;
}
showMenu();


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
