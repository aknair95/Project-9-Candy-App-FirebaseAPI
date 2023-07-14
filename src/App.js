
import Cart from './components/cart/cart';
import { useState,useEffect } from 'react';
import Header from './components/layout/header';
import CartProvider from './store/cartProvider';
import CandysAvailable from './components/candy/candysAvailable';
import axios from "axios";

function App() {
  const [candyDetails,updateCandyDetails]= useState([]);

  const [cartStatus,updateCartStatus]= useState(false);

  const cartShowHandler=() =>{
    updateCartStatus(true);
  }

  const cartHideHandler=() =>{
    updateCartStatus(false);
  }

  const addNewCandyAPI= async (newCandyData) =>{
    try{ 
       await axios.patch("https://medicine-shop-4c668-default-rtdb.firebaseio.com/candys.json",{
        newCandyData: newCandyData
         }); 
     } catch(error){
       console.log(error);
     }
   }
 
   // useEffect hook for patch request to Firebase
   useEffect(() =>{
    addNewCandyAPI();
   },[addNewCandyAPI])

  const addCandyDetails=(newCandy) =>{
    updateCandyDetails((prevCandyDetails) =>{
      addNewCandyAPI([ ...prevCandyDetails,newCandy]);
      return ([ ...prevCandyDetails,newCandy]);
    });

  }

  return(
    <CartProvider candyDetails={candyDetails}>
      {cartStatus && <Cart onClose={cartHideHandler}/>}
      <Header onAddCandyData={addCandyDetails} onClickCart={cartShowHandler}/>
      <CandysAvailable candysAvailable={candyDetails}/> 
    </CartProvider> 
  )
}

export default App;