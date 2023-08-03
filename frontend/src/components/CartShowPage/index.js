import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import * as cartActions from '../../store/cart'
import { fetchCarts} from "../../store/cart";
import CartIndexItem from "./CartIndexItem";
import { fetchProducts } from "../../store/products";
import './CartShowPage.css'


const CartShow = () => {

    const dispatch = useDispatch();
    const cart_items = useSelector(state => state.carts)
    const products = useSelector(state => state.products)
    const sessionUser = useSelector(state => state.session.user)

    const userId = sessionUser.id
    let items =  Object.values(cart_items).filter((item) => item.userId === userId)
    let selectedProducts = items.map((cartItem) => products[cartItem.productId])

    const subAmount = selectedProducts.length
    const totalPrice = selectedProducts.reduce((sum, product) => sum + product.productPrice, 0)
    let priceTotal = totalPrice.toLocaleString()
    priceTotal = priceTotal.length < 2 ? [priceTotal[0], ".00"] : priceTotal




    const quantities = items.reduce((acc, cartItem) => {
        acc[cartItem.productId] = cartItem.quantity;
        return acc;
    }, {});
    
    const itemIds = items.reduce((acc, cartItems) => {
        acc[cartItems.productId] = cartItems.id
        return acc;
        
    }, {});


    const handleChange = (cartItem) => {

        return (e) => {
            cartItem.quantity = e.target.value
            dispatch(cartActions.updateCart(cartItem))
        }

        
    }

    
    const handleDelete = (id) => {

        dispatch(cartActions.deleteCart(itemIds[id]))

    }

    console.log(itemIds, 'the og ids')

    console.log(quantities, 'tha quantities');
    console.log(quantities[2], 'el dino')

    console.log(cart_items, 'these cart items')
    console.log(items, 'these items')
    console.log(selectedProducts, 'these products');

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if (!cart_items) return null
    
    let arrangedProducts = selectedProducts.map((item) => {
     
        const {id, productName, productPrice, photoUrl} = item;
        let price = productPrice.toLocaleString()
        price = price.length < 2 ? [price[0], ".00"] : price
        

        return (
           
            <div>

                    <div id='cartSubContainer'>
                        <img id='productCartImg' src={photoUrl}></img>

                        <div id='cartInfoContainer'>
                            <div id='productCartName'>{productName}</div>
                            <div id='productCartPrice'>${price}</div>
                            <div id='inStockCart'>In Stock</div>

                                <div id='eligibleFree'>Eligible for FREE Shipping <span id='eligibleFreeTwo'>&</span> <span id='eligibleFreeThree'>FREE Returns</span></div>

                            <div id="cartModifyContainer">
                                <div id='dropShow'>
                                    <label id="dropText">Qty: </label>
                                        <select id="dropdown" value={quantities[id]} onChange={handleChange({id: itemIds[id], productId: id, userId: userId, quantity: quantities[id]})}>

                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                </div>
                                        
                                <div id='cartShowPageHorizontalDivider'></div>

                                    <button id='cartDeleteButton' onClick={() => handleDelete(id)}>Delete</button>

                                <div id='cartShowPageHorizontalDivider'></div>

                            </div>

                        </div>

                    </div>

                <div id='cartShowPageDivider'></div>

            </div>
                
          
        )
    })





    return (

    <>
        <div id='cartPageContainer'>


            <div id='cartMainContainer'>
                <div id='mainCartHeader'>Shopping Cart</div>
                    <div id='cartShowPageDivider'></div>


                {arrangedProducts}
            </div>

            <div id='cartSidebarContainer'>
                <div id='subtotalContainer'>
                    <div id='subtotalSubContainer'>

                    <div id='eligibleFreeSubtotal'>Your order qualifies for FREE Shipping. <span id='eligibleFreeSubtotalTwo'>Get it upon checkout</span></div>
                        

                        <div id='subtotalHeader'>Subtotal {`(${subAmount} items)`}: ${priceTotal} </div>
                        <div id='giftBoxContainer'>
                        <input id='giftCheckbox' type="checkbox"></input>
                        <span id="giftBoxText">This order contains a gift</span>
                        </div>
                    <button id='checkoutButton'>Proceed to checkout</button>
                    </div>
                </div>
                <div id='recommendedContainer'></div>
            </div>

        </div>
    </>
)



}


export default CartShow