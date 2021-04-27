console.log("Start images.js")

let images = document.getElementsByClassName("imageInContainer")
let backgroundOverlay = document.getElementById("backgroundOverlay")

// These functions give the event to the open- and closeImage functions
function exeOpenImage(e){ openImage(e.target) }
function exeCloseImage(e){ closeImage(e.target) }

// Add eventlisteners to images
for(let image of images){
    console.log(image);
    image.addEventListener("click", exeOpenImage)
}

// Open enlarged image
function openImage(image) {
    image.classList.add("largeImage")
    backgroundOverlay.hidden = false
    image.removeEventListener("click", exeOpenImage)
    image.addEventListener("click", exeCloseImage)
}

// Close enlarged image
function closeImage(image) {
    image.classList.remove("largeImage")
    backgroundOverlay.hidden = true
    image.removeEventListener("click", exeCloseImage)
    image.addEventListener("click", exeOpenImage)
}