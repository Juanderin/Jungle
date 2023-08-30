import './ReviewFormPage.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchProduct } from "../../store/products";
import { fetchProductReviews, fetchUserProductReview } from '../../store/review';
import { useParams } from "react-router-dom/";
import { createReview, updateReview } from "../../store/review"
import { useHistory } from 'react-router-dom/';
import { Link } from 'react-router-dom/';
import MainPage from "../MainPageForm";


const ReviewForm = () => {


    const dispatch = useDispatch(); 
    const productId = useParams().productId
    const history = useHistory();
    const product = useSelector(state => state.products?.[productId])
    const sessionUser = useSelector(state => state.session?.user)
    const review = useSelector(state => state.reviews?.review?.[productId])
    const userId = sessionUser?.id
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [body, setBody] = useState(); 
    const [rating, setRating] = useState();
    const [errors, setErrors] = useState([])


    useEffect(() => {

        if (sessionUser) {
            dispatch(fetchUserProductReview(productId))
        }
        
        dispatch(fetchProduct(productId))

    }, [productId])    


    useEffect(() => {

        if (review) {
            setTitle(review.title)
            setBody(review.body)
            setRating(review.rating)
            setId(review.id)
        } else {
            setTitle()
            setBody()
            setRating()
            setId()
        }

    }, [review, productId])

    if (!sessionUser) {history.push('/login')}

    const handleSubmit = async (e) => {
        
        e.preventDefault();


        if (review) {
            setErrors([])
            dispatch(updateReview({title: title, body: body, rating: rating, user_id: userId, product_id: productId}), id)
            .then(async () => {
                history.push(`/products/${productId}`)
            })
            .catch(async (res) => {
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
         
        } else {
          
            dispatch(createReview({title: title, body: body, rating: rating, user_id: userId, product_id: productId}))
            .then(async () => {
                history.push(`/products/${productId}`)
            })
            .catch(async (res) => {
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
    

    const getErrorField = (field) => {

        if (errors) {
            return errors.find((error) => {
                return error.includes(field)
            })
        }

    }
 
    return (

        <>
        <MainPage />
        <form onSubmit={handleSubmit}>
            <div id='adjustmentContainer'>
                <div id='reviewMainContainer'>
            
                    <div id='reviewTitlePage'>Create Review</div>
                        <div id='itemDescription'>
                            <div id='photoContainer'>
                                <Link id='linkContainer' to={`/products/${productId}`}>
                                    <img id='productReviewImg' src={product?.photoUrl}/></Link>
                            </div>
                            <div id='reviewNameContainer'>
                                <div id='reviewName'>{product?.productName}</div>
                            </div>
                        </div>
                    <div id='showPageDivider'></div>
                    <div id='reviewFormDrop' className='formHeaders'>Overall Rating

                        <div id='dropRatingShow'>
                            <label id="dropRating"></label>
                                <select id="dropdownRating" value={rating ? rating : '1'} onChange={(e) => setRating(e.target.value)}>
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
                    {getErrorField('Title') ? <div className='reviewErrors'><i id="a-icon a-icon-alert" className='reviewErrorExclamation' >!</i>
                    <span className='errorBody'> Please enter your headline.</span></div> : <div className='reviewErrors'/> }

                    <div id='showPageDivider'></div>

                    <div id='reviewFormContent' className='formHeaders'>Add a written review
                        <textarea id='reviewContent' type='textbox' 
                            placeholder='What did you like or dislike? What did you use this product for?'
                            value={body} onChange={(e) => setBody(e.target.value)}
                         />


                    </div>
                    {getErrorField('Body') ? <div className='reviewErrors'><i id="a-icon a-icon-alert" className='reviewErrorExclamation' >!</i>
                    <span className='errorBody'> Please add a written review.</span></div> : <div className='reviewErrors'/> }

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