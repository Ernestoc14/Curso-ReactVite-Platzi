import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()
export const ShoppingCartProvider = ({children}) => {
    const [itemsCounter, setItemsCounter] = useState(0)
    console.log(itemsCounter)

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