let counterDispEle = document.querySelector('.counter-display');
let counterMinEle = document.querySelector('.counter-minus');
let counterPlusEle = document.querySelector('.counter-plus');
let count = 1;
updateDisplay();
/*counterPlusEle.addEventListener("click", () => {
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
}); */

function updateDisplay() {
    counterDispEle.innerHTML = count;
};


[document.querySelector('.counter-plus')].forEach(item => {
  item.addEventListener('click', event => {
    count++;
    updateDisplay(); 
  })
})

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