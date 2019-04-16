

// Setting up the Document
document.addEventListener("DOMContentLoaded", function(event) {
    var helpButton = callHelp("helpButton");
});

var callHelp = function(divElementId) {
    var _element = document.getElementById(divElementId);

    _element.addEventListener("click", function() {
        window.alert("Help is on the way!");
    });
}