import {sendTextLength} from "./charcounter";

var state = true;
var email = document.getElementById('emailInput');
var name = document.getElementById('siteNameInput');
var isName = function(){

}
var isEmail = function(){

}
var charBelow256 = function(){
    var length = sendTextLength;
    if(length > 256){
        state = false;
    }
}