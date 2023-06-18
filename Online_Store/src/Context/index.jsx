import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()
export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart Items Counter
    const [itemsCounter, setItemsCounter] = useState(0)

    // Product Details Window Open/Close
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false)
    const openProductDetails = () => setIsProductDetailsOpen(true)
    const closeProductDetails = () => setIsProductDetailsOpen(false)

    // Product Details Window Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenu] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false)

    // Product Details Show Card 
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart Context to add products to the cart
    const [shoppingCart, setShoppingCart] = useState([])

    // My orders 
    const [myOrders, setMyOrders] = useState([])

    return (
        <ShoppingCartContext.Provider
            value={{
                itemsCounter,
                setItemsCounter,
                openProductDetails,
                closeProductDetails,
                setIsProductDetailsOpen,
                isProductDetailsOpen,
                productToShow,
                setProductToShow,
                shoppingCart,
                setShoppingCart,
                isCheckoutSideMenuOpen,
                setIsCheckoutSideMenu,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                myOrders,
                setMyOrders,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}