const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const INACTIVE = 'inactive'


const toggleDesktopMenu = () => {
    const isAsideOpen = !aside.classList.contains(INACTIVE)
    
    if(isAsideOpen){
      aside.classList.add(INACTIVE)  
    }
    desktopMenu.classList.toggle(INACTIVE)
}

const toggleMovileMenu = () => {
    const isAsideOpen = !aside.classList.contains(INACTIVE)
    
    if(isAsideOpen){
      aside.classList.add(INACTIVE)  
    }
    mobileMenu.classList.toggle(INACTIVE)
}

const  toggleCartAside = () => {
    const isMobileMenuOpen = !mobileMenu.classList.contains(INACTIVE)
    const isDesktopMenuOpen = !desktopMenu.classList.contains(INACTIVE)
    
    if(isMobileMenuOpen) {
        mobileMenu.classList.add(INACTIVE)
    }

    if(isDesktopMenuOpen) {
        desktopMenu.classList.add(INACTIVE)
    }

    aside.classList.toggle(INACTIVE)
}



menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMovileMenu)
menuCartIcon.addEventListener('click', toggleCartAside)


