const hamburgerToggle = () => {
    const hamburgerButton = document.querySelector(".hamburger");
    const menuList = document.querySelector(".menu__list");
    hamburgerButton.classList.toggle("is-active");
    menuList.classList.toggle("active__menu");
};

const activeLink = (link) => {
    const activeLinks = document.querySelectorAll(".active__link");
    const isActiveSection = document.querySelector(".active__section");
    const clickedLink = link.getAttribute("href").replace("#", "");
    const menuLinks = document.querySelectorAll("#" + clickedLink);
    const activateSection = document.querySelector("." + clickedLink);

    for (let link of activeLinks) {
        link.classList.remove("active__link");
    }
    isActiveSection.classList.remove("active__section");

    for (let link of menuLinks) {
        link.classList.add("active__link");
    }
    activateSection.classList.add("active__section");
    setTimeout(function () {
        window.scroll(0, -100);
    }, 0);
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
