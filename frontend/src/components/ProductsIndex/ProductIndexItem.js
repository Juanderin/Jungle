import React from "react";
import { Link } from "react-router-dom/";

const ProductsIndexItem = ({product}) => {
  const priceStr = product.productPrice.toFixed(2)
  const price = priceStr.split(".")


    return (
        <>
        
        <div id='indexItemsContainer'> 
          <Link to={`/products/${product.id}`} id="productLinkContainerIndex">
          <img id='productImg' src={product.photoUrl} alt='product_image' />
          <br></br>
          <div id='productNameOnIndex'>{product.productName}</div>
          <div id='productPriceOnIndex'>{price[0]}<div id="productCentsOnIndex">{price[1]}</div></div>
        </Link> 
        </div>
        </>
    )

}

export default ProductsIndexItem