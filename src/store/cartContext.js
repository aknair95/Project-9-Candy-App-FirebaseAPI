import React from "react";

const CartContext= React.createContext({
    candyDetails: [],
    addItem: (candy,qty) =>{},
    removeItem: (candy,qty) =>{}
})

export default CartContext;