class Api::ProductsController < ApplicationController    


    def show 

        @product = Product.find_by(id: params[:id])

        @product_reviews = Review.all.where(product_id: params[:id])


        @users = User.all
     

        render :show
    
    end 


    def index 

        @products = Product.all
   
        if current_user 
            @cart_items =  Cart.all.where(user_id: current_user.id)
        end 
    

        render :index

    end 



    def search 
        query = params[:query]
        @products = Product
        .where('product_name ILIKE ?', "%#{query}%" )

    end 

    
    

end 