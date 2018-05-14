<?php
?>
<!--Traditional desktop navigation bar-->
<div class="container " id="nav-container">
    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Education</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact</a></li>
    </ul>


</div>
<!--Button opens the navigation bar when clicked-->
<div class="container float-right" id="mobile-nav-toggle-container">
    <button onclick="openNav()" type="button" ><i class="fas fa-bars"></i></button>
</div>
<!--Has the main contents of the side navigation bar-->
<div id="mobile-nav">
        <a href="#">Home</a>
        <a href="#">Education</a>
        <a href="#">Experience</a>
        <a href="#">Skills</a>
        <a href="#">Contact</a>
<!--    Button closes the navigation bar when click-->
        <button onclick="closeNav()" class="float-center" type="button" id="mobile-nav-close"><i class="fas fa-times fa-md"></i></button>
</div>
<div>

</div>