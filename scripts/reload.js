// window.onbeforeunload = function() {
//     localStorage.setItem("coffee", coffee.value);
//     localStorage.setItem("emailAddress", emailAddress.value);
//     localStorage.setItem("size", size.value);
//     localStorage.setItem("flavor", flavor.value);
//     localStorage.setItem("strength", strength.value);
// }

$(document).ready(function (){
    $(COFFEESELECTOR).val(localStorage.getItem('coffee'));
    $(EMAILSELECTOR).val(localStorage.getItem('emailAddress'));
    $(SIZESELECTOR).val(localStorage.getItem('size'));
    $(FLAVORSHOTSELECTOR).val(localStorage.getItem('flavor'));
    $(CAFFEINERATINGSELECTOR).val(localStorage.getItem('strength'));
})