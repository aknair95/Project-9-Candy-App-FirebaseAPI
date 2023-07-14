import classes from "./candyItem.module.css";
import Btn from "./btn";

const CandyItem=(props) =>{
    return( 
        <li className={classes.candy}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{`Rs ${props.price}`}</div>
                <div className={classes.btn}>
                    <Btn id={props.name+"addOne"} label="BUY 1" name={props.name} value="1" candysAvailable={props.candysAvailable}/>
                    <Btn id={props.name+"addTwo"} label="BUY 2" name={props.name} value="2" candysAvailable={props.candysAvailable}/>
                    <Btn id={props.name+"addThree"} label="BUY 3" name={props.name} value="3" candysAvailable={props.candysAvailable}/>
                </div>
            </div>             
        </li>
    )
}

export default CandyItem;