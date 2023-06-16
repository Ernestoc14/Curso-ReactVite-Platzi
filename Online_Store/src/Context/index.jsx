import { createContext, useEffect, useState } from "react"

export const ShoppingCartContext = createContext()
export const ShoppingCartProvider = ({children}) => {


    return(
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