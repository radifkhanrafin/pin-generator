function getPin() {
    const pin = generatePin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log("invalid pin", pin)
        return getPin();
    }
}
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('genarate-pin').addEventListener('click', function () {
    const pin = getPin();
    // console.log(pin)
    const inputFild = document.getElementById('genarated-pin');
    inputFild.value = pin
})
document.getElementById('numberPad').addEventListener('click', function (event) {
    const Number = event.target.innerText;
    const numberFild = document.getElementById('numberFild');
    const previousNumber=numberFild.value;
    // console.log(Number)
    if (isNaN(Number)) {
        // console.log(Number)
        if (Number === 'C') {
            numberFild.value='';
        }
        else if(Number === '<'){
            const digits=previousNumber.split('');
            digits.pop();
            const remainingDigit=digits.join('');
            numberFild.value=remainingDigit
        }
    }
    else {
        const fullNumber= previousNumber + Number
        numberFild.value = fullNumber 
    }
})
document.getElementById('verifyPin').addEventListener('click',function () {
    const newPin=document.getElementById('genarated-pin');
    const newPinValue=newPin.value;
    console.log(newPinValue)
    const setPin=document.getElementById('numberFild');
    const checkPin=setPin.value;
    console.log(checkPin);
     const correctPin=document.getElementById('correct');
     const incorrectPin=document.getElementById('incorrect');

    if (checkPin === newPinValue) {
        correctPin.style.display='block'
        incorrectPin.style.display='none'
    }
    else{
        incorrectPin.style.display='block'
        correctPin.style.display='none'  
    }
})