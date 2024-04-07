import { handleInputage } from "../login/handleInputage";

var inputField = document.getElementById('varsta');
var submitbtn = document.getElementById('submitbutton');

let inputValue = '';

submitbtn.addEventListener('click',function(){
    inputValue = inputField.value;
    handleInputage(inputValue);
})