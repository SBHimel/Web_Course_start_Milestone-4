console.log('immmmm');

document.getElementById('login-btn').addEventListener('click', function () {
    // step: 1 get the mobile number input
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    // step: 2 get the pin input
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);
    // step: 3 match pin & mobile number
    if (contactNumber == "01840385793" && pin == '1111') {
        // step: 3-1 true:::>> alert> homepage
        alert('login Success');

        window.location.assign('24-4-2-home.html')
    }
    else {

        // step: 3-2 true:::>> alert> return
        alert('login Failed');
        return;
    }
})