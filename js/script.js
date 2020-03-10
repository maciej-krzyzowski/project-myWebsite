const activatePage = () => {
    const links = document.querySelectorAll('.menu__link')

    for (let link of links) {

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
}

activatePage()