const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const INACTIVE = 'inactive'


const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle(INACTIVE)
}
menuEmail.addEventListener('click', toggleDesktopMenu)