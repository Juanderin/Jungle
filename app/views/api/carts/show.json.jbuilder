json.array! @cart_products.each do |cart_product|
    json.id cart_product.product.id
    json.quantity cart_product.quantity
    json.photoUrl cart_product.product.photo.attached? ? url_for(cart_product.product.photo.url) : nil
    json.extract! cart_product.product, :id, :product_name, :description, :product_price, :category
end 