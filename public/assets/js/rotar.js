//paso 1 --> crear el array de imagenes
var pizzaList = ["pizza1.png", "pizza2.png", "pizza3.png"]

//que imagen muestro
var id = 0;


//paso 2: listeners de los botones de anterior y siguiente
document.querySelector(".right").addEventListener("click", cambiarPizza);
document.querySelector(".left").addEventListener("click", cambiarPizza);

//paso 3: Definir la función
function cambiarPizza() {
    var boton = this.class;
 
    if(boton == '.right') {
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
    var pizzaAMostrar = pizzaList [id];
    document.querySelector('.pizza') = pizzaAMostrar;
}