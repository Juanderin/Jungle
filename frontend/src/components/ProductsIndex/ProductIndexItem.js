import React from "react";
import { Link } from "react-router-dom/";

const ProductsIndexItem = ({product}) => {

    return (
        <>from product index item
      <Link to={`/products/${product.id}`}> {product.productName} </Link> 
        </>
    )

}

export default ProductsIndexItem