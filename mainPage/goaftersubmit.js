import {sendTextLength} from "./charcounter";

var submitbtn = document.getElementById('submitButton');
var isName = function(){
    var char = 0;
    var email = document.getElementById('emailInput');
    email.addEventListener('input',function(){
        var text = email.value;
        char = text.length;
    });
    if(char == 0){
        return false;
    }
    return true;
}
var isEmail = function(){
    var name = document.getElementById('siteNameInput');
    var char = 0;
    name.addEventListener('input',function(){
        var text = name.value;

        char = text.length;
    });
    if(char == 0){
        return false;
    }
    return true;
}
var charBelow256 = function(){
    var length = sendTextLength;
    if(length > 256){
        return false;
    }
    return true;
}

if(isEmail() && charBelow256() && isName){
    submitbtn.style.display = "block";
}