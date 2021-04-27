// Open and close menu
let menu = document.getElementById("menu")
let menuButton = document.getElementById("menuButton")
let menuOverlay = document.getElementById("menuOverlay")

menuButton.addEventListener("click", openMenu)
menuOverlay.addEventListener("click", closeMenu)
document.addEventListener("scroll", closeMenu)

function openMenu() {
    menu.style.visibility = "visible"
    menu.style.opacity = 0.9

    menuOverlay.style.visibility = "visible"
    menuOverlay.style.opacity = 0.8
}

function closeMenu() {
    menu.style.visibility = "hidden"
    menu.style.opacity = 0

    menuOverlay.style.visibility = "hidden"
    menuOverlay.style.opacity = 0
}