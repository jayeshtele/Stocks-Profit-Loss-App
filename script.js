const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const check = document.querySelector(".btn-success");
const noOfNotes = document.querySelectorAll(".NoOfnotes")
const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]

check.addEventListener("click", (e) => {
    
    noOfNotes.innerText = ""

    const bill = billAmount.value;
    const cash = cashGiven.value;

    if (!bill == "" && !isNaN(bill) && bill > 0) {
        if (parseInt(cash) >= parseInt(bill)) {
            const amountReturn = cash - bill


            const calculateAmount = (amountReturn) => {
                for (let i = 0; i < notes.length; i++) {
                    const quantity = Math.floor(amountReturn / notes[i]);
                    amountReturn = amountReturn % notes[i]
                    noOfNotes[i].innerHTML = quantity;
                }
            }

            calculateAmount(amountReturn);

        } else {
            alert("Do you want to wash plates? As your cash given is less than bill amount")
        }
    } else {
        alert("Enter the amount in proper positive number")
    }

})
