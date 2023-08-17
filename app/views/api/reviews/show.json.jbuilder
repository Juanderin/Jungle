json.reviews({})

    json.reviews do 
        @reviews&.each do |review|
            json.set! review.id do 
                json.extract! review, :id, :title, :body, :rating, :user_id, :product_id, :created_at, :updated_at
            end 
        end 
    end 

    json.users({})

    json.users do 
        @users&.each do |user|
            json.set! user.id do 
                json.extract! user, :id, :username
            end 
        end 
    end 