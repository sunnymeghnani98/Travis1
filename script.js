const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addBtn = document.getElementById('addBtn');
const subBtn = document.getElementById('subBtn');
const result = document.getElementById('result');

addBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = 'Please enter valid numbers';
    } else {
        result.textContent = `Result: ${num1 + num2}`;
    }
});

subBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = 'Please enter valid numbers';
    } else {
        result.textContent = `Result: ${num1 - num2}`;
    }
});