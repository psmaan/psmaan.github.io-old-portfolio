function hideUIUX() {
    document.querySelector(".uiux").style.display = "none";
    document.querySelector(".websites").style.display = "flex";
}

function hideWebsites() {
    document.querySelector(".websites").style.display = "none";
    document.querySelector(".uiux").style.display = "grid";
    document.querySelector(".uiux").style.opacity = "100%";
}