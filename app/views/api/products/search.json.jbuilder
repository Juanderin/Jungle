json.products ({})

    json.products do 

        @products.each do |product|

            json.set! product.id do 
                json.extract! product, :id, :product_name, :description, :product_price, :category, :created_at, :updated_at
                json.photoUrl product.photo.attached? ? product.photo.url : nil 
            end 
        end 
    end 
