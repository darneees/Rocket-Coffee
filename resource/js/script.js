document.addEventListener("DOMContentLoaded", function() {
    const openMobile = document.getElementById("menu-mobile");
    const menuContent = document.querySelector(".nav-menu-mobile");

    openMobile.addEventListener("click", function() {
        menuContent.classList.toggle("active");
    });
});