document.getElementById('cashout-btn').addEventListener('click', function () {
    //  1----> get the agent number & validate
    const cashoutNumberInput = document.getElementById('cashout-number');
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);

    if (cashoutNumber.length !== 11) {
        alert("Invalid Agent Number");
        return;
    }

    //  2----> get the amount 
    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    //  3----> get the Current Balance 
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log(balance);
    //  4----> Calculate new Balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }
    console.log('new balance', newBalance);
    //  5----> get the pin and varify
    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;
    if (pin === '1111') {
        // 5-1 true:: show an alert > set Balance
        alert('cashout succesfull');
        console.log('new balance', newBalance);
        balanceElement.innerText = newBalance;
    }
    else {
        // 5-1 true:: show an error alert > return
        alert('invalid pin');
        return;
    }

});