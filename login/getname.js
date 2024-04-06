const inputField = document.getElementById('inputField');
const submitButton = document.getElementById('submitButton');

let inputValue = '';

submitButton.addEventListener('click', function() {
    inputValue = inputField.value;

    handleInput()
});  
