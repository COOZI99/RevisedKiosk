
// Setting up the Document
document.addEventListener("DOMContentLoaded", function(event) {
    var name = localStorage.getItem("FoodName");
    var description = localStorage.getItem("FoodDescription");
    if (description !== null && name !== null) {
        writeNameAndDescription(name, description);
    }
    storeMenuItem("finalize");
});

// Stores the menuItem in the order if there is still room in the cart
var storeMenuItem = function(divElementId) {
    _element = document.getElementById(divElementId);

    _element.addEventListener('click', function() {
        var currentList = localStorage.getItem("Order");
        var value = localStorage.getItem("FoodName");
        value = value.replace(" ", "-");

        if (currentList === null) {
            currentList = value;
        }
        else {
            currentList += "," + value;
        }

        var listSize = currentList.split(",").length;
        if (listSize > 4) {
            window.alert("Sorry, this Kiosk is for quick orders. You may only select up to 4 items");
            return;
        }

        localStorage.setItem("Order", currentList);
        console.log("Order Added!: " + currentList);
        document.location.href = "sidesMenu.html";
    });
}

// Writes the unique name and description for the burger
var writeNameAndDescription = function(name, description) {
    var _name = document.getElementById("foodName");
    var _description = document.getElementById("foodDescription");

    _name.innerHTML = name;
    _description.innerHTML = description;
    _name.style.display = "block";
    _description.style.display = "block";
}