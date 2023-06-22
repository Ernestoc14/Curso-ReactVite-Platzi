import { createContext, useState, useEffect } from "react"

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

    // Get Products from API
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState('')

    // Search Products
    const [searchByTitle, setSearchByTitle] = useState('')

    // Loading State for the API
    const [loading, setLoading] = useState(true)

    //Call to API 
	useEffect(() => {
		fetch('https://fakestoreapi.com/products/').then(response => response.json()).then(data => setItems(data))
	}, [])


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])

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
                items,
                setItems,
                filteredItems,
                setFilteredItems,
                searchByTitle,
                setSearchByTitle,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}