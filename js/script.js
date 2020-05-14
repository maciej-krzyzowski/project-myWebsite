const eventListener = () => {
    const menuLinks = document.querySelectorAll(".menu__link");
    const footerLinks = document.querySelectorAll(".footer__link--menu");
    const hamburger = document.querySelector(".hamburger");
    const menuList = document.querySelector(".menu__list");

    for (let link of menuLinks) {
        link.addEventListener("click", () => {
            const activeLink = document.querySelector(".activeLink");
            const activeSection = document.querySelector(".activeSection");
            const clickedLink = link.getAttribute("href").replace("#", "");
            const activateSection = document.querySelector("." + clickedLink);

            activeLink.classList.remove("activeLink");
            activeSection.classList.remove("activeSection");
            link.classList.add("activeLink");
            activateSection.classList.add("activeSection");

            if (window.innerWidth <= 992) {
                menuList.classList.remove("activeMenuList");
                hamburger.classList.remove("is-active");
            }
        });
    }

    for (let link of footerLinks) {
        link.addEventListener("click", () => {
            const activeSection = document.querySelector(".activeSection");
            const clickedLink = link.getAttribute("href").replace("#", "");
            const activateSection = document.querySelector("." + clickedLink);

            activeSection.classList.remove("activeSection");
            activateSection.classList.add("activeSection");
        });
    }

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("is-active");
        menuList.classList.toggle("activeMenuList");
    });
};

eventListener();
