import React, { useEffect } from "react";
import './ProductsIndex.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products";
import ProductsIndexItem from "./ProductIndexItem";
import { useHistory } from "react-router-dom/";

const ProductsIndex = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();
    const history = useHistory();

    
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    
    if(!products) return null
    
    const handleCategory = (category) => {
        
        history.push(`/categories/${category}`)
        
    }
    

    return (
        <>
        <div id='splashContainer'>

            <div id='splashContentsContainer'>
                <div id='splashBox'>
                    
                
                        <img id="splashImg" src='/amazonSplashTwo.jpg'/>
                    
                </div>


                <div id='splashCatMain'>
                    <div id='splashCategories'>
                        <div className="splashCatSub" onClick={() => handleCategory("Home")}><img className="splashImgCat" src='/home.jpeg'/><div className='splashCatText'>Home</div></div>
                        <div className="splashCatSub" onClick={() => handleCategory("Accessories")}><img className="splashImgCat" src='/accessories.jpeg'/><div className='splashCatText'>Accessories</div></div>
                        <div className="splashCatSub" onClick={() => handleCategory("Electronics")}><img className="splashImgCat" src='/electronics.jpeg'/><div className='splashCatText'>Electronics</div></div>
                        <div className="splashCatSub" onClick={() => handleCategory("Exercise")}><img className="splashImgCat" src='/run.jpeg'/><div className='splashCatText'>Exercise</div></div>
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



