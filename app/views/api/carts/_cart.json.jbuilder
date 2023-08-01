json.extract! cart, :id, :product_id, :user_id, :quantity, :created_at, :updated_at


# product = cart.product

# json.product do 
#     json.extract! product, :product_name, :product_price
#     json.photoUrl product.photo.url
# end 