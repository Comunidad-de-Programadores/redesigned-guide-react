const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shopping-cart-container')
const cardsContainer = document.querySelector('.cards-container')

const INACTIVE = 'inactive'


const toggleDesktopMenu = () => {
    const isAsideOpen = !shoppingCartContainer.classList.contains(INACTIVE)
    
    if(isAsideOpen){
      shoppingCartContainer.classList.add(INACTIVE)  
    }
    desktopMenu.classList.toggle(INACTIVE)
}

const toggleMovileMenu = () => {
    const isAsideOpen = !shoppingCartContainer.classList.contains(INACTIVE)
    
    if(isAsideOpen){
      shoppingCartContainer.classList.add(INACTIVE)  
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

    shoppingCartContainer.classList.toggle(INACTIVE)
}

const renderProducts = (productsList) => {
    for (product of productsList){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        const productName = document.createElement('p')
    
        productPrice.innerText = `$ ${product.price}`
        productName.innerText = product.name
    
        productInfoDiv.append(productPrice,productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', 'assets/icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.append(productInfoDiv, productInfoFigure)
        productCard.append(productImg,productInfo)
        cardsContainer.append(productCard)
    }
}

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMovileMenu)
menuCartIcon.addEventListener('click', toggleCartAside)

const productsList = []
productsList.push({
    name: 'Round shelf',
    price: 120,
    image: 'assets/round-shelf.webp'
})
productsList.push({
    name: 'Retro refrigerator',
    price: 240,
    image: 'assets/retro-refrigerator.png'
})
productsList.push({
    name: 'Round shelf',
    price: 120,
    image: 'assets/round-shelf.webp'
})
productsList.push({
    name: 'Retro refrigerator',
    price: 240,
    image: 'assets/retro-refrigerator.png'
})
productsList.push({
    name: 'Round shelf',
    price: 120,
    image: 'assets/round-shelf.webp'
})
productsList.push({
    name: 'Retro refrigerator',
    price: 240,
    image: 'assets/retro-refrigerator.png'
})


renderProducts(productsList)