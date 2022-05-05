const buttonNumbers = document.getElementsByName('data-number');
const buttonOperator = document.getElementsByName('data-operator');
const buttonDelete = document.getElementsByName('data-delete')[0];
const buttonEqual = document.getElementsByName('data-equal')[0];
let result = document.getElementById('result');
let actualOperation = '';
let previousOperation = '';
let operation = undefined;

buttonNumbers.forEach(function(button){
    button.addEventListener('click', function(){
        addNumber(button.innerText);
    })
});

buttonOperator.forEach(function(button){
    button.addEventListener('click', function(){
        selectOperator(button.innerText)
    })
});

buttonEqual.addEventListener('click', function(){
    calculate();
    updateDisplay();
});

buttonDelete.addEventListener('click', function(){
    clear();
    updateDisplay();
});

function selectOperator(op){
    if(actualOperation === '') return;
    if(previousOperation !== ''){
        calculate()
    }
    operation = op.toString();
    previousOperation = actualOperation;
    actualOperation = '';
};

function calculate(){
    var calculus;
    const previous = parseFloat(previousOperation);
    const actual = parseFloat(actualOperation);
    if(isNaN(previous) || isNaN(actual)) return;
    switch(operation){
        case '+':
            calculus = previous + actual;
            break;
        case '-':
            calculus = previous - actual;
            break;
        case 'x':
            calculus = previous * actual;
            break;
        case '/':
            calculus = previous / actual;
            break;
        default:
            return;
    };
    actualOperation = calculus;
    operation = undefined;
    previousOperation = '';
};

function addNumber(num){
    actualOperation = actualOperation.toString() + num.toString();
    updateDisplay();
};

function clear(){
    actualOperation= '';
    previousOperation= '';
    operation = undefined;
}

function updateDisplay(){
    result.value = actualOperation;
}

clear();