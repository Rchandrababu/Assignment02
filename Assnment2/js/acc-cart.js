function myFunction() {
    document.getElementById("myAcc").classList.toggle("show");
}
function myFunction1() {
    document.getElementById("mycart").classList.toggle("show");
}


window.onclick = function (event) {
    if (!event.target.matches('.Accbtn')) {

        var dropdowns = document.getElementsByClassName("Accdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
