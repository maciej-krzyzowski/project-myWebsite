const hamburgerToggle = () => {
    const hamburgerButton = document.querySelector(".hamburger");
    const menuList = document.querySelector(".menu__list");
    hamburgerButton.classList.toggle("is-active");
    menuList.classList.toggle("activeMenuList");
};

const activeLink = (link) => {
    const activeLinks = document.querySelectorAll(".activeLink");
    const isActiveSection = document.querySelector(".activeSection");
    const clickedLink = link.getAttribute("href").replace("#", "");
    const menuLinks = document.querySelectorAll("#" + clickedLink);
    const activateSection = document.querySelector("." + clickedLink);

    for (let link of activeLinks) {
        link.classList.remove("activeLink");
    }
    isActiveSection.classList.remove("activeSection");

    for (let link of menuLinks) {
        link.classList.add("activeLink");
    }
    activateSection.classList.add("activeSection");
};

const eventListener = () => {
    const hamburgerButton = document.querySelector(".hamburger");
    const navigationLinks = document.querySelectorAll(".menu__link");
    const footerLinks = document.querySelectorAll(".footer__link--menu");

    hamburgerButton.addEventListener("click", () => {
        hamburgerToggle();
    });

    for (let navLink of navigationLinks) {
        navLink.addEventListener("click", () => {
            activeLink(navLink);

            if (window.innerWidth <= 992) {
                hamburgerToggle();
            }
        });
    }

    for (let footerLink of footerLinks) {
        footerLink.addEventListener("click", () => {
            activeLink(footerLink);
        });
    }
};

eventListener();
