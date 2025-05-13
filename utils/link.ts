interface NavBarLinks {
    name: string;
    href: string
}


export const dropDownMenuLinks: NavBarLinks[] = [
    { href: '/', name: "Home" },
    { href: '/about', name: "About" },
    { href: '/products', name: "Product" },
    { href: '/favorites', name: "Favorites" },
    { href: '/cart', name: "Cart" },
    { href: '/order', name: "Order" },
]

export const links = {
    Home: { href: '/', name: "Home" },
    About: { href: '/about', name: "About" },
    Cart: { href: '/cart', name: "Cart" },
    PRODUCTS: { href: '/products', name: "Products" },
} as const 