
// Setting up the Document
document.addEventListener("DOMContentLoaded", function(event) {
    var phoneDive = phoneDiv("phoneNum");
    var phoneButton = textReceipt("phone");
    var emailButton = emailReceipt("email");
    var printButton = printReceipt("print");
});


var phoneDiv = function(divElementId) {
    var _element = document.getElementById(divElementId);

    var phoneNum = localStorage.getItem("PhNum");

    if (phoneNum !== null) {
        _element.innerHTML = phoneNum;
        _element.style.display = "block";
    }
}

var textReceipt = function(divElementId) {
	 var _element = document.getElementById(divElementId);

    _element.addEventListener("click", function() {
        window.alert("A text has been sent with a link to your receipt. Thank you!");
    });
}

var emailReceipt = function(divElementId) {
	 var _element = document.getElementById(divElementId);

    _element.addEventListener("click", function() {
        window.alert("An email has been sent with a link to your receipt. Thank you!");
    });
}

var printReceipt = function(divElementId) {
	 var _element = document.getElementById(divElementId);

    _element.addEventListener("click", function() {
        window.alert("Your receipt is being printed; a waiter will bring it to you shortly. Thank you!");
    });
}
