var URL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders';

var myData = {
    "coffee": 'magicalCoffeeElixir',
    "emailAddress": 'willTheThrill@willsWorld.com'
}


$.get(URL, function(data) {
    console.log(data);
})

// function storeData (orders) {
//     localStorage.setItem('coffeeOrders', JSON.stringify(orders));
// }

// $.get(URL, storeData);

$.post(URL, myData, function(response) {
    console.log(response);
})

// $.get(URL, myData);