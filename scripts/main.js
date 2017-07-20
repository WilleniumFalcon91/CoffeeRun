var $submit = $('[data-coffee-order]');
$submit.on('click', function (event){
    event.preventDefault();
    console.log($order.val());
})

var $order =  $("#coffeeOrder");
