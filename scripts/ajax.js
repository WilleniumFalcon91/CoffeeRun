var URL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders';

var myData = {
    "coffee": 'magicalCoffeeElixir',
    "emailAddress": 'willTheThrill@willsWorld.com'
}

$.get(URL, function(data) {
    console.log(data);
})

$.post(URL, myData, function(response) {
    console.log(response);
})

function getServerData() {
    $.get(URL, function(data) {
    return data;
})
}

function sendDataToServer() {
    $.post(URL, myDataDict, function(response) {
    return response;
})
}