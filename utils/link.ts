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
    { href: '/admin/sales', name: "Dashboard" },
]

export const links = {
    Home: { href: '/', name: "Home" },
    About: { href: '/about', name: "About" },
    Cart: { href: '/cart', name: "Cart" },
    PRODUCTS: { href: '/products', name: "Products" },
    AdminProducts: { href: '/admin/products', name: "Products" },
} as const 

export const adminLinks:NavBarLinks[]=[
    { href: '/admin/sales', name: "sales" },
    { href: '/admin/products', name: "my product" },
    { href: '/admin/products/create', name: "create product" },
]