json.carts do
    @carts.each do |product|
            json.set! product.id do
                json.extract! product, :id, :user_id, :product_id, :quantity, :created_at, :updated_at
        end 
    end 
end 


