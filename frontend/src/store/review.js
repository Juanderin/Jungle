import csrfFetch from "./csrf"
import { RECEIVE_ALL_PRODUCTS } from "./products"
import { RECEIVE_PRODUCT } from "./products"

const RECEIVE_NEW_REVIEW = 'reviews/RECEIVE_NEW_REVIEW'
const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS'
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'




export const receiveReview = (review) => {

    return({
        type: RECEIVE_NEW_REVIEW,
        review: review
    })

}


export const receiveReviews = (reviews) => {

    return({
        type: RECEIVE_REVIEWS,
        reviews: reviews

    })


} 



export const removeReview = (reviewId) => {

    return({
        type: REMOVE_REVIEW,
        reviewId: reviewId

    })

}




export const fetchReviews = () => async dispatch => {

    const res = await csrfFetch('/api/reviews')
    const reviews = await res.json


    dispatch(receiveReviews(reviews))


}


export const fetchProductReviews = (productId) => async dispatch => {

    const res = await csrfFetch(`/api/reviews/${productId}`)

    const reviews = await res.json();

    dispatch(receiveReviews(reviews))
}


export const createReview = (data) => async dispatch => {

    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(data)
    })

}




export const deleteReview = (reviewId) => async dispatch => {

    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    dispatch(removeReview(reviewId))

}




const reviewReducer = (state = {}, action) => {

   const newState = {...state}

    switch (action.type) {


        case RECEIVE_REVIEWS:
            return {...newState, ...action.reviews}
        case REMOVE_REVIEW: 
            delete newState.reviews[action.reviewId]
            return newState
        default: 
            return newState

    }

};


export default reviewReducer;