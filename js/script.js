const activatePage = () => {
    const menuLinks = document.querySelectorAll('.menu__link')
    const footerLinks = document.querySelectorAll('.footer__link--menu')

    for (let link of menuLinks) {

        link.addEventListener('click', () => {
            const activeLink = document.querySelector('.activeLink')
            const activeSection = document.querySelector('.activeSection')
            const clickedLink = link.getAttribute('href').replace('#', '')
            const activateSection = document.querySelector('.' + clickedLink)

            activeLink.classList.remove('activeLink')
            activeSection.classList.remove('activeSection')

            link.classList.add('activeLink')
            activateSection.classList.add('activeSection')
        })
    }

    for (let link of footerLinks) {

        link.addEventListener('click', () => {
            const activeSection = document.querySelector('.activeSection')
            const clickedLink = link.getAttribute('href').replace('#', '')
            const activateSection = document.querySelector('.' + clickedLink)

            activeSection.classList.remove('activeSection')

            activateSection.classList.add('activeSection')
        })
    }
}

activatePage()

const hamburger = () => {
    const btnHamburger = document.querySelector('.hamburger')
    const menu = document.querySelector('.menu__list')

    btnHamburger.addEventListener('click', () => {
        console.log('dupa');
        btnHamburger.classList.toggle('is-active')
        menu.classList.toggle('activeMenuList')
    })
}

hamburger()