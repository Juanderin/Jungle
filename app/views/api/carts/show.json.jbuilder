# json.cart do 
#     json.partial! 'cart', cart: @cart
# end

json.cart do 
    json.extract! @cart, :id, :user_id, :product_id, :quantity, :created_at, :updated_at
end