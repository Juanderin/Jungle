import './ReviewFormPage.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchProduct } from "../../store/products";
import { fetchProductReviews } from '../../store/review';
import { useParams } from "react-router-dom/";
import { createReview } from "../../store/review"
import { useHistory } from 'react-router-dom/';
import MainPage from "../MainPageForm";

const ReviewForm = () => {
    const dispatch = useDispatch(); 
    const history = useHistory();
    const productId = useParams().productId
    const product = useSelector(state => state.products?.[productId])
    const sessionUser = useSelector(state => state.session?.user)
    const reviews = useSelector(state => state.reviews?.reviews)
    const userId = sessionUser?.id
    const [title, setTitle] = useState();
    const [body, setBody] = useState(); 
    const [rating, setRating] = useState();
    
    
    useEffect(() => {
        dispatch(fetchProduct(productId))
        dispatch(fetchProductReviews(productId))
    }, [dispatch, productId])    
    

    if (reviews) {

        let hasReviewed = Object.values(reviews).some((review) => sessionUser?.id === review?.userId)

        if (hasReviewed) {
            history.push(`/products/${productId}`)
        }
        
    }

    
    const handleSubmit = () => {

        dispatch(createReview({title: title, body: body, rating: rating, user_id: userId, product_id: productId}))
        history.push(`/products/${productId}`)
    }

    return (

        <>
        <MainPage />
        <form onSubmit={handleSubmit}>
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
                    <div id='reviewFormDrop' className='formHeaders'>Overall Rating
                
                        <div id='dropRatingShow'>
                            <label id="dropRating"></label>
                                <select id="dropdownRating" value={rating} onChange={(e) => setRating(e.target.value)}>
                                    <option value="1">1 Star</option>
                                    <option value="2">2 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="5">5 Stars</option>
                                </select>
                        </div>
                    </div>

                    <div id='showPageDivider'></div>

                    <div id='reviewFormHeadline' className='formHeaders'>Add a headline
                        <input id='reviewHeadline' type='textbox' 
                        placeholder='Whats most important to know?' 
                        value={title} onChange={(e) => setTitle(e.target.value)}
                        />

                    </div>

                    <div id='showPageDivider'></div>

                    <div id='reviewFormContent' className='formHeaders'>Add a written review
                        <textarea id='reviewContent' type='textbox' 
                            placeholder='What did you like or dislike? What did you use this product for?'
                            value={body} onChange={(e) => setBody(e.target.value)}
                         />

                    </div>

                    <div id='showPageDivider'></div>
                    <div id='submitButtonContainer'>
                        <input id='reviewFormSubmit' type='submit' value='Submit'/>
                    </div>
                </div>
        
            </div>
        </form>
       </>
    )


}


export default ReviewForm