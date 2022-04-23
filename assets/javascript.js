const toggleButton = document.getElementsByClassName('menu_button')[0]
const navbarLinks = document.getElementsByClassName('navbar_links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})