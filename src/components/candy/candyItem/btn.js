import classes from "./btn.module.css";
import CartContext from "../../../store/cartContext";
import { useContext } from "react";

const Btn=(props) =>{
    const cartCtx=useContext(CartContext);

    const onClickAddQtyHandler=(e) =>{
        const candy={name: e.target.name};
        cartCtx.addItem(candy,e.target.value);
    }
    return(
        <div className={classes.btn}>
            <button id={props.id} name={props.name} value={props.value} onClick={onClickAddQtyHandler}>{props.label}</button>
        </div> 
    )
}

export default Btn;