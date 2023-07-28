import React from "react";
import { Link } from "react-router-dom/";

const ProductsIndexItem = ({product}) => {

    return (
        <>
        <div id='indexItemsContainer'> 
          <Link to={`/products/${product.id}`}> {product.productName} 
        <img id='productImage' src="/cheeto.jpeg"/>
        </Link> 
      </div>
        </>
    )

}

export default ProductsIndexItem