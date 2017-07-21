var $coffeeOrderSection = $('[data-coffee-order]');
var $coffeeOrderData =  $("#coffeeOrder");
var URL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders';
var FORMSELECTOR = '[data-coffee-order="form"]';
var COFFEESELECTOR = '[data-coffee-order="coffee"]';

function storesValue (key, value) {
    localStorage.setItem(key, value);
    // localStorage.getItem(key);
}




// $.get(URL, function (data) {
//  console.log(data);
// });

function main (form) {
    form.on('submit', function (event){
        event.preventDefault();
        // console.log($(COFFEESELECTOR).val());
        var $coffeeInput = $(COFFEESELECTOR);
        var keyName = $coffeeInput.attr('name');
        // console.log(keyName);
        var coffeeValue = $coffeeInput.val(); 
        // console.log(coffeeValue);
        storesValue(keyName, coffeeValue);
        // storesValue($coffeeOrderSection, $coffeeOrderData);
        // $.get(URL, storesValue);
    })
}
main($(FORMSELECTOR));
