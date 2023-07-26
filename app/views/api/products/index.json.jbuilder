json.products do 

    @products.each do |product|

        json.set! product.id do 
            json.extract! product, :id, :product_name, :description, :product_price, :created_at, :updated_at

        end 
    end 
end 


