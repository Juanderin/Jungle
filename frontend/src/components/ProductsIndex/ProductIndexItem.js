import React from "react";
import { Link } from "react-router-dom/";
import ProductShow from "../ProductShowPage";

const ProductsIndexItem = ({product}) => {
  const priceStr = product.productPrice.toLocaleString()
  let price = priceStr.split(".")
  price = price.length < 2 ? [price[0], "00"] : price
  

  
    return (
        <>
        
        <div id='indexItemsContainer'> 
          <Link to={`/products/${product.id}`} id="productLinkContainerIndex">
            <img id='productImg' src={product.photoUrl} alt='product_image' />
          <br></br>
            <div id='productInfoContainerOnIndex'>
              <div id='productNameOnIndex'>{product.productName}</div>
              <div id='productPriceOnIndex'><div id="productCentsOnIndex">$</div>{price[0]}<div id="productCentsOnIndex">{price[1]}</div></div>
            </div>
        </Link> 
        </div>
        </>
    )

}

export default ProductsIndexItem