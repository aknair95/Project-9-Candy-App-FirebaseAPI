import CartIcon from "../cart/cartIcon";
import classes from "./headerCartBtn.module.css";
import CartContext from "../../store/cartContext";
import { useContext } from "react";

const HeaderCartBtn=(props) =>{
    const cartCtx=useContext(CartContext);
    
    const cartCandyQty=cartCtx.candyDetails.reduce((candyCount,element) =>{
        return candyCount+Number(element.qty);        //using Number function to convert string to number
    },0);
 
    return (
        <button className={classes.button} onClick={props.onClickCart}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>CART</span>
            <span className={classes.badge}>{cartCandyQty}</span>
        </button>
    )
}

export default HeaderCartBtn;