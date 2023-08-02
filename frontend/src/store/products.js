import csrfFetch from "./csrf"


export const RECEIVE_ALL_PRODUCTS = 'products/RECEIVE_ALL_PRODUCTS'
const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'


const receiveProducts = (data) => {
    return ({
        type: RECEIVE_ALL_PRODUCTS,
        data
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

    console.log(data);
    dispatch(receiveProducts(data))
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
            return {...newState, ...action.data.products}
        case RECEIVE_PRODUCT:
            return {...newState, ...action.product}
        default:
            return state;
    }

}