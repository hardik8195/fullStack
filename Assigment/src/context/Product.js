import {createContext, useContext} from "react"

export const ProductContext = createContext({
    items: []
})


export const useProduct = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ProductContext.Provider