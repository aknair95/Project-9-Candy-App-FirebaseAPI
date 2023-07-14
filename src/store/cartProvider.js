import { useState,useEffect } from "react";
import CartContext from "./cartContext";
import axios from "axios";

const CartProvider=(props) =>{

    const [candys,updateCandys]=useState(props.candyDetails);    
    
  
    
    const addItemToCartHandler=(item,Qty) =>{
        const updatedCandyDetails=props.candyDetails.map((element) =>{
            if(element.name===item.name){
                element.qty=Number(element.qty)+Number(Qty);        
            }
            return element;
        })
        updateCandys(updatedCandyDetails);
        addItemToCartAPI(updatedCandyDetails);  
    }

  

    const removeItemFromCartHandler=(candy,Qty) =>{
        const updatedCandyDetails=props.candyDetails.map((element) =>{
            if(element.name===candy.name){
                element.qty=Number(element.qty)-Number(Qty);               
            }
            return element;
        })
        updateCandys(updatedCandyDetails);
        removeItemToCartAPI(updatedCandyDetails);
    }
    const cartContext={
        candyDetails: candys,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children} 
        </CartContext.Provider>
    )
}

export default CartProvider;