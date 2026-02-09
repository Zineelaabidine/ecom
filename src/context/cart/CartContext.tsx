import { useState, createContext, type ReactNode, useEffect } from "react";

interface CartItem {
    id: number;
    thumbnail: string;
    name: string;
    price: number;
    quantity: number;
}
interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    increaseQuantity: (itemId: number) => void;
    decreaseQuantity: (itemId: number) => void;
    removeFromCart: (itemId: number) => void;
    clearCart: () => void;
    isItemInCart: (itemId: number) => boolean;
    subtotal: number
}
export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [subtotal, setSubtotal] = useState<number>(0);

    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const items = localStorage.getItem('cartItems');
        if (!items) {
            return []
        }
        if (items) {
            return JSON.parse(items);
        }
        return [];
    });

    useEffect(() => {
        const total = cartItems.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);

        setSubtotal(total);
    }, [cartItems]);

    // add to cart function
    const addToCart = (item: CartItem) => {
        const itemExists = cartItems.some((cartItem: CartItem) => cartItem.id === item.id)
        if (itemExists) {
            console.log("item already exists")
            return
        }
        const updatedCartItems = [...cartItems, item];
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    }
    // increase quantity in cart
    const increaseQuantity = (itemId: number) => {
        const updatedCartItems = cartItems.map((cartItem: CartItem) => {
            if (cartItem.id === itemId) {
                return { ...cartItem, quantity: cartItem.quantity + 1 }
            }
            return cartItem
        })
        setCartItems(updatedCartItems)
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    }
    // decrease quantity in cart
    const decreaseQuantity = (itemId: number) => {
        const updatedCartItems = cartItems.map((cartItem: CartItem) => {
            if (cartItem.id === itemId) {
                if (cartItem.quantity <= 1) {
                    return cartItem
                }
                return { ...cartItem, quantity: cartItem.quantity - 1 }
            }
            return cartItem
        })
        setCartItems(updatedCartItems)
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    }


    //remove from cart
    const removeFromCart = (itemId: number) => {
        const updatedCartItems = cartItems.filter((cartItem: CartItem) => cartItem.id !== itemId)
        setCartItems(updatedCartItems)
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    }
    // clear cart
    const clearCart = () => {
        localStorage.removeItem('cartItems')
        setCartItems([])
    }
    const isItemInCart = (itemId: number) => {
        return cartItems.some((cartItem: CartItem) => cartItem.id === itemId)
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            removeFromCart,
            clearCart,
            isItemInCart,
            subtotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

