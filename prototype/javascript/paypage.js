
// Setting up the Document
document.addEventListener("DOMContentLoaded", function(event) {
    var phoneDive = phoneDiv("phoneNum");
});


var phoneDiv = function(divElementId) {
    var _element = document.getElementById(divElementId);

    var phoneNum = localStorage.getItem("PhNum");

    if (phoneNum !== null) {
        _element.innerHTML = phoneNum;
        _element.style.display = "block";
    }
}