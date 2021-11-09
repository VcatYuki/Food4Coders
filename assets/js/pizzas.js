let sizeList = {
    small:8,
    medium:10,
    large:12
}            



let pizzaList = [
    {
        name:"pizza01",
        description:"Pizza con champiñones, frankfurt, aceitunas negras y pimiento verde y rojo",
        img:"/assets/img/pizzas/pizza1.png",
        id:0,
        quantity: 0,
        price: 8 /* [
            small:8,
            medium:10,
            large:12
        ] */,
    },
    {
        name:"pizza02",
        description:"Pizza con jamón y pimiento",
        img:"/assets/img/pizzas/pizza2.png",
        id:1,
        quantity: 0,
        price: 8 /* [
            small:8,
            medium:10,
            large:12
        ] */,
    },
    {
        name:"pizza03",
        description:"Pizza de verduras y aceitunas negras",
        img:"/assets/img/pizzas/pizza3.png",
        id:2,
        quantity: 0,
        price: 8 /* [
            small:8,
            medium:10,
            large:12
        ] */,
    }
]

function showMenu() {
    let plates ="";
    for (let i = 0; i < pizzaList.length; i++) {
        plates += `<div data-number="${pizzaList[i].id}">
            <img src="${pizzaList[i].img}">
            <div class="info">
                <p class="price">€${pizzaList[i].price}</p>
                <h4>${pizzaList[i].name}</h4>
                <p>${pizzaList[i].description}</p>
                <div class="serving">
                    <h2>SERVING</h2>
                        <button class "sleft" onClick="reduce(this)">-</button>
                        <div class="quantity">${pizzaList[i].quantity}</div>
                        <button class "rleft" onClick="augmentar(this)">+</button>
                </div>
                <button class="addCart"><img class="cart" src="" alt="Shopping Cart">Add to Box</button>
            </div>
        </div>`
    }
    document.querySelector(".pizzas").innerHTML = plates;
}

showMenu();