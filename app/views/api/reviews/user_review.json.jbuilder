json.review ({})

json.review do 
    @review&.each do |review|
        json.set! review.product_id do 
            json.extract! review, :id, :title, :body, :rating, :user_id, :product_id, :created_at, :updated_at
        end 
    end 
end 