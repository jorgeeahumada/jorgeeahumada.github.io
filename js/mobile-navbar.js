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