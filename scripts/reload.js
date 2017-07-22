window.onbeforeunload = function() {
    localStorage.setItem("coffee", coffee.value);
    localStorage.setItem("emailAddress", emailAddress.value);
    localStorage.setItem("size", size.value);
    localStorage.setItem("flavor", flavor.value);
    localStorage.setItem("strength", strength.value);
}