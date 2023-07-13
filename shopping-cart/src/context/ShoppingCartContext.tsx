import { useState, useContext, createContext, ReactNode } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number,
    quantity: number
}


type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
     getItemQuantity: (id: number) => number
     increaseCartQuantity: (id: number) => void
     decreaseCartQuantity: (id: number) => void
     removeFormCart: (id: number) => void
    cartQuantiry: number
    cartItems: CartItem[]
}


const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart(){
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const openCart = () => {
        setIsOpen(true)
    }

    const closeCart = () => {
        setIsOpen(false)
    }

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id: number){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null){
                return [...cartItems, {id, quantity: 1}]
            }else{
                return currItems.map(item=>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1){
                return currItems.filter(item => item.id !== id)
            }else{
                return currItems.map(item=>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number){
        setCartItems(currItems=>{
            return currItems.filter(item=>item.id !== id)
        })
    }

    const cartQuantity = cartItems.reduce((quantity, item)=> item.quantity+ quantity, 0);



    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity, 
            increaseCartQuantity, 
            decreaseCartQuantity,
            removeFromCart,
            cartItems,
            cartQuantity,
            openCart,
            closeCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}