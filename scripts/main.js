var URL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders';
var FORMSELECTOR = '[data-coffee-order="form"]';

var COFFEESELECTOR = '[data-coffee-order="coffee"]';
var EMAILSELECTOR = '[data-email-input="email"]';
var SIZESELECTOR = '[data-size-selection="size"]';

var CARAMELFLAVORSHOTSELECTOR = '[data-flavor="caramel"]'
var ALMONDFLAVORSHOTSELECTOR = '[data-flavor="almond"]'
var MOCHAFLAVORSHOTSELECTOR = '[data-flavor="mocha"]'
var CAFFEINERATINGSELECTOR = '[data-caffeine="rating"]'

function storesValue (key, value) {
    localStorage.setItem(key, value);
}

function main (form) {
    form.on('submit', function (event){
        event.preventDefault();
        extractTextValue(COFFEESELECTOR);
        extractTextValue(EMAILSELECTOR);
        extractRadioValue();
        extractValue(CAFFEINERATINGSELECTOR);
    })
}

function extractTextValue(formField) {
    var $input = $(formField);
    var keyName = $input.attr('name');
    var value = $input.val(); 
    storesValue(keyName, value);
}
function extractRadioValue(formField) { //look up how to get value of radio button
    var $input = $(formField);
    var keyName = $input.attr('name');
    var selValue = $('input[name=size]:checked').val();
    storesValue(keyName, value);
} 

function extractDropValue(formField) { //look up how to get value of dropdown 
    var $input = $(formField);
    var keyName = $input.attr('name');
    // var value = $input.val(); 
    storesValue(keyName, value);
}
main($(FORMSELECTOR));
