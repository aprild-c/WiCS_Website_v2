function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("pageContent").style.display = "block";
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (vw > 1150) {
        document.body.style.backgroundImage = "url('../static/alumni_speaker_series_header.png')";
    }
}
window.onload = function() {
    let loader = setTimeout(showPage, 3000);
};