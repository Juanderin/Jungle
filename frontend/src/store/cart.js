import csrfFetch from "./csrf"

const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS'
const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'
const REMOVE_PRODUCT = 'products/REMOVE_PRODUCT'


export const fetchCarts = () => async (dispatch) => {

    const res = await fetch('/api/products')
    const data = await res.json();

    dispatch({
        type: RECEIVE_PRODUCTS,
        cartProducts: data
    })

}


export const createCart = (cart) => async dispatch => {

    const res = await fetch("/api/carts", {
        method: 'POST',
        body: JSON.stringify(cart),
        headers: {'Content-Type' : 'application/json'}
    })


    const data = await res.json();

    dispatch({
        type: RECEIVE_PRODUCT,
        cartProduct: data
    })

} 



export const updateCart = (cart) => async dispatch => {

    const res = await fetch(`/api/cart/${cart.id}`, {
        method: "PATCH",
        body: JSON.stringify(cart),
        headers: {'Content-Type' : 'application/json'}
    })

    const data = await res.json();


    dispatch({

        type: RECEIVE_PRODUCT,
        cartProduct: data

    })

}



export const deleteCart = (cartId) = async dispatch => {

    const res = await fetch(`/api/carts/${cartId}`, {
        method: 'DELETE'
    })

    dispatch({
        type: REMOVE_PRODUCT,
        cartProductId: cartId
    })

}




const cartReducer = (state = {}, action) => {

    newState = {...state}


    switch(action.type) {
        case RECEIVE_PRODUCTS:
            return {...newState, ...action.cartProducts};
        case RECEIVE_PRODUCT:
            return {...newState, ...action.cartProduct};
        case REMOVE_PRODUCT:
            delete newState[action.cartProductId]
            return newState
        default: 
            return state;
    }

}


export default cartReducer;