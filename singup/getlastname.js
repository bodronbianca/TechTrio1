import { handleInputlastname } from "../login/handleInputlastname";

var inputField = document.getElementById('prenume');
var submitbtn = document.getElementById('submitbutton');

let inputValue = '';

submitbtn.addEventListener('click',function(){
    inputValue = inputField.value;

    handleInputlastname(inputValue);
})