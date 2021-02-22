function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("pageContent").style.display = "block";
    document.body.style.backgroundImage = "url('../static/contact_graphics.png'), url('../static/contact_background.png')";
}
window.onload = function() {
    let loader = setTimeout(showPage, 3000);
};