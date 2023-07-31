import React from "react";
import { Link } from "react-router-dom/";

const ProductsIndexItem = ({product}) => {

    return (
        <>
        
        <div id='indexItemsContainer'> 
          <Link to={`/products/${product.id}`} id="productLinkContainerIndex">
          <img id='productImg' src={product.photoUrl} alt='product_image' />
          <br></br>
          <div id='productNameOnIndex'>{product.productName}</div>
        </Link> 
        </div>
        </>
    )

}

export default ProductsIndexItem