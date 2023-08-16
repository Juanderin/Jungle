json.product do 

     json.set! @product.id do 
        json.extract! @product, :id, :product_name, :description, :product_price, :category, :created_at, :updated_at
        json.photoUrl @product.photo.attached? ? @product.photo.url : nil 
     end 
     
end 

json.reviews({})

    json.reviews do 
        @product_reviews&.each do |review|
            json.set! review.id do 
                json.extract! review, :id, :title, :body, :rating, :user_id, :product_id, :created_at, :updated_at
            end 
        end 
    end 