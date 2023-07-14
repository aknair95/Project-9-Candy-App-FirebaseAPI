
import Cart from './components/cart/cart';
import { useState } from 'react';
import Header from './components/layout/header';
import CartProvider from './store/cartProvider';
import CandysAvailable from './components/candy/candysAvailable';

function App() {
  const [candyDetails,updateCandyDetails]= useState([]);

  const [cartStatus,updateCartStatus]= useState(false);

  const cartShowHandler=() =>{
    updateCartStatus(true);
  }

  const cartHideHandler=() =>{
    updateCartStatus(false);
  }

  const addCandyDetails=(newCandy) =>{
    updateCandyDetails((prevCandyDetails) =>{
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