$(document).ready(function (){
    $(COFFEESELECTOR).val(localStorage.getItem('coffee'));
    $(EMAILSELECTOR).val(localStorage.getItem('emailAddress'));
    $(SIZESELECTOR).val([localStorage.getItem('size')]);
    $(FLAVORSHOTSELECTOR).parent().val([localStorage.getItem('flavor')]);  
    $(CAFFEINERATINGSELECTOR).val(localStorage.getItem('strength'));
    dataSaver();
})