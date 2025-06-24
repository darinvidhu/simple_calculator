function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator')?.value;
    let result;

    if (isNaN(num1)|| isNaN(num2)){
        result = "Enter a valid number";
    }
    else {
        switch (operator) {
            case '+' :
                result = num1 + num2;
                break;
        
            case '-':
                result = num1 - num2;
                break;
           
            case 'x' :
                result = num1 * num2;
                break;

            case '/' :
                if (num2 === 0 ){
                    result = "cannot divide by zero";
                }
                else {
                    result = num1/num2;
                }
                break;

            default :
                result = "Invalid operator";
        }
    }
    document.getElementById('result').textContent = "" +result;
}