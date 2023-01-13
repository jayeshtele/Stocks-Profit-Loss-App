const buy = document.querySelector("#buy");
const sell = document.querySelector("#sell");
const quantity = document.querySelector("#quantity");
const tellme = document.querySelector(".btn");
const output = document.querySelector(".output");

tellme.addEventListener("click", () => {

    let bp = Number(buy.value)
    let sp = Number(sell.value)
    let qty = Number(quantity.value)

    if (sp > bp) {
        let profit = (sp - bp) * qty;
        let profitPercent = ((sp - bp) / bp) * 100;
        output.innerHTML = `Hey the Profit is ${profit} Rupees which is ${Math.ceil(profitPercent)}% from buying point`;
    } else if (bp > sp) {
        let loss = (bp - sp) * qty;
        let lossPercent = ((bp - sp) / bp) * 100;
        output.innerHTML = `Hey the Loss is ${loss} Rupees which is ${Math.ceil(lossPercent)}% from buying point`;

    } else {
        output.innerHTML = "No Changes from your buying price";
    }

});
