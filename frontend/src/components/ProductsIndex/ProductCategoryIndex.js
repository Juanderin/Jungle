import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/";
import { fetchProducts } from "../../store/products";
import ProductsIndexItem from "./ProductIndexItem";
import MainPage from "../MainPageForm";

const ProductCategory = () => {
    const dispatch = useDispatch();
    const category = useParams().category
    const products = useSelector(state => state.products)
    const productCategories = products ? Object.values(products).filter((product) => product.category === category)  : null

    
    
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    

    let categories = products ? productCategories.map((product) => {

        return (

            <ProductsIndexItem product={product} />

        )

    }) : null

    
    

    return (

        <>

            <MainPage />

            <div id='productCatMain'>
        
                <div id='productCatSub'>
                    <div id='productCatTitle'>
                        {`Search for ${category}`}
                    </div>
                    
                    <div id='productCatIndex'>
                        {categories}
                    </div> 

                </div>

            </div>

        </>
    )


}


export default ProductCategory