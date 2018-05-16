/* Expands the side navigation and changes the background color to simulate
* opacity*/
function openNav() {
    document.getElementById("mobile-nav").style.width = "60vw";
    document.getElementById("mobile-overlay").style.display = "block";

}

/* Hides the side nav and returns the background color to white*/
function closeNav() {
    document.getElementById("mobile-nav").style.width = "0";
    document.getElementById("mobile-overlay").style.display = "none";

}

$(document).on('click', function (e) {
    if ($(e.target).closest("#mobile-nav").length === 0) {
        var openNav = ($("#mobile-nav").width() > 10);
        if (openNav){
            $("#mobile-nav").width(0);
            $("#mobile-overlay").css('display','none');

        }

    }
});