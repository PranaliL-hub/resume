function openTab(event, tabName) {
    let i, tabContent, tabLinks;

    // Hide all tab contents
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove active class from all buttons
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the selected tab and set active class on the button
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Set default tab to be visible
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tab-content")[0].style.display = "block";
});