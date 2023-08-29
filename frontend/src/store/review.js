import csrfFetch from "./csrf"
import { RECEIVE_ALL_PRODUCTS } from "./products"
import { RECEIVE_PRODUCT } from "./products"

const RECEIVE_NEW_REVIEW = 'reviews/RECEIVE_NEW_REVIEW'
const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS'
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'
const RECEIVE_USER_REVIEW = 'reviews/RECEIVE_USER_REVIEW'


export const receiveUserReview = (review) => {

    return ({
        type: RECEIVE_USER_REVIEW,
        review: review
    })

}

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


export const fetchUserProductReview = (productId) => async dispatch => {

    const res = await csrfFetch(`/api/review/${productId}`)

    const review = await res.json();

    dispatch(receiveUserReview(review))

}

export const createReview = (data) => async dispatch => {

    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(data)
    })

}

export const updateReview = (review, id) => async dispatch => {

    const res = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        body: JSON.stringify(review)
    } )

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
        case RECEIVE_USER_REVIEW:
            return {...action.review}
        case REMOVE_REVIEW: 
            delete newState.reviews[action.reviewId]
            return newState
        default: 
            return newState

    }

};


export default reviewReducer;