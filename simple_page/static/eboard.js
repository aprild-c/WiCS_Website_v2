function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("pageContent").style.display = "block";
}
window.onload = function() {
    let loader = setTimeout(showPage, 3000);

    // Setting up alternating colors in the #e-board_roster table
    let bigger_sections = document.getElementsByClassName("profile_bigger_section");
    for (let counter = 0; counter < bigger_sections.length; counter++){
        let eboard_roster_header = bigger_sections[counter].getElementsByTagName("h2")[0];
        let pronouns = bigger_sections[counter].getElementsByClassName("pronouns")[0];
        if (counter % 3 === 0) {
            eboard_roster_header.style.backgroundColor = "#f5dfeb";
            pronouns.style.backgroundColor = "#f5dfeb";
        } else if (counter % 3 === 1) {
            eboard_roster_header.style.backgroundColor = "#DCEBF1";
            pronouns.style.backgroundColor = "#DCEBF1";
        } else if (counter % 3 === 2) {
            eboard_roster_header.style.backgroundColor = "#EAE4F2";
            pronouns.style.backgroundColor = "#EAE4F2";
        }
    }

    // Setting up alternating colors in the #alumni_outreach_team table
    let alumni_outreach_team_members = document.getElementsByClassName("outreach_team_member");
    for (let counter = 0; counter < alumni_outreach_team_members.length; counter++){
        let alumni_outreach_team_header = alumni_outreach_team_members[counter].getElementsByTagName("h2")[0];
        let pronouns = alumni_outreach_team_members[counter].getElementsByClassName("pronouns")[0];
        if (counter % 3 === 0) {
            alumni_outreach_team_header.style.backgroundColor = "#EAE4F2";
            pronouns.style.backgroundColor = "#EAE4F2";
        } else if (counter % 3 === 1) {
            alumni_outreach_team_header.style.backgroundColor = "#f5dfeb";
            pronouns.style.backgroundColor = "#f5dfeb";
        } else {
            alumni_outreach_team_header.style.backgroundColor = "#DCEBF1";
            pronouns.style.backgroundColor = "#DCEBF1";
        }
    }
};