import React, { useEffect } from "react";
import './ProductsIndex.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products";
import ProductsIndexItem from "./ProductIndexItem";


const ProdutsIndex = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if(!products) return null

    return (
        <>
        <div id='title'> from products index </div>

        {Object.values(products).map((product) => <ProductsIndexItem product={product}/> )}
        </>
    )

}


export default ProdutsIndex