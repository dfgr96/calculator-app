const amountCurrent= document.getElementById('currency-field')
const separateButton = document.getElementById('button-convertion')
const listDropdown = document.getElementById('currency-lists')
const amountResult= document.getElementById('response-field')
const dolarValue = 4732
const euroValue = 5056
const realValue = 918

separateButton.onclick = function(){
    let presentAmount = amountCurrent.value;
    let valueCurrency = listDropdown.value;

    console.log(presentAmount);
    console.log(valueCurrency);
    convertionResult(presentAmount, valueCurrency);
}

function convertionResult(number, currencyConvertion){
    let result;
    if (currencyConvertion === 'dolar') {
        result =number/dolarValue;
    }
    if (currencyConvertion === 'euro') {
        result =number/euroValue;
    }
    if (currencyConvertion === 'real') {
        result =number/realValue;
    }
    amountResult.value=result.toFixed(3);
}
clear();