let carrito = [];
let cuenta = 0;


function aumentar(elemento){
    let padre = elemento.parentElement
    let textoContador = padre.querySelector("p")
    let bisabuela = padre.parentElement.parentElement
    let bisabuelaId = bisabuela.dataset.numero
    let index = listaPlatos.find(element => element.id == bisabuelaId) /* function (element) {
         return element.id == bisabuelaId } */
    let indexListaPlatos = listaPlatos.indexOf(index)
    let aumentarCantidad = listaPlatos[indexListaPlatos].cantidad
 
    aumentarCantidad++
    textoContador.innerHTML = aumentarCantidad

    listaPlatos[indexListaPlatos].cantidad = aumentarCantidad
    
    if (listaPlatos[indexListaPlatos].cantidad == 1 && carrito.includes(listaPlatos[indexListaPlatos]) !== "true"){
        carrito.push(listaPlatos[indexListaPlatos])
    }
}

function reduce(elemento){
    let padre = elemento.parentElement;
    let textoContador = padre.querySelector('p');
    let bisabuela = padre.parentElement.parentElement
    let bisabuelaId= bisabuela.dataset.numero  
    let index = listaPlatos.find(element => element.id == bisabuelaId)
    /* function (element) {
         return element.id == bisabuelaId } */
    let indexListaPlatos = listaPlatos.indexOf(index)
    let reduceCantidad = listaPlatos[indexListaPlatos].cantidad

    if(reduceCantidad > 0){
    reduceCantidad --; 
    }else{
        return
    }

    textoContador.innerHTML = reduceCantidad
    
    listaPlatos[indexListaPlatos].cantidad = reduceCantidad
    
    if(listaPlatos[indexListaPlatos].cantidad == 0){
        let indice = carrito.find(element => element.id == bisabuelaId) /* function (element) {
            return element.id == bisabuelaId } */
        let numerito = carrito.indexOf(indice)
        carrito.splice(numerito, 1)
    }

    console.log(listaPlatos);
    console.log(carrito);
}