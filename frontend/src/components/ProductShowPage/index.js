// import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/";
import { fetchProduct } from "../../store/products";
import "./ProductShowPage.css"
import * as cartActions from '../../store/cart'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "../MainPageForm";


const ProductShow = () => {
    const dispatch = useDispatch();
    const productId = useParams().productId
    const product = useSelector(state => state.products?.[productId])
    const sessionUser = useSelector(state => state.session?.user)
    const userId = sessionUser?.id
    const history = useHistory();
    const priceStr = product?.productPrice?.toLocaleString()
    let price = priceStr?.split(".")
    price = price?.length < 2 ? [price[0], "00"] : price
    
    
    const handleAddToCart = (e) => {
        e.preventDefault();
        
        if (!sessionUser) {
            history.push('/login')
        } else {
            dispatch(cartActions.createCart({product_id: productId, user_id: userId, quantity: quantity}))
        }
        
    }
    
    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [productId])    
    
    const [quantity, setQuantity] = useState(1)
    
    if (!product) return null
    return(
        <>

        <MainPage />
        
        <div id='showMain'>
            <div id='showProductImg'>
                <img id='productImg' src={product.photoUrl} alt='product_image' />
            </div>
        <br/>
        <div id='middleContainer'>
            <div id='showProductInfo'>
               <div id='showTitle'>{product.productName}</div>
               <div id='showCat'>{product.category}</div> 
            </div>
                <div id='showPageDivider'></div>
                <br/>
                <div id='productPriceOnIndex'><div id="productCentsOnIndex">$</div>{price[0]}<div id="productCentsOnIndex">{price[1]}</div></div>
                    <div id='freeReturnsInfo'>FREE returns</div>
                <br/>
                <div id='showPageDivider'></div>

                <div>{product.description}</div>
        </div>
        <br/>
            <div id='showProductPurchase'>
                <div id='productPriceOnIndex'><div id="productCentsOnIndex">$</div>{price[0]}<div id="productCentsOnIndex">{price[1]}</div></div>
                    <div>FREE Returns</div>
                    <div id='inStock'>In Stock </div>
                <div id='dropShow'>
                <label id="dropText">Qty: </label>
                <select id="dropdown">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                </div>
                    <button id='addCartButton' onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
        <div id='showPageDivider'></div>
{/* 
        <div id='showReview'>
                <div id='ratingBars'>
                    <div id='barTitle'>Customer Reviews</div>
                    <br/>
                <div className="ratingMeter">
                    <div className="ratingFiller" style={{ width: '0%' }}></div>
                </div>
                <div className="ratingMeter">
                    <div className="ratingFiller" style={{ width: '100%' }}></div>
                </div>
                <div className="ratingMeter">
                    <div className="ratingFiller" style={{ width: '20%' }}></div>
                </div>
                <div className="ratingMeter">
                    <div className="ratingFiller" style={{ width: '0%' }}></div>
                </div>
                <div className="ratingMeter">
                    <div className="ratingFiller" style={{ width: '0%' }}></div>
                </div>
                <br/>
                <div id='showPageDivider'></div>

                </div>
            <div id='topReviewsTitle'>Top reviews from the United States</div>
        
        </div> */}

        </>
    )

}


export default ProductShow;



