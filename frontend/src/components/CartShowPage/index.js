import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import * as cartActions from '../../store/cart'
import { fetchCarts} from "../../store/cart";
import CartIndexItem from "./CartIndexItem";
import { fetchProducts } from "../../store/products";

const CartShow = () => {

    const dispatch = useDispatch();
    const cart_items = useSelector(state => state.carts)
    const products = useSelector(state => state.products)
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id
    let items =  Object.values(cart_items).filter((item) => item.userId === userId)
    let selectedProducts = items.map((cartItem) => products[cartItem.productId])
   

    const quantities = items.reduce((acc, cartItem) => {
        acc[cartItem.productId] = cartItem.quantity;
        return acc;
      }, {});

      console.log(quantities, 'tha quantities');
      console.log(quantities[2], 'el dino')

    console.log(cart_items, 'these cart items')
    console.log(items, 'these items')
    console.log(selectedProducts, 'these products');
    // debugger
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if (!cart_items) return null
    
    let arrangedProducts = selectedProducts.map((item) => {

        const {id, productName, productPrice, photoUrl} = item;
        let price = productPrice.toLocaleString()
        price = price.length < 2 ? [price[0], "00"] : price

        return (
            <div id='cartMainContainer'>
            <div id='productCartName'>{productName}</div>
            <img id='propductCartIma' src={photoUrl}></img>
            <div id='productCartPrice'>${price}</div>
            <div>Qty: {quantities[id]}</div>
            </div>
        )
    })


    return (

    <>
        <h1>Shopping Cart</h1>


        {arrangedProducts}

    </>
)



}


export default CartShow