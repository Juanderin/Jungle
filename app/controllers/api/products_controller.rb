class Api::ProductsController < ApplicationController    


    def show 

        @product = Product.find_by(id: params[:id])
        render :show
    
    end 


    def index 

        @products = Product.all
        @cart_items = Cart.all
        
        render :index

    end 

    

    def search 
        query = params[:query]
        @products = Product
        .where('product_name ILIKE ?', "%#{query}%" )

    end 

    

end 