let toggleMenu = function() {
    let menu = document.querySelector(".main-nav");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

let hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", toggleMenu)