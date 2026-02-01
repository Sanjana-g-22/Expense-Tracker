let total = 0;

function addExpense() {
    let amount = Number(document.getElementById("amount").value);

    if(amount <= 0) {
        alert("Enter valid amount");
        return;
    }

    total += amount;
    document.getElementById("total").innerText = total;
}
