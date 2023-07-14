
import { useRef } from "react";
import Card from "../UI/card";
import classes from "./candyInfoForm.module.css";


const CandyInfoForm=(props) =>{
    
    const candyNameRef=useRef();
    const candyDescriptionRef=useRef();
    const candyPriceRef=useRef();

    const addCandyBtnHandler=(e) =>{
        e.preventDefault();
        const enteredName=candyNameRef.current.value;
        const enteredDescription=candyDescriptionRef.current.value;
        const enteredPrice=candyPriceRef.current.value;
      
        const newCandyData={name: enteredName,description: enteredDescription,price: enteredPrice,qty: 0};
        props.onAddCandyData(newCandyData);
    
        candyNameRef.current.value="";
        candyDescriptionRef.current.value="";
        candyPriceRef.current.value="";
    }
    return (
        <Card>
            <form className={classes["form-control"]}> 
                <h2>CANDY DETAIL</h2>
                <label htmlFor="name">Candy Name:</label>
                <input type="text" id="name" ref={candyNameRef}/>
                <label htmlFor="decription" >Description:</label>
                <input type="text" id="description" ref={candyDescriptionRef}/>
                <label htmlFor="price">Price(Rs):</label>
                <input type="number" id="price" min="1" ref={candyPriceRef}/>
                <button id="addBtn" onClick={addCandyBtnHandler}>ADD CANDY</button>
            </form>
        </Card>    
    )
}

export default CandyInfoForm;