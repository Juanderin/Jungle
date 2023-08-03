import React, { useEffect } from "react";
import './ProductsIndex.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products";
import ProductsIndexItem from "./ProductIndexItem";

const ProductsIndex = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if(!products) return null

    return (
        <>
        {Object.values(products).map((product) => <ProductsIndexItem product={product}/> )}
        </>
    )

}


export default ProductsIndex