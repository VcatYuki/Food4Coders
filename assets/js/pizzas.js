let pizzaList = [
    {
        name: "pizza01",
        description: "Pizza con champiñones, frankfurt, aceitunas negras y pimiento verde y rojo",
        img:  "/Food4Coders/assets/img/pizza1.png",
        id:0,
    }
]
function showMwnu () {
    let plates ="";
    for (let i = 0; i < pizzaList.length; i++) {
        plates += `<div data-number="${pizzaList[i].id}">
            <img src=""`
    }
}