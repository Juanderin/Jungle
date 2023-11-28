// import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/";
import { fetchProduct } from "../../store/products";
import "./ProductShowPage.css"
import * as cartActions from '../../store/cart'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "../MainPageForm";
import { deleteReview, fetchProductReviews} from "../../store/review";


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
    const cartItems = useSelector(state => state?.carts)
    let price = priceStr?.split(".")
    price = price?.length < 2 ? [price[0], "00"] : price
    const [quantity, setQuantity] = useState(1)
    const [errors, setErrors] = useState([]);
  

    const inCart = cartItems ? Object.values(cartItems) : null

    const ratings = {
        1 : 0,
        2 : 0,
        3 : 0,
        4 : 0,
        5 : 0
    }


    const handleAddToCart = (e) => {
        e.preventDefault();
        
        if (!sessionUser) {
            history.push('/login')
        } else {
            dispatch(cartActions.createCart({product_id: productId, user_id: userId, quantity: quantity}))
            .catch(async (res) =>{
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }

                if (data?.errors) {
                    setErrors(data.errors)
                } else if (data) {
                    setErrors([data])
                } else {
                    setErrors([res.statusText])
                }

            })
        }
        
    }


    const handleBuyNow = (e) => {
        e.preventDefault();
        
        if (!sessionUser) {
            history.push('/login')
        } else if (inCart.length > 0) {
            history.push('/checkout')
            dispatch(cartActions.clearCart())
        } else {
            history.push('/cart')
        }
        
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
        
        const currentUser = sessionUser?.id === review.userId ? true : false
        
        
        return (
            <div id='reviewContent'>
                <div id='reviewUser'>{users[review.userId].username.charAt(0).toUpperCase() + users[review.userId].username.slice(1)}</div>

                <div><span id='rating'>({review.rating} out of 5 stars)</span> <span id='reviewTitle'>{review.title}</span></div>

                <div id='verifiedReview'>Verified Purchase</div>

                <div id='ratingBody'>{review.body}</div>
                
                {currentUser ? <button id='reviewDeleteButton' onClick={() => handleDelete(review.id)}>Delete Review</button> : null}
                
          </div>
        )
        
    }) :  null

    const ratingValues = reviews ? Object.values(reviews) : null

    let reviewRating = reviews ? ratingValues.reduce((sum, review) => sum + review.rating, 0) / ratingValues.length : null

    const ratingLength = reviews ? ratingValues.length : null

    const eachReviewRating = reviews ? ratingValues.map((review) => {


        switch (review.rating) {
            case 1:
                ratings[1] += 1
            break;

            case 2: 
                ratings[2] += 1
            break;

            case 3:
                ratings[3] += 1
            break;

            case 4: 
                ratings[4] += 1
            break;

            case 5:
                ratings[5] += 1
            break;

        }


    }) : null


    for (let i = 1; i <= 5; i++) {

        if (ratings[i] !== 0) {

            ratings[i] = (ratings[i] / ratingLength) * 100

        }

       
    }

    const description = product ? product.description.split('*') : null

    const descriptionList = description.map((point) => <li>{point}</li>)


    const handleReviewRedirect = () => {

        if (sessionUser) {

             history.push(`/review/${productId}`)

        } else {

            history.push('/login')

        }

    }
    
    
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
                <div id='productPriceOnIndex'><div id="productCentsOnIndex">$</div>{price[0]}
                <div id="productCentsOnIndex">{price[1]}</div></div>
                    <div id='freeReturnsInfo'>FREE returns</div>
                <br/>
                <div id='showPageDivider'></div>

                {<div id='productList'> {descriptionList} </div>}
        </div>
        <br/>
            <div id='showProductPurchase'>
                <div id='productPriceOnIndex'><div id="productCentsOnIndex">$</div>{price[0]}<div id="productCentsOnIndex">{price[1]}</div></div>
                    <div>FREE Returns</div>
                    <div id='inStock'>In Stock </div>
                    <div id='dropShow'>
                        <label id="dropText">Qty: </label>
                            <select id="dropdown" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                    </div>
               {errors && <div id='cartError'>{errors.join(", ")}</div> }
                    <button id='addCartButton' onClick={handleAddToCart}>Add to Cart</button>
                    <button id='buyNowButton' onClick={handleBuyNow}>Buy Now</button>
            </div>
        </div>
        <div id='showPageDivider'></div>
    <div id='allReview'>
        <div id='showReview'>
                <div id='ratingBars'>
                    <div id='barTitle'>Customer Reviews</div>
                        <div id='reviewAverage'>{reviewRating ? Math.round(reviewRating) : 0} out of 5</div>
                        <div id='ratingAmount'>{ratingLength} global ratings</div>
                    <br/>
                    <div className="ratingBarsOrg">
                        <div className="ratingAmounts">5 star</div> 
                        <div className="ratingMeter">
                        <div className="ratingFiller" style={{ width: `${ratings[5]}%` }}></div>
                        </div>
                        <div className="ratingAmounts">{`${Math.round(ratings[5])}%`}</div> 
                    </div> 
                    <div className="ratingBarsOrg">
                        <div className="ratingAmounts">4 star</div> 
                        <div className="ratingMeter">
                            <div className="ratingFiller" style={{ width: `${ratings[4]}%` }}></div>
                        </div>
                        <div className="ratingAmounts">{`${Math.round(ratings[4])}%`}</div> 
                    </div> 
                    <div className="ratingBarsOrg">
                        <div className="ratingAmounts">3 star</div> 
                        <div className="ratingMeter">
                            <div className="ratingFiller" style={{ width: `${ratings[3]}%` }}></div>
                        </div>
                        <div className="ratingAmounts">{`${Math.round(ratings[3])}%`}</div> 
                    </div> 
                    <div className="ratingBarsOrg">
                        <div className="ratingAmounts">2 star</div> 
                        <div className="ratingMeter">
                            <div className="ratingFiller" style={{ width: `${ratings[2]}%` }}></div>
                        </div>
                        <div className="ratingAmounts">{`${Math.round(ratings[2])}%`}</div> 
                    </div> 
                    <div className="ratingBarsOrg">
                        <div className="ratingAmounts">1 star</div> 
                        <div className="ratingMeter">
                            <div className="ratingFiller" style={{ width: `${ratings[1]}%` }}></div>
                        </div>
                        <div className="ratingAmounts">{`${Math.round(ratings[1])}%`}</div> 
                    </div> 
                <div id='showPageDivider'></div>

                    <div id='reviewButtons'>
                        <div id='reviewTitleBody'> Review this product </div>
                        <div id='reviewTextBody'> Share your thoughts with other customers </div>
                        <button id='reviewButton' onClick={handleReviewRedirect}>Write a customer review</button>
                    </div>
                </div>
        </div>
                    <div>
                        <div id='reviewContent'>
                            <div id='topReviewsTitle'>Top reviews from the United States </div>
                            <br/>
                                {organizedReviews?.length > 0 ? <> 
                                {organizedReviews}
                                </> : 
                                <>
                                <div id='reviewContent'>No Reviews for This Product</div>
                                </>}
                        </div>
                    </div>
    </div>
        </>
    )

}


export default ProductShow;



