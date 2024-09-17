const mainBalanced = document.getElementById("main-balanced");
const addExpense = document.getElementById("add-expense");
const addMoney = document.getElementById("add-money");
const withdraw = document.getElementById("withdraw");

addMoney.addEventListener('click', function(){
    let addValue = addMoney.previousElementSibling;
    let inputNumber = Number(addValue.value);
    if(inputNumber < 0){
        inputNumber = 0;
        alert("Negetive Number is Not allowed");
        addValue.value = '';
    }

    if(mainBalanced.innerText === 'Insufficient'){
        mainBalanced.innerText = 0;
    }

    let calculation = Number(mainBalanced.innerText) + inputNumber;
    mainBalanced.innerText = calculation;
    addValue.value = '';
});

addExpense.addEventListener('click', function(){
    let expenseValue = addExpense.previousElementSibling;
    let inputNumber = Number(expenseValue.value);
    if(mainBalanced.innerText === 'Insufficient'){
        mainBalanced.innerText = 0;
    }
    if(inputNumber < 0){
        inputNumber = 0;
        alert("Negetive Number is Not allowed");
        expenseValue.value = '';
    }
    let calculation = Number(mainBalanced.innerText) - inputNumber;
    if(calculation<0){
        mainBalanced.innerText = 'Insufficient';
        expenseValue.value = '';
    }
    else{
        mainBalanced.innerText = calculation;
        expenseValue.value = '';
    }
});

withdraw.addEventListener('click', function(){
    let withdrawValue = withdraw.previousElementSibling;
    let inputNumber = Number(withdrawValue.value);
    if(mainBalanced.innerText === 'Insufficient'){
        mainBalanced.innerText = 0;
    }
    if(inputNumber < 0){
        inputNumber = 0;
        alert("Negetive Number is Not allowed");
        withdrawValue.value = '';
    }
    let calculation = Number(mainBalanced.innerText) - inputNumber;
    if(calculation < 0){
        mainBalanced.innerText = 'Insufficient';
        withdrawValue.value = '';
    }
    else{
        mainBalanced.innerText = calculation;
        withdrawValue.value = '';
    }
});
