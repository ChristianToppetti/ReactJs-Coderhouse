import {createContext, useState} from "react";

export const cartContext = createContext({ cart: [] });

export function CartContextProvider({ children }) {
    const [cartItemsList, setCartItemsList] = useState([])

    const getCartTotalPrice = () => {
        let totalPrice = 0
        cartItemsList.forEach(item => totalPrice += (parseFloat(item.product.price) * item.q))
        return totalPrice.toFixed(2)
    }

    const getItemsCount = () => {
        let count = 0
        cartItemsList.forEach(item => count += (1 * item.q))
        return count
    }
    
    const clearCart = () => setCartItemsList([])

    const removeProduct = (id) => {
        const newItemList = cartItemsList.map(item => item)
        const itemIndex = getProductIndex(id)

        if(itemIndex !== -1) {
            newItemList.splice(itemIndex, 1)
            setCartItemsList(newItemList)
        }
    }

    const addProduct = (product, q) => {
        const newItemList = cartItemsList.map(item => item)
        const itemIndex = getProductIndex(product.id)

        if(itemIndex !== -1) {
            const stock = newItemList[itemIndex].product.stock
            newItemList[itemIndex].q += q
            newItemList[itemIndex].q > stock && (newItemList[itemIndex].q = stock)
        }
        else {
            newItemList.push({product, q})
        }

        setCartItemsList(newItemList)
    }

    const getProductIndex = (id) => cartItemsList.findIndex(item => item.product.id === id)

    const productInCart = (id) => cartItemsList.some(item => item.product.id === id)

    return (
        <cartContext.Provider value={{cartItemsList, getCartTotalPrice, getItemsCount, clearCart, removeProduct, addProduct, getProductIndex, productInCart}} >
            {children}
        </ cartContext.Provider>
    )
}