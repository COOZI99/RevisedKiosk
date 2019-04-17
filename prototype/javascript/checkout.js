// Global structure to keep track of orders
var orders = {};


// Setting up the Document
document.addEventListener("DOMContentLoaded", function(event) {
    var order = localStorage.getItem("Order");
    console.log(order);
    if (order !== null) {
        orders = decodeOrder(order);
        displayOrders(orders, "orderSummary");
    }

    var tip1 = createTipListener(1);
    var tip2 = createTipListener(2);
    var tip3 = createTipListener(3);

    $.keypad.setDefaults({prompt: 'Please use the keypad'});
    $("#cstmtip").keypad();
});

// Shows which tip option has been selected
var createTipListener = function(tipNum) {
    var id = "tip" + tipNum;
    var _tip = document.getElementById(id);

    _tip.addEventListener('click', function() {
        if (_tip.style.backgroundColor !== "" && _tip.style.backgroundColor === "rgba(241, 244, 39, 0.6)") {
            _tip.style.backgroundColor = "rgba(241, 244, 39, 0.0)";
        }
        else {
            _tip.style.backgroundColor = "rgba(241, 244, 39, 0.6)";
            for (var i=1; i<=2; i++) {
                var other = (tipNum + i) % 3
                if (other === 0) {
                    other = 3;
                }
                var otherId = "tip" + other;
                var _otherTip = document.getElementById(otherId);
                _otherTip.style.backgroundColor = "rgba(241, 244, 39, 0.0)";
            }
        }
    });
}


// Creates an object containing order names mapped to their counts
var decodeOrder = function(orderSummary) {
    var summary = {};

    var orderSummary = orderSummary.split(",");
    console.log(orderSummary);
    for (var i=0; i<orderSummary.length; i++) {
        var order = orderSummary[i];

        order = order.split("-").join(" ");
        if (!(order in summary)) {
            summary[order] = 0;
        }
        summary[order] += 1;
    }
    return summary;
}

// Create the String to be stored in local storage given an object
// containing orders and order counts
var encodeOrder = function(orders) {
    var summary = "";

    for (order in orders) {
        if (order !== "") {
            var count = orders[order];
            for (var i=0; i<count; i++) {
                var name = order.replace(" ", "-");
                if (summary.length === 0) {
                    summary = order;
                }
                else {
                    summary += "," + order;
                }
            }
        }
    }

    return summary;
}

// Displaying the orders along the checkout summary
var displayOrders = function(orders, divElementId) {
    var _element = document.getElementById(divElementId);

    // Removing the previous orders
    while(_element.firstChild){
        _element.removeChild(_element.firstChild);
    }

    // Adds each order name, count, and cost to the display
    var i = 1;
    for (order in orders) {
        if (order.length > 0) {
            var newDiv = document.createElement('div');
            newDiv.className = "orders";
            newDiv.innerHTML = order + ", $$.$$ ," + orders[order];
            _element.appendChild(newDiv);
            // Creates a button that will remove the order item when clicked
            removeButton("remove" + i, order);
            i++;
        }
    }
}

// Removes the item from the order
var removeButton = function(divElementId, foodName) {
    var _element = document.getElementById(divElementId);
    _element.style.cursor = "pointer";
    var _fn = foodName;

    _element.addEventListener('click', function() {
        delete orders[_fn];
        // Stores the updated version of the order into local storage
        var storeOrder = encodeOrder(orders);
        localStorage.setItem("Order", storeOrder);
        displayOrders(orders, "orderSummary");
    });
}