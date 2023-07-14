import { Fragment } from "react";
import classes from "./header.module.css";
import candyImg from "../../resources/candyIMG.jpg";
import HeaderCartBtn from "./headerCartBtn";
import CandyInfoForm from "../candyInputForm/candyInfoForm";

const Header=(props) =>{
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>CANDY STORE</h1>
            <HeaderCartBtn onClickCart={props.onClickCart}/>
        </header>
        <div className={classes.mainImage}>
            <img src={candyImg} alt="World of candies"/> 
        </div> 
        <CandyInfoForm onAddCandyData={props.onAddCandyData}/>  
    </Fragment>
    )
}

export default Header;