console.log("Hello World!");

// Add event to menu button
let menuButton = document.getElementById("menuButton")
menuButton.addEventListener("click", toggleMenu)

// Hide or show menu depending on state
function toggleMenu() {
    let menu = document.getElementById("menu")

    if(menu.style.visibility == "hidden"){ 
        menu.style.visibility = "visible"
        menu.style.opacity = 0.9
    }
    else {
        menu.style.visibility = "hidden"
        menu.style.opacity = 0
    }
}