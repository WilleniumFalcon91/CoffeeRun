
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
    return $.get(URL);
}

function sendDataToServer() {
    return $.post(URL, myDataDict);
}

function deleteOrder(email) {
  return $.ajax({
    url: URL + '/' + email,
    method: 'DELETE'
  });
}