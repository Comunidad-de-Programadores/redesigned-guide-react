const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const INACTIVE = 'inactive'


const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle(INACTIVE)
}

const toggleMovileMenu = () => {
    mobileMenu.classList.toggle(INACTIVE)
}

const  toggleCartAside = () => {
    aside.classList.toggle(INACTIVE)
}



menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMovileMenu)
menuCartIcon.addEventListener('click', toggleCartAside)


