// Add events to all the projects
let projects = ["projectPigeon", "jsai", "reactNotes", "backendApi", "laravelGallery", "nieuwsradar"]

projects.forEach(project => {
    document.getElementById(project).addEventListener("click", () => window.location.href = `./projects/${project}.html`)
});