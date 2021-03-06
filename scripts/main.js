var URL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders';
var FORMSELECTOR = '[data-coffee-order="form"]';

var COFFEESELECTOR = $('[data-coffee-order="coffee"]');
var EMAILSELECTOR = $('[data-email-input="email"]');
var SIZESELECTOR = $('input[data-size-selection="size"]');
var FLAVORSHOTSELECTOR = $('[data-select="flavor"]');
var CAFFEINERATINGSELECTOR = $('[data-caffeine="rating"]');

var myDataDict = {};

function storesValue (key, value) {
    localStorage.setItem(key, value);
    console.log(key);
}

function extractTextValue(formField) {
    var $input = $(formField);
    var keyName = $input.attr('name');
    var value = $input.val(); 
    storesValue(keyName, value);
}

function extractRadioValue(formField) { 
    var $input = $(formField);
    var keyName = $input.attr('name');
    var value;
    $input.each(function (i, e) {
        if (e.checked === true) {
            value = e.value;
        }
    }) 
    storesValue(keyName, value);
    console.log(keyName);
} 

function extractDropValue(formField) {
    var $input = $(formField);
    var keyName = $input.first().parent().attr('name')
    var value = $('#flavorShot :selected').val();
    storesValue(keyName, value);
}

function dataSaver() {
    myDataDict = {
        'coffee': COFFEESELECTOR.val(),
        'emailAddress': EMAILSELECTOR.val(),
        'size': SIZESELECTOR.val(),
        'flavor': FLAVORSHOTSELECTOR.val(),
        'strength': CAFFEINERATINGSELECTOR.val()
    }
}

function main (form) {
    form.on('submit', function (event){
        event.preventDefault();
        extractTextValue(COFFEESELECTOR);
        extractTextValue(EMAILSELECTOR);
        extractRadioValue(SIZESELECTOR);
        extractDropValue(FLAVORSHOTSELECTOR);
        extractTextValue(CAFFEINERATINGSELECTOR);
        dataSaver();
    })
}

main($(FORMSELECTOR));
