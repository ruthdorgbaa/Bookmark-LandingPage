const menu = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".mobile-nav");
const closeIcon = document.querySelector(".closeIcon");

let isVisible = false

function toggleMenu() {
    if (!isVisible) {
        menuIcon.style.cssText = "visibility: visible !important;";
        isVisible = true;
    }else{
        menuIcon.style.cssText = "visibility: hidden !important;";
        isVisible = false
    }
    
    console.log("here")
}
menu.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);












