import React from "react";
import MainPage from "../MainPageForm";
import ProductsIndex from "../ProductsIndex";
import './HomePage.css'

const HomePage = (props) => {

    
    
    return (
        
        <>
        <MainPage />
        <div id='allproductsContainer'>
        <ProductsIndex />
        </div>
        </>
    )

}

export default HomePage