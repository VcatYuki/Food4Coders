let counterDispEle = document.querySelector('.counter-display');
let counterMinEle = document.querySelector('.counter-minus');
let counterPlusEle = document.querySelector('.counter-plus');
let count = 1;
document.querySelector('.counter-display').innerHTML = count;

/*CAMBIO DEL CONTADOR CON SWITCH*/

function SumaRestaPizza (operacion){
    switch (operacion) {
    case 'SUMA': 
    count = count + 1;
    break
    case 'RESTA': 
    if (count !=0){ 
      count = count - 1;
    }
    break
    }
}   

counterPlusEle.addEventListener("click", () => {
    SumaRestaPizza('SUMA');
    updateDisplay();   
});

counterMinEle.addEventListener("click", () => {
    SumaRestaPizza('RESTA');
    updateDisplay();   
});

function updateDisplay() {
    counterDispEle.innerHTML = count;
};
