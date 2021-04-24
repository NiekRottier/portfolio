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

console.log(window.location.pathname);

// Add events to all the projects
let projectPigeon = document.getElementById("projectPigeon")
projectPigeon.addEventListener("click", () => window.location.href = "./projects/projectPigeon.html")

let jsai = document.getElementById("jsai")
jsai.addEventListener("click", () => window.location.href = "./projects/jsai.html")

let reactNotes = document.getElementById("reactNotes")
reactNotes.addEventListener("click", () => window.location.href = "./projects/reactNotes.html")

let backendApi = document.getElementById("backendApi")
backendApi.addEventListener("click", () => window.location.href = "./projects/backendApi.html")

let laravelGallery = document.getElementById("laravelGallery")
laravelGallery.addEventListener("click", () => window.location.href = "./projects/laravelGallery.html")

let nieuwsradar = document.getElementById("nieuwsradar")
nieuwsradar.addEventListener("click", () => window.location.href = "./projects/nieuwsradar.html")