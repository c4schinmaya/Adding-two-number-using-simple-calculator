const button = document.querySelector('button');

button.addEventListener('click',()=>{
    // Read the data
      // number 1
    const input1 = document.getElementById('first');
    const number1 = Number(input1.value);
      // number2
    const input2 = document.getElementById('second');
    const number2 = Number(input2.value);

    // for invalid input
    if(isNaN(number1) || isNaN(number2))
      return;

    // output the Result
    const result = number1+number2;
    const ans = document.getElementById('result');
    ans.textContent = "Result: "+result;

})

//BMI calculator
// Dhahej calculator
// Alimony Calculator
