import React, { useEffect } from "react";
import './ProductsIndex.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products";
import ProductsIndexItem from "./ProductIndexItem";

const ProductsIndex = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if(!products) return null

    return (
        <>
        <div id='splashContainer'>
            <div id='splashBox'>
                <ul id='imageList' className="imageList">
                    {/* <li><img id="splashImg" src='/amazonSplashOne.jpg'/></li> */}
                    <li><img id="splashImg" src='/amazonSplashTwo.jpg'/></li>
                    </ul>
            </div>
            <div id='productShowPageContainer'>
                {Object.values(products).map((product) => <ProductsIndexItem product={product}/> )}
            </div>
        </div>
        </>
    )

}


export default ProductsIndex



