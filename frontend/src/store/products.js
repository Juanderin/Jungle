import csrfFetch from "./csrf"


const RECEIVE_ALL_PRODUCTS = 'products/RECEIVE_ALL_PRODUCTS'
const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'


const receiveProducts = (products) => {
    return ({
        type: RECEIVE_ALL_PRODUCTS,
        products
    })
}


const receiveProduct = (product) => {
    return ({
        type: RECEIVE_PRODUCT,
        product
    })
}



export const fetchProducts = () => async dispatch => {

    const res = await fetch("/api/products")
    const data = await res.json();


    dispatch(receiveProducts(data.products))
    return res

}


export const fetchProduct = (productId) => async dispatch => {

    const res = await fetch(`/api/products/${productId}`)
    const data = await res.json();


    dispatch(receiveProduct(data.product))
    return res

}



const initialState = null


export const productsReducer = (state = initialState, action) => {

    const newState = {...state}

    switch(action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return {...newState, ...action.products}
        case RECEIVE_PRODUCT:
            return {...newState, ...action.product}
        default:
            return state;
    }

}