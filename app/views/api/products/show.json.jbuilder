json.product do 

     json.set! @product.id do 
        json.extract! @product, :id, :product_name, :description, :product_price, :created_at, :updated_at
        
     end 
end 