$('#gcf-design').gCalFlow({
    calid: 'amherst.edu_bvdeelhkm2tcad3bm031gd7s68@group.calendar.google.com',
    maxitem: 10,
    daterange_formatter: function(s, e, allday_p) {
        s.ampm = "am";
        e.ampm = "am";
        s.hours = s.getHours();
        s.minutes = ":" + s.getMinutes();
        e.hours = e.getHours();
        e.minutes = ":" + e.getMinutes();
        let months = ["Jan. ", "Feb. ", "Mar. ", "Apr. ", "May ", "Jun. ", "July ", "Aug. ", "Sep. ", "Oct. ", "Nov. ", "Dec. "];

        let dateString = months[s.getMonth()] + s.getDate();
        if (s.hours === 0 && e.hours === 0){
            dateString +=  " – " + months[e.getMonth()] + e.getDate();
            return dateString
        }
        if (s.hours > 12) {
            s.ampm = "pm";
            s.hours -= 12;
        }
        if (e.hours > 12) {
            e.ampm = "pm";
            e.hours -= 12;
        }
        if (s.minutes === ":0") {
            s.minutes += "0";
        }
        if (e.minutes === ":0") {
            e.minutes += "0";
        }

        dateString += " @" + s.hours + s.minutes + s.ampm + " – ";
        if (s.getDate() === e.getDate()) {
            dateString += e.hours + e.minutes + e.ampm;
        } else {
            dateString += months[e.getMonth()] + e.getDate() + " @" + e.hours + e.minutes + e.ampm;
        }
        return dateString;
    }
});
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("pageContent").style.display = "block";
    document.body.style.backgroundImage = "url(../static/calendar_background.png)";
    document.body.style.backgroundColor = "#dbeef6";
}
window.onload = function() {
    let loader = setTimeout(showPage, 3000);
    shortenDescriptions();
    var collapseLinks = document.getElementsByClassName("collapseLink");
    var i;

    for (i = 0; i < collapseLinks.length; i++) {
        collapseLinks[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var collapseContent = this.previousElementSibling.lastChild;
            if (collapseContent.style.display === "inline") {
                collapseContent.style.display = "none";
                collapseContent.previousElementSibling.innerHTML += " . . .";
                this.textContent = "See more";
            } else {
                collapseContent.style.display = "inline";
                collapseContent.previousElementSibling.innerHTML = collapseContent.previousElementSibling.innerHTML.slice(0,-6);
                this.textContent = "See less";
            }
        });
    }
};

function shortenDescriptions() {
    let descriptions = document.getElementsByClassName("gcf-item-description");
    for (let index = 0; index < descriptions.length; index++) {

        // Hide description block if there there is no event description
        if (descriptions[index].textContent === "No description available") {
            document.getElementsByClassName("gcf-item-body-block")[index].style.display="none";
        } else {
            let description = descriptions[index].textContent;
            let descriptionHTML = descriptions[index].innerHTML;

            // Make long descriptions collapsible
            if (description.length > 370) {
                let cutoffIndex = description.indexOf(" ", 370);
                descriptions[index].innerHTML = description.slice(0, cutoffIndex) + " . . .";
                document.getElementsByClassName("gcf-item-body-block")[index].innerHTML += "<h3 class='collapse'>" + description.slice(cutoffIndex + 1) + "</h3>";
            } else {
                descriptions[index].innerHTML = description;
                document.getElementsByClassName("gcf-item-body-block")[index].nextElementSibling.style.display = "none";
            }
        }
    }
    return false;
}



