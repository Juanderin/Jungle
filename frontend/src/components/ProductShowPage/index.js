// import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/";
import { fetchProduct } from "../../store/products";

const ProductShow = () => {
    const dispatch = useDispatch();
    const productId = useParams().productId
    const product = useSelector(state => state.products?.[productId])

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [productId])    


    if (!product) return null
    return(
        <>
        {product.productName}
        {/* <br/>
        {product.photoUrl} */}
        <img id='productImg' src={product.photoUrl} alt='product_image' />
        </>
    )

}


export default ProductShow;



