import React, { createContext, useState } from 'react';

// Create the context
export const CartSumContext = createContext();

// Create a provider component
export const CartSumContextProvider = ({ children }) => {
    const [cartSum, setCartSum] = useState(calcSum());

    function calcSum() {
        const cartLs = JSON.parse(localStorage.getItem("cart")) || [];

        let sum = 0;
        cartLs.forEach(cartline => sum = sum + cartline.product.price * cartline.quantity);
        return sum.toFixed(2)
    }

    return (
        <CartSumContext.Provider value={{ cartSum, setCartSum }}>
            {children}
        </CartSumContext.Provider>
    );
};