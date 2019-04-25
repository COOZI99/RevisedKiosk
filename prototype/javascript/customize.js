
// Setting up the Document
document.addEventListener("DOMContentLoaded", function(event) {
    var name = localStorage.getItem("FoodName");
    var description = localStorage.getItem("FoodDescription");
    if (description !== null && name !== null) {
        writeNameAndDescription(name, description);
    }
    storeMenuItem("finalize");
    var isCustomizable = localStorage.getItem("isCustomizable");
    displayCustomization(isCustomizable);
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

        var list = currentList.split(",");
        var listSize = list.length;
        for (var i=0; i<list.length; i++) {
            if (list[i].length === 0) {
                listSize--;
            }
        }
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
	var _ketchupMeter = document.getElementById("ketchupMeter");
	_ketchupMeter.addEventListener("click", changeGauge);
	var _mayoMeter = document.getElementById("mayoMeter");
	_mayoMeter.addEventListener("click", changeGauge);
	var _srirachaMeter = document.getElementById("srirachaMeter");
	_srirachaMeter.addEventListener("click", changeGauge);

    _name.innerHTML = name;
    _description.innerHTML = description;
    _name.style.display = "block";
    _description.style.display = "block";
	
		
}

var displayCustomization = function(isCustomizable) {
    if (isCustomizable === "False") {
        var _element = document.getElementById("blockCustomize");
        _element.style.display = "block";
    }
}

var changeGauge = function() {
	var src = this.src.slice(-10);
	
	if(src == "gauge1.png") {
		this.src = "images\\Pm6Redesign\\gauge2.png";
	} else if (src == "gauge2.png") {
		this.src = "images\\Pm6Redesign\\gauge3.png";
	} else if (src == "gauge3.png") {
		this.src = "images\\Pm6Redesign\\gauge1.png";
	} 
}