import React from "react";
import MainPage from "../MainPageForm";
import ProductsIndex from "../ProductsIndex";
import { useSelector } from "react-redux";
import './HomePage.css'
import Footer from "../MainPageForm/Footer";

const HomePage = () => {
    const sessionUser = useSelector(state => state.session.user)
    
    
    return (
        
        <>

        <MainPage />

        <div id='allproductsContainer'>
            <ProductsIndex />
        </div>
        
        <Footer />
        </>
    )

}

export default HomePage