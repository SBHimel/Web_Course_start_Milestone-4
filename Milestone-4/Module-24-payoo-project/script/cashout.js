// document.getElementById('cashout-btn').addEventListener('click', function () {
//     //  1----> get the agent number & validate
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);

//     if (cashoutNumber.length !== 11) {
//         alert("Invalid Agent Number");
//         return;
//     }

//     //  2----> get the amount 
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     //  3----> get the Current Balance 
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     console.log(balance);
//     //  4----> Calculate new Balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     if (newBalance < 0) {
//         alert('Invalid Amount');
//         return;
//     }
//     console.log('new balance', newBalance);
//     //  5----> get the pin and varify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
//     if (pin === '1111') {
//         // 5-1 true:: show an alert > set Balance
//         alert('cashout succesfull');
//         console.log('new balance', newBalance);
//         balanceElement.innerText = newBalance;
//     }
//     else {
//         // 5-1 true:: show an error alert > return
//         alert('invalid pin');
//         return;
//     }

// });




/* -----------------Another way----------- 
-------ekhane kheyal korle bujha jab je ekhane document. get element and value properti bar bar use kora hoyche tai amra machin.js e ei kaj ekbar kore bar bar use korte parbo .
bar bar ar eki code lekhte hbe na.

eta korte <script src="script/machin.js"></script>
eita just home.html e likhe angta lagalei hoye jabe.
*/

document.getElementById('cashout-btn').addEventListener('click', function () {
    //     //  1----> get the agent number & validate
    const cashoutNumber = getValueFromInput('cashout-number');

    // console.log(cashoutNumber);
    if (cashoutNumber.length !== 11) {
        alert("Invalid Agent Number");
        return;
    }

    //  2----> get the amount
    const cashoutAmount = getValueFromInput('cashout-amount');

    //  3----> get the Current Balance 
    const currentBalance = getBalance();

    //  4----> Calculate new Balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }

    //  5----> get the pin and varify
    const pin = getValueFromInput('cashout-pin');
    if (pin === '1111') {
        // 5-1 true:: show an alert > set Balance
        alert('cashout succesfull');
        // console.log('new balance', newBalance);
        setBalance(newBalance);


         // 1 -- history-container ke dhore niye aso

        const history = document.getElementById('history-container');
        // 2 -- new div create korbo
        const newHistory = document.createElement('div');
        // 3 -- new div innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        Cashout ${cashoutAmount} TAKA Success to ${cashoutNumber} , at ${new Date()}
            
        </div>`
        // 4 -- history container e newDiv append korbo
        history.append(newHistory);


    }
    else {
        // 5-1 true:: show an error alert > return
        alert('invalid pin');
        return;
    }
});


