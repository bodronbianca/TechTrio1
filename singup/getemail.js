import { handleInputemail } from "../login/handleInputemail";

var inputField = document.getElementById('email');
var submitbtn = document.getElementById('submitbutton');

let inputValue = '';

submitbtn.addEventListener('click',function(){
    inputValue = inputField.value;
    handleInputemail(inputValue);
})