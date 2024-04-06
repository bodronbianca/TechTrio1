import { handleInput } from "./handleInputname";
var inputField = document.getElementById('nume');
var submitbtn = document.getElementById('submitbutton');

let inputValue = '';

submitbtn.addEventListener('click',function(){
    inputValue = inputField.value;

    handleInputname(inputValue);
})