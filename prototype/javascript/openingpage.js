
// Setting up the Document
document.addEventListener("DOMContentLoaded", function(event) {
    localStorage.clear();
    $.keypad.setDefaults({prompt: 'Please use the keypad'});
    $("#phnum").keypad();
    
    var phoneNum = storePhoneNum("plusnumpad", "phnum");
    localStorage.setItem("Model", ["hello", "world"]);
});

// Stores the phone number to be displayed later
var storePhoneNum = function(elementId, textElementId) {
    var _element = document.getElementById(elementId);

    var _handleStoreNum = function() {
        var _textElem = document.getElementById(textElementId);
        localStorage.setItem('PhNum', _textElem.value);
    }

    _element.addEventListener('click', _handleStoreNum);
}