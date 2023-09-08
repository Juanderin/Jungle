import React from "react";
import { Link } from "react-router-dom/";
import ProductShow from "../ProductShowPage";
import MainPage from "../MainPageForm";


const ProductsIndexItem = ({product}) => {
  const priceStr = product.productPrice.toLocaleString()
  let price = priceStr.split(".")
  price = price.length < 2 ? [price[0], "00"] : price
  

  
    return (
        <>
        
        <div id='indexItemsContainer'> 
          <Link to={`/products/${product.id}`} id="productLinkContainerIndex">
            <div id='imgContainerIndex'>
              <img id='productImgOne' src={product.photoUrl} alt='product_image' />
            </div>
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