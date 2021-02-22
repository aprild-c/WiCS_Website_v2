function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("pageContent").style.display = "block";
    document.body.style.backgroundImage = "url(../static/pink_speckles.png)";
}
window.onload = function() {
    let loader = setTimeout(showPage, 3000);
    supportingTextAction();
};


function supportingTextAction() {
    var headers = document.getElementsByClassName("header");
    var colors = ["#eae4f2", "#dbeef6"];
    var text=[
        "<h3>There is a severe lack of womxn’s representation in STEM fields, especially in tech. In the US, womxn only comprise 18% of the degrees earned in computer science; men comprise the remaining 82%. By missing one-half of the population, companies lose the potential for groundbreaking, out-of-the-box innovations. Moreover, certain issues are not seen, let alone solved. (For example, Apple’s Health app didn’t have the ability to track menstruation for an entire year!)" +
        "<br><br>The lack of gender diversity in the workplace—and thus in products—begins in the classroom. Most colleges boast a 50-50 ratio in the overall student demographic, and introductory courses for computer science commonly reflect this even ratio. However, it becomes troublingly skewed in higher-level courses. This low retention rate can be attributed to multiple reasons, including a lack of womxn role models in technology, a confidence gap between genders, and gender stereotypes (such as the male geek-programmer). The low-retention-rate phenomenon is so prevalent that it has been coined the \“leaky pipeline.\” "+
        "<br><br>Evidently, womxn in tech need to be supported, and WiCS serves to do so at the root: college.<br><br>" +
        "<span id=\"citations\">" +
        "<a href=\"https://www.techrepublic.com/article/the-state-of-women-in-computer-science-an-investigative-report/\">TechRepublic: The State of Women in Computer Science</a><br>" +
        "<a href=\"https://www.npr.org/sections/alltechconsidered/2016/12/21/505864391/why-arent-there-more-women-in-tech-a-tour-of-silicon-valleys-leaky-pipeline\">NPR: Why Aren’t There More Women in Tech?</a><br>" +
        "<a href=\"https://www.theverge.com/2014/9/25/6844021/apple-promised-an-expansive-health-app-so-why-cant-i-track\">Verge: Apple promised an expansive health app, so why can’t I track menstruation?</a>" +
        "</span></h3>",

        "<h3>Language is the essential scaffolding of our individual and collective humanness, and as such the words we use should reflect an approach towards inclusivity and respect. We have chosen to use the term ‘womxn’ in place of ‘women’ for multiple reasons: One, <b>it establishes women as an identity separate from men</b>. Just as patriarchal conceptions of gender have long allocated womxn to a secondary role, the word ‘women’ is an extension of ‘men’ and thus it roots such beliefs within the very language we use to conduct our human activities. Two, ‘womxn’ is more than just linguistic emancipation; <b>it intends to capture the spectrum of non-cisgender identities, in line with the beliefs of intersectional feminism</b>. Quoted from Olivia Romero, co-founder of Pikes Peak Womxn for Liberation, “The spelling of womxn is meant to show inclusion of trans, nonbinary, womxn of color, womxn with disabilities, and all other marginalized genders.\"" +
        "<br><br>We at the Womxn in Computer Science Club will use this spelling to divorce our ideals from those of exclusionary feminism, and to support the connection of all womxn who may choose to love computer science.\n" +
        "<br><br><span id=\"citations\">" +
        "<a href='https://www.shethepeople.tv/home-top-video/use-word-womxn-women/'>SheThePeople: Why We Should Use The Word Womxn And Not Women" +
        "</h3>"];


    // darkens unopened (right) tab when hovered over before any tab is clicked on
    headers[1].onmouseover = function() {headers[1].style.filter = "brightness(95%)";};
    headers[1].onmouseout = function() {headers[1].style.filter = "brightness(100%)";};

    // iterates through tabs
    for (let i = 0; i <2 ; i++) {
        headers[i].onclick = function() {
            // changes the text background color when a tab is clicked
            document.getElementById("supportingText").style.backgroundColor=colors[i];

            // darkens unopened tab when hovered over after a tab has been clicked
            headers[i].style.filter = "brightness(100%)";
            headers[i].onmouseover = function() {headers[i].style.filter = "brightness(100%)";};
            headers[(i + 1) % 2].onmouseover = function() {headers[(i + 1) % 2].style.filter = "brightness(95%)";};
            headers[(i + 1) % 2].onmouseout = function() {headers[(i + 1) % 2].style.filter = "brightness(100%)";};

            document.getElementById("supportingText").innerHTML=text[i];
            document.getElementById("supportingText").style.height = divHeight + "px";
            // document.getElementById("supportingText").style.height = "600px";
            return false;
        }
    }
}