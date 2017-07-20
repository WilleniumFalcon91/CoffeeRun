var $coffeeOrderSection = $('[data-coffee-order]');
var $coffeeOrderData =  $("#coffeeOrder");

function storesValue (section, data) {
    localStorage.setItem(section, data);
    localStorage.getItem(section);
}

formSection($coffeeOrderSection, $coffeeOrderData);

function main (form) {
    form.on('submit', function (event){
        event.preventDefault();
        console.log(form);
    })
}
main();

