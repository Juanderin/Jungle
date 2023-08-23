import './ReviewFormPage.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchProduct } from "../../store/products";
import { useParams } from "react-router-dom/";
import MainPage from "../MainPageForm";
import { createReview } from "../../store/review"

const ReviewForm = () => {
    const dispatch = useDispatch(); 
    const productId = useParams().productId
    const product = useSelector(state => state.products?.[productId])
    

   
    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [productId])    



    return (

        <>
        <MainPage />
        <div id='adjustmentContainer'>
            <div id='reviewMainContainer'>
                <div id='reviewTitlePage'>Create Review</div>
                    <div id='itemDescription'>
                        <img id='productReviewImg' src={product?.photoUrl}></img>
                        <div id='reviewNameContainer'>
                            <div id='reviewName'>{product?.productName}</div>
                        </div>
                    </div>
                <div id='showPageDivider'></div>
                <div className='formHeaders'>Overall Rating
            
                    <div id='dropRatingShow'>
                        <label id="dropRating"></label>
                            <select id="dropdownRating">
                                <option value="1">1 Star</option>
                                <option value="2">2 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="5">5 Stars</option>
                            </select>
                    </div>
                <div id='showPageDivider'></div>
                <div id='reviewFormTitle'>Title
                    <input id='reviewContent' type='textbox' placeholder='Write your review'></input>


                </div>
                </div>
            </div>
        </div>
       </>
    )


}


export default ReviewForm