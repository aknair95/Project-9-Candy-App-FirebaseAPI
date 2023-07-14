import { useState,useEffect } from "react";
import CartContext from "./cartContext";
import axios from "axios";

const CartProvider=(props) =>{

    const [candys,updateCandys]=useState(props.candyDetails);    
    
    const addItemToCartAPI= async (updatedCandyDetails) =>{
        try{ 
           await axios.patch("https://medicine-shop-4c668-default-rtdb.firebaseio.com/cart.json",{
            updatedCandyDetails: updatedCandyDetails
             }); 
         } catch(error){
           console.log(error);
         }
       }
     
       // useEffect hook for patch request to Firebase
       useEffect(() =>{
        addItemToCartAPI();
       },[addItemToCartAPI])
    
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

    const removeItemToCartAPI= async (updatedCandyDetails) =>{
        try{ 
           await axios.patch("https://medicine-shop-4c668-default-rtdb.firebaseio.com/cart.json",{
            updatedCandyDetails: updatedCandyDetails
             }); 
         } catch(error){
           console.log(error);
         }
       }
     
       // useEffect hook for patch request to Firebase
       useEffect(() =>{
        removeItemToCartAPI();
       },[removeItemToCartAPI])

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