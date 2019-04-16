var menuItems  = {
    "deluxeBurger": {
        name: "Deluxe Burger",
        description: "Ground beef, chuck patty, American cheese, dill pickles, red onions" +
        ", tomato, lettucs, ketchup, mayonnaise, and toasted sesame seed bun."
    },
    "cheeseBurger": {
        name: "Cheese Burger",
        description: "Ground beef, chuck patty, American cheese, dill pickles, red onions" +
        ", tomato, lettucs, ketchup, mayonnaise, and toasted sesame seed bun."
    }
};


// Setting up the Document
document.addEventListener("DOMContentLoaded", function(event) {
    //menuItem("cheeseBurger");
    //menuItem("deluxeBurger");

    displayWhichSideTab();
    // Showing the current checkout items
    var checkout = localStorage.getItem("Order");
    console.log(checkout);
});


// Stores the name and description and moves them to customization.html
var storeMenuItem = function(itemName) {
    var foodName = menuItems[itemName].name;
    var foodDescription = menuItems[itemName].description;

    localStorage.setItem("FoodName", foodName);
    localStorage.setItem("FoodDescription", foodDescription);

    document.location.href = "../customization.html";
} 


var displayWhichSideTab  = function() {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);

    if (filename.includes("burger")) {
        var _element = document.getElementById("sideTab1");
        _element.style.backgroundColor = "rgb(241, 244, 39, 0.6)";
        _element.style.display = "block";
    }
    else if(filename.includes("chicken")) {
        var _element = document.getElementById("sideTab2");
        _element.style.backgroundColor = "rgb(241, 244, 39, 0.6)";
        _element.style.display = "block";
    }
    else if(filename.includes("salad")) {
        var _element = document.getElementById("sideTab3");
        _element.style.backgroundColor = "rgb(241, 244, 39, 0.6)";
        _element.style.display = "block";
    }
}