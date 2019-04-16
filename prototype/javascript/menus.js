var menuItems  = {
    "dailySpecial": {
        name: "Daily Special",
        description: "A unique cuisine served by our finest chefs"
    }
};


// Setting up the Document
document.addEventListener("DOMContentLoaded", function(event) {
    // menuItem("cheeseBurger");
    // menuItem("deluxeBurger");

    displayWhichSideTab();
});


var menuItem = function(areaElementId) {
    var _element = document.getElementById(areaElementId);

    _element.addEventListener('click', function() {
        console.log("CLICK")
        var name = menuItems[divElementId].name;
        var description = menuItems[divElementId].description;

        localStorage.setItem("FoodName", name);
        localStorage.setItem("FoodDescription", description);

        document.location.href = "customizeBurger.html";
    });
}

// Highlights the current sidebar tab that the customer is on
var displayWhichSideTab  = function() {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    console.log(filename);

    if (filename.includes("specials")) {
        var _element = document.getElementById("sideTab1");
        _element.style.backgroundColor = "rgb(241, 244, 39, 0.6)";
        _element.style.display = "block";
    }
    else if(filename.includes("sides")) {
        var _element = document.getElementById("sideTab2");
        _element.style.backgroundColor = "rgb(241, 244, 39, 0.6)";
        _element.style.display = "block";
    }
    else if(filename.includes("lunch")) {
        var _element = document.getElementById("sideTab3");
        _element.style.backgroundColor = "rgb(241, 244, 39, 0.6)";
        _element.style.display = "block";
    }
    else if(filename.includes("dinner")) {
        var _element = document.getElementById("sideTab4");
        _element.style.backgroundColor = "rgb(241, 244, 39, 0.6)";
        _element.style.display = "block";
    }
    else if (filename.includes("dessert")) {
        var _element = document.getElementById("sideTab5");
        _element.style.backgroundColor = "rgb(241, 244, 39, 0.6)";
        _element.style.display = "block";
    }
    else if (filename.includes("beverage")) {
        var _element = document.getElementById("sideTab6");
        _element.style.backgroundColor = "rgb(241, 244, 39, 0.6)";
        _element.style.display = "block";
    }
}


var storeMenuItem = function(itemName) {
    var foodName = menuItems[itemName].name;
    var foodDescription = menuItems[itemName].description;

    localStorage.setItem("FoodName", foodName);
    localStorage.setItem("FoodDescription", foodDescription);

    document.location.href = "customization.html";
} 

