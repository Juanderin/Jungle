import React from "react";
import MainPage from "../MainPageForm";
import ProductsIndex from "../ProductsIndex";
import './HomePage.css'
import DropProfile from "../DropProfileButton";
import { useSelector } from "react-redux";


const HomePage = () => {
    const sessionUser = useSelector(state => state.session.user)
    
    
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