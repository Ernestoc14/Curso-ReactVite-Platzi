import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()
export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart Items Counter
    const [itemsCounter, setItemsCounter] = useState(0)
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false)

    // Product Details Window Open/Close
    const openProductDetails = () => setIsProductDetailsOpen(true)
    const closeProductDetails = () => setIsProductDetailsOpen(false)

    // Product Details Show Card 
    const [productToShow, setProductToShow] = useState({})

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
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}