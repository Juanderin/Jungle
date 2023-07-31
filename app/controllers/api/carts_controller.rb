class Api::CartsController < ApplicationController    


    def show 

        @cart = Cart.find_by(id: params[:id])
        render :show
    
    end 


    def index 

        @cart = Cart.all
        render :index

    end 

    

end 