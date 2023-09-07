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

            <div id='splashContentsContainer'>
                <div id='splashBox'>
                    
                
                        <img id="splashImg" src='/amazonSplashTwo.jpg'/>
                    
                </div>


                <div id='splashCatMain'>
                    <div id='splashCategories'>
                        <div className="splashCatSub"><img className="splashImgCat" src='/home.jpeg'/><div className='splashCatText'>Home</div></div>
                        <div className="splashCatSub"><img className="splashImgCat" src='/accessories.jpeg'/><div className='splashCatText'>Accessories</div></div>
                        <div className="splashCatSub"><img className="splashImgCat" src='/electronics.jpeg'/><div className='splashCatText'>Electronics</div></div>
                        <div className="splashCatSub"><img className="splashImgCat" src='/run.jpeg'/><div className='splashCatText'>Exercise</div></div>
                    </div>
                </div>

            </div>

            
                <div id='interestedCont'>
                    <div id='interestedProducts'>You might be interested in these products</div>
                </div>
                <div id='productShowPageContainer'>
                    {Object.values(products).map((product) => <ProductsIndexItem product={product}/> )}
                </div>
             
        </div>
        </>
    )

}


export default ProductsIndex



