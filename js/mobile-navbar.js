/* Expands the side navigation and changes the background color to simulate
* opacity*/
function openNav() {
    document.getElementById("mobile-nav").style.width = "60vw";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Hides the side nav and returns the background color to white*/
function closeNav() {
    document.getElementById("mobile-nav").style.width = "0";
    document.body.style.backgroundColor = "white";

}

$(document).on('click', function (e) {
    if ($(e.target).closest("#mobile-nav").length === 0) {
        var openNav = ($("#mobile-nav").width() > 10);
        if (openNav){
            $("#mobile-nav").width(0);
            $('body').css('background-color','white');
        }

    }
});