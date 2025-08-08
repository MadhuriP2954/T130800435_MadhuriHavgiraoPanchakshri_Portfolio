let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

function operateMenu(pixel) {
    let sideMenu = document.getElementById("sidemenu");
    sideMenu.style.right = pixel + "px";
}

// Optional: Automatically close the menu on nav click for mobile UX
let navLinks = document.querySelectorAll("#sidemenu a");
navLinks.forEach(link => {
    link.addEventListener("click", () => operateMenu(-200));
});
