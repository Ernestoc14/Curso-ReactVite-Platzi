import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()
export const ShoppingCartProvider = ({children}) => {
    const [itemsCounter, setItemsCounter] = useState(0)

    return(
        <ShoppingCartContext.Provider 
            value={{
                itemsCounter,
                setItemsCounter
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}