# json.cart do 
#     json.partial! 'cart', cart: @cart
# end

json.cart do 
    json.extract! @cart, :id, :product_id, :user_id, :quantity, :created_at, :updated_at
end