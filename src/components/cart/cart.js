import { useContext } from "react";
import Modal from "../UI/modal";
import classes from "./cart.module.css";
import CartContext from "../../store/cartContext";
import classes1 from "./cartItem.module.css";

const Cart=(props) =>{
    const cartItemsCtx=useContext(CartContext); 

    const cartItemsStatus=cartItemsCtx.candyDetails.reduce((qtyCount,element) =>{      // cart item status checking for conditional rendering
        return qtyCount+element.qty;
    },0) >0;

    const filteredItems=cartItemsCtx.candyDetails.filter((item) =>{        //filtering array for items quantity>0
        return Number(item.qty)>0;  
    });

    const onClickRemoveHandler=(e) =>{                  // function to dec. qty of cart item by 1
       const item={name: e.target.name};                            
       cartItemsCtx.removeItem(item,1);
    }

    const onClickAddHandler=(e) =>{                     // function to inc. qty of cart item by 1
        const item={name: e.target.name};
        cartItemsCtx.addItem(item,1);
    }
                         
    const cartItems=(
        <ul>
            {filteredItems.map((item) =>{
                return(
                    <li key={Math.random()} className={classes1.cartItem}>
                            <div>
                                <h2>{item.name}</h2>
                                <div className={classes1.summary}>
                                    <span className={classes1.price}>Rs {item.price}</span>
                                    <span className={classes1.qty}>x {item.qty}</span>
                                </div>
                            </div>
                            <div className={classes1.actions}>
                                <button name={item.name} onClick={onClickRemoveHandler}>-</button>
                                <button name={item.name} onClick={onClickAddHandler}>+</button>
                            </div>  
                    </li>   
                )
            })}
        </ul>
    )
    const cartPrice=cartItemsCtx.candyDetails.reduce((totalPrice,item) =>{      // reduce function to get total price from cart items
        return totalPrice+(item.qty*item.price);
    },0);

    return(
        <Modal onClose={props.onClose}>
            <div className={classes.cartItems}>
                {cartItems}              
                <div className={classes.total}>
                    <span>Total Price</span>
                    <span>{`Rs ${cartPrice}`}</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes.buttonClose} onClick={props.onClose}>Close</button>
                    {cartItemsStatus && <button className={classes.buttonOrder}>Order</button>}
                </div>
            </div>
        </Modal>    
    )
}

export default Cart;