function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("pageContent").style.display = "block";
}
window.onload = function () {
    setTimeout(showPage, 3000);
};