let counterDispEle = document.querySelector('.counter-display');
let counterMinEle = document.querySelector('.counter-minus');
let counterPlusEle = document.querySelector('.counter-plus');
let count = 1;

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


/*
updateDisplay();
counterPlusEle.addEventListener("click", () => {
    count++;
    updateDisplay();   
});
counterMinEle.addEventListener("click", () => {
    count--;
    updateDisplay();   
    
    if (count === 0) {
        count = 1;
        updateDisplay();
    }
});*/

/* document.querySelectorAll('.counter-plus').forEach(item => {
    item.addEventListener('click', () => {
        count++;
        updateDisplay();   
    })
})   */  

/* 
function changePricePlus() {
    let price = sizeList.small
    total = price * count
    document.querySelector(".price").innerHTML = total + " €"
}
function changePriceMinus() {
    let price = document.querySelector(".price").innerHTML
    total = parseFloat(price)/ (count+1)
    document.querySelector(".price").innerHTML = total + " €"
} */