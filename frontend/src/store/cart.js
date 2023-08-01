import csrfFetch from "./csrf"
import { SET_CURRENT_USER } from "./sessionReducer"
import { useSelector } from "react-redux"
import { RECEIVE_ALL_PRODUCTS } from "./products"

const SET_CURRENT_CART = 'cart/SET_CURRENT_CART'
const REMOVE_CURRENT_CART = 'cart/REMOVE_CURRENT_CART'
const RECEIVE_CART_PRODUCTS = 'cart/RECEIVE_CART_PRODUCTS'
const RECEIVE_CART_PRODUCT = 'cart/RECEIVE_CART_PRODUCT'
const REMOVE_PRODUCT = 'cart/REMOVE_PRODUCT'


const receiveCartsProducts = (cartProducts) => {

    return({
        type: RECEIVE_CART_PRODUCTS,
        cartProducts
    })

}


const receiveCartProduct = (cartProduct) => {


    return({
        type: RECEIVE_CART_PRODUCT,
        cartProduct
    })

}

const removeCartProduct = (productId) => {

    return({
        
        type: REMOVE_PRODUCT,
         productId
    })
  
}


// const storeCurrentCart = (SET_CURRENT_USER) => {

// }


export const fetchCarts = () => async (dispatch) => {

    const res = await csrfFetch('/api/carts')
    const data = await res.json();

    dispatch({
        type: RECEIVE_CART_PRODUCTS,
        cartProducts: data
    })

console.log(data)
return data

}


export const createCart = (cart) => async dispatch => {

    const res = await csrfFetch("/api/carts", {
        method: 'POST',
        body: JSON.stringify(cart),
    })


    const data = await res.json();

    // dispatch({
    //     type: RECEIVE_CART_PRODUCT,
    //     cartProduct: data
    // })

    dispatch(receiveCartProduct(data))
    return data

} 



export const updateCart = (cart) => async dispatch => {

    const res = await csrfFetch(`/api/cart/${cart.id}`, {
        method: "PATCH",
        body: JSON.stringify(cart),
    })

    const data = await res.json();


    dispatch({

        type: RECEIVE_CART_PRODUCT,
        cartProduct: data

    })

}



export const deleteCart = (cartId) => async dispatch => {

    const res = await csrfFetch(`/api/carts/${cartId}`, {
        method: 'DELETE'
    })

    dispatch({
        type: REMOVE_PRODUCT,
        cartProductId: cartId
    })

}



const cartReducer = (state = {}, action) => {

    const newState = {...state}

    const sessionUser = JSON.parse(sessionStorage.getItem('currentUser')) 
    const userId = sessionUser.id

    switch (action.type) {
      case RECEIVE_CART_PRODUCTS:
        return {
          ...state,
          cartProducts: action.cartProducts
        };

        case RECEIVE_ALL_PRODUCTS:
            // debugger
        return {...newState, ...action.data.carts};

    case RECEIVE_CART_PRODUCT:
        return { ...newState,  [action.cartProduct.cart.id]: action.cartProduct.cart }

      case REMOVE_PRODUCT:
        const { [action.productId]: removedProduct, ...newCartProducts } =
          state.cartProducts;
        return {
          ...state,
          cartProducts: newCartProducts
        };
      default:
        return state;
    }
  };
export default cartReducer;

// const initialState = {
//     cartProducts: []
//   }
  

// const cartReducer = (state = initialState, action) => {

//     const sessionUser = JSON.parse(sessionStorage.getItem('currentUser')).id 
//     const userId = sessionUser.id
    

//     switch (action.type) {
//       case RECEIVE_CART_PRODUCTS:
//         return {
//           ...state,
//           cartProducts: action.cartProducts
//         };
//       case RECEIVE_CART_PRODUCT:
//         return {
//           ...state,
//           cartProducts: [...state.cartProducts, action.cartProduct]
//         };
//       case REMOVE_PRODUCT:
//         return {
//           ...state,
//           cartProducts: state.cartProducts.filter(
//             product => product.id !== action.productId
//           )
//         };
//       default:
//         return state;
//     }
//   };

// export default cartReducer;