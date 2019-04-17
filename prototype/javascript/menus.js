var menuItems  = {
    // Regular Appetizers Menu
    "beefSkewers": {
        name: "Beef Skewers",
        description: "Beef, Stick"
    },
    "veggiePlatter": {
        name: "Veggie Platter",
        description: "Carrots, Broccoli, Cucumbers, Celery"
    }, 
    "spnchNrtichk": {
        name: "Spinach and Artichoke Dip",
        description: "Spinach, Artichokes, and Cheese. Served with a side of chips."
    },
    "nchsNchps": {
        name: "Nachos",
        description: "Melted American Cheese and Chips"
    },
    "basilFries": {
        name: "Basil Fries",
        description: "Basil, fried to a crisp"
    },
    "shrmpCocktail": {
        name: "Shrimp Cocktail",
        description: "Shrimp, Alcohol, Lemon"
    },
    // Regular Burger Menu1
    "deluxeBurger": {
        name: "Deluxe Burger",
        description: "Two Hamburger Patties, Lettuce, Tomato, Onions, Pickles, and Olives. All served on two Sesame Seed buns."
    },
    "cheeseBurger": {
        name: "Cheese Burger",
        description: "One Hamburger Patty and Melted American Cheese. All served on two Sesame Seed buns."
    },
    "grlchknBurger": {
        name: "Grilled Chicken Burger",
        description: "One Grilled Chicked Patty, Lettuce, Tomatos, and Pickles. All served on two Sesame Seed buns."
    },
    "baconBurger": {
        name: "Bacon Burger",
        description: "One Hamburger Patty, Three Strips of Bacon, Mushrooms, and melted American Cheese. All served on two Sesame Seed buns."
    },
    "stfedBBQBurger": {
        name: "Stuffed BBQ Burger",
        description: "One Hamburger Patty covered in Barbeque Sauce with Onions. All served on two Sesame Seed buns."
    },
    "smashBurger": {
        name: "Smash Burger",
        description: "One Hamburger, smashed into little bits. Served in along with a pile of Sesame Seed bun chunks."
    },
    // Regular Burger Menu2
    "chknSndwchCmb": {
        name: "Chicken Sandwich Combo",
        description: "One Grilled Chicked Patty, Lettuce, Tomatos, and Pickles. All served on two Sesame Seed buns with a fried and a drink."
    },
    "regBurgMl": {
        name: "Regular Burger Meal",
        description: ""
    },
    "vegDDlx": {
        name: "Veggie Delight Deluxe",
        description: ""
    },
    "burgDogMl": {
        name: "Burger Dog Meal",
        description: ""
    },
    "dlxBurgTwr": {
        name: "Deluxe Burger Tower",
        description: ""
    },
    "grassfedburg": {
        name: "Grass Fed Burger",
        description: ""
    },
    // Regular Beverage Menu
    "water": {
        name: "Water",
        description: ""
    },
    "sprite": {
        name: "Sprite",
        description: ""
    },
    "OJ": {
        name: "Orange Juice",
        description: ""
    },
    "beer": {
        name: "Beer",
        description: ""
    },
    "redWine": {
        name: "Red Wine",
        description: ""
    },
    "coconut": {
        name: "Coconut",
        description: ""
    }
};

var filename = "";

// Setting up the Document
document.addEventListener("DOMContentLoaded", function(event) {
    // Adds Event Listeners to each displayed menu item for the given menu
    for (var i=1; i<=6; i++) {
        var divId = "item" + i;
        if (document.getElementById(divId) !== null) {
            storeMenuItem(divId);
        }
    }

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
    console.log(url);
    filename = url.substring(url.lastIndexOf('/')+1);

    console.log(filename);

    if (filename.includes("sides") || filename.includes("Sides")) {
        var _element = document.getElementById("sideTab1");
        _element.style.backgroundColor = "rgb(241, 244, 39, 0.6)";
        _element.style.display = "block";
    }
    else if(filename.includes("burger") || filename.includes("Burger")) {
        var _element = document.getElementById("sideTab2");
        _element.style.backgroundColor = "rgb(241, 244, 39, 0.6)";
        _element.style.display = "block";
    }
    else if(filename.includes("beverage") || filename.includes("Bev")) {
        var _element = document.getElementById("sideTab3");
        _element.style.backgroundColor = "rgb(241, 244, 39, 0.6)";
        _element.style.display = "block";
    }
}


var storeMenuItem = function(divElementId) {
    var _element = document.getElementById(divElementId);

    _element.addEventListener('click', function() {
        var itemName = _element.firstElementChild.id;

        var foodName = menuItems[itemName].name;
        var foodDescription = menuItems[itemName].description;

        localStorage.setItem("FoodName", foodName);
        localStorage.setItem("FoodDescription", foodDescription);

        if (filename.includes("Burger") || filename.includes("Bev") ||
        filename.includes("Sides")) {
            document.location.href = "../customization.html";
        }
        else {
            document.location.href = "customization.html";
        }
    });
}

