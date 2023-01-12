const buy = document.querySelector("#buy");
const sell = document.querySelector("#sell");
const quantity = document.querySelector("#quantity");
const tellme = document.querySelector(".btn");

tellme.addEventListener("click", ()=>{
    console.log(buy.value)
    console.log(sell.value)
    console.log(quantity.value)
});
