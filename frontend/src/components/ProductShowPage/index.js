// import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/";
import { fetchProduct } from "../../store/products";
import "./ProductShowPage.css"
import * as cartActions from '../../store/cart'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "../MainPageForm";
import ReviewForm from "../ReviewFormPage";
import { createReview, deleteReview, fetchProductReviews} from "../../store/review";


const ProductShow = () => {
    const dispatch = useDispatch();
    const productId = useParams().productId
    const product = useSelector(state => state.products?.[productId])
    const sessionUser = useSelector(state => state.session?.user)
    const reviews = useSelector(state => state.reviews?.reviews)
    const users = useSelector(state => state.reviews?.users)
    const userId = sessionUser?.id
    const history = useHistory();
    const priceStr = product?.productPrice?.toLocaleString()
    let price = priceStr?.split(".")
    price = price?.length < 2 ? [price[0], "00"] : price
    const [quantity, setQuantity] = useState(1)
    const [rating, setRating] = useState()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
  



    const handleAddToCart = (e) => {
        e.preventDefault();
        
        if (!sessionUser) {
            history.push('/login')
        } else {
            dispatch(cartActions.createCart({product_id: productId, user_id: userId, quantity: quantity}))
        }
        
    }
    
    const handleReviewRedirect = () => {
        
        history.push(`/review/${productId}`)
        
    }
    
    const handleClick = () => {
        
        dispatch(createReview({title: 'Good ol set, they are hefty', body: 'not much to say, impressive set of dumbells that hold up to the test of time', 
        rating: 5, user_id: sessionUser.id, product_id: productId
    }))
        dispatch(fetchProductReviews(productId))
}

    const handleDelete = (reviewId) => {
        
        dispatch(deleteReview(reviewId))
        dispatch(fetchProductReviews(productId))
    }

    useEffect(() => {
        dispatch(fetchProduct(productId))
        dispatch(fetchProductReviews(productId))
    }, [dispatch, productId])    

    
    if (!product) return null


    let organizedReviews = reviews ? Object.values(reviews).map((review) => {
        
        const deleteButton = sessionUser?.id === review.userId ? true : false
     

        return (
          <div id='reviewContent'>

            <div id='reviewUser'>{users[review.userId].username.charAt(0).toUpperCase() + users[review.userId].username.slice(1)}</div>
            <div><span id='rating'>({review.rating} out of 5 stars)</span> <span id='reviewTitle'>{review.title}</span></div>
            <div id='verifiedReview'>Verified Purchase</div>
            <div id='ratingBody'>{review.body}</div>
            {deleteButton ? <button onClick={() => handleDelete(review.id)}>Delete Review</button> : <button onClick={handleClick}>Submit New Review</button>}
            
          </div>
        )

    }) :  null


    return (
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
                <div id='reviewContent'>
                    <div id='topReviewsTitle'>Top reviews from the United States </div>
                    <br/>
                        {organizedReviews?.length > 0 ? organizedReviews : 
                        <>
                        <div>No Reviews for This Product</div>
                        <button onClick={handleReviewRedirect}>Review this product</button>
                        </>}
                    </div>
                </div>

        </>
    )

}


export default ProductShow;



