json.reviews do 
    json.extract! @review, :id, :title, :body, :rating, :user_id, :product_id, :created_at, :updated_at
end 
