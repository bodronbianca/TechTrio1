var textarea = document.getElementById("descriereInput");
var charCountSpan = document.getElementById("charCount");

textarea.addEventListener("input", function() {
    var text = textarea.value;

    charCountSpan.textContent = text.length;
});
export function sendTextLength(){
    return text.length;
}